import { LoginState } from "@novomarkt/screens/auth/login/hooks";
import { RegisterState } from "@novomarkt/screens/auth/register/hooks";
import { store } from "@novomarkt/store/configureStore";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import { userLoggedOut } from "@novomarkt/store/slices/userSlice";
import axios, { AxiosResponse } from "axios";
import {
	AddCardRequest,
	BaseResponse,
	CardItem,
	CardTypeItem,
	CartItemResponse,
	DeliveryMethodResponse,
	LoginResponse,
	NewsItemResponse,
	OrderItemResponse,
	OrderSend,
	ProductItemResponse,
	QuestionsResponse,
	SendQuestionValue,
	SendReviewProps,
	SliderTypes,
} from "./types";

export let url = "https://birmakon.qwertyuz.ru/api";
export let assetUrl = "https://birmakon.qwertyuz.ru";
axios.interceptors.request.use((config) => {
	let token = store.getState().user.token;
	console.log("token----", token);

	if (token) {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${token}`,
		};
	}
	return config;
});

axios.interceptors.response.use(
	(config) => {
		console.log(config.config.url);

		return config;
	},
	(error) => {
		if (error && error.response && error.response.status == 401) {
			//@ts-ignore
			store.dispatch(userLoggedOut());
		}
		return error;
	}
);

export const appendUrl = (str: string) => {
	return `${assetUrl}${str}`;
};

export const formData = (data: any): FormData => {
	let form = new FormData();
	for (let key in data) {
		form.append(key, data[key]);
	}
	return form;
};

let requests = {
	auth: {
		login: (credentials: LoginState) =>
			axios.post<LoginState, AxiosResponse<LoginResponse>>(
				`${url}/user/sign-in`,
				credentials
			),

		register: (credentials: RegisterState) =>
			axios.post<
				{ token: string; code: string },
				AxiosResponse<{
					data: { token: string; code: string };
				}>,
				RegisterState
			>(`${url}/user/sign-up`, credentials),
		verify: (credentials: { code: string; phone: string }, token: string) =>
			axios.post(`${url}/user/send-code`, credentials, {
				headers: { Authorization: `Bearer ${token}` },
			}),
	},
	profile: {
		getProfile: () => axios.get<{ data: LoginResponse }>(`${url}/user/profile`),
		editProfile: (data: Partial<LoginResponse>) =>
			axios.post<any, any, FormData>(`${url}/user/update`, formData(data)),
		addCard: (creds: AddCardRequest) =>
			axios.post(`${url}/user/card-add`, creds),
		getCardTypes: () =>
			axios.get<{ data: CardTypeItem[] }>(`${url}/category?type=card`),
		getCards: () => axios.get<{ data: CardItem[] }>(`${url}/user/cards`),
		removeCard: (data: { card_id: number }) =>
			axios.post<{ data: CardItem[] }>(`${url}/user/card-remove`, data),
		getUploadPhoto: () =>
			axios.get<{ data: string }>(`${url}/user/upload-photo`),
	},

	categories: {
		getCategories: () => axios.get(`${url}/category?type=product`),
		getSubCategories: (id: number) =>
			axios.get(`${url}/category/sub-category?id=${id}`),
	},

	brands: {
		getBrands: () => axios.get(`${url}/category?type=brand`),
		getAllBrands: () => axios.get(`${url}/brand`),
	},

	shops: {
		getShops: () => axios.get(`${url}/shop`),
	},

	frequentQuestions: {
		getQuestions: () =>
			axios.get<{ data: QuestionsResponse[] }>(`${url}/question`),
		sendQuestion: (creds: SendQuestionValue) =>
			axios.post(`${url}/feedback/send`, creds),
	},

	products: {
		getProducts: () =>
			axios.get<BaseResponse<ProductItemResponse>>(`${url}/product`),
		getProductsWithID: (id: number) =>
			axios.get<BaseResponse<ProductItemResponse>>(
				`${url}/product/by-category?id=${id}`
			),
		getProductWithShopID: (id: number) =>
			axios.get<BaseResponse<ProductItemResponse>>(
				`${url}/product/by-shop?id=${id}`
			),
		getProductsWithBrand: (id: number) =>
			axios.get<BaseResponse<ProductItemResponse>>(
				`${url}/product/by-brand?id=${id}`
			),
		getProductPayment: () =>
			axios.get<BaseResponse<ProductItemResponse>>(
				`${url}/category?type=payment`
			),
		searchProducts: (query: string) =>
			axios.get<BaseResponse<ProductItemResponse>>(
				`${url}/product/search?query=${query}`
			),
		getCarts: () => axios.get<{ data: CartItemResponse[] }>(`${url}/cart`),

		addToCart: (creds: { product_id: number; amount: number }) =>
			axios.post(`${url}/cart/add`, creds),

		clearCart: () => axios.post(`${url}/cart/clear`),

		increaseItem: (creds: { product_id: number; amount: number }) =>
			axios.post(`${url}/cart/add`, creds),

		decreaseItem: (creds: { product_id: number }) =>
			axios.post(`${url}/cart/minus`, creds),

		removeItem: (creds: { product_id: number }) =>
			axios.post(`${url}/cart/remove`, creds),

		deliveryMethods: () =>
			axios.get<BaseResponse<DeliveryMethodResponse>>(`${url}/delivery`),

		getReviews: (product_id: number) =>
			axios.get(`${url}/product/reviews?product_id=${product_id}`),

		sendReview: (data: SendReviewProps) =>
			axios.post(`${url}/product/set-review`, data),
	},

	news: {
		getNews: () => axios.get<BaseResponse<NewsItemResponse>>(`${url}/news`),
		getNewsDetails: (id: number) =>
			axios.get<BaseResponse<NewsItemResponse>>(`${url}/news/detail?id=${id}`),
	},

	favorites: {
		addFavorite: (creds: { product_id: number }) =>
			axios.post(`${url}/product/set-favorite`, creds),

		getFavorites: () =>
			axios.get<BaseResponse<ProductItemResponse>>(`${url}/product/favorites`),
	},

	slider: {
		getSliders: () =>
			axios.get<BaseResponse<SliderTypes>>(`${url}/slider?type=mobile`),
	},

	sort: {
		getSort: (data: any) =>
			axios.get(`${url}/product?sort=${data.sort}&by-brand?id=${data.brand}`),
		getRecently: () => axios.get(`${url}/product?sort=recently`),
		getNewAdded: () => axios.get(`${url}/product?sort=new`),
		getExpensive: () => axios.get(`${url}/product?sort=price_up`),
		getCheap: () => axios.get(`${url}/product?sort=price_down`),
		getPopular: () => axios.get(`${url}/product?sort=popular`),
	},

	order: {
		sendOrder: (credentials: OrderSend) =>
			axios.post(`${url}/order/send`, credentials),
		getOrders: () => axios.get<BaseResponse<OrderItemResponse>>(`${url}/order`),
	},
};
export default requests;
