import requests, { appendUrl } from "@novomarkt/api/requests";
import { SendReviewProps } from "@novomarkt/api/types";
import {
	BasketIcon,
	BlueBackIcon,
	Checked,
	CheckedItem,
	MarkedStar,
	MinusIcon,
	NotMarkedStar,
	PlusCounterIcon,
	RightArrow,
	RightBlueIcon,
	ScrollViewIcon,
	StarsIcon,
} from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useAppSelector } from "@novomarkt/store/hooks";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import { cartSelector, loadCart } from "@novomarkt/store/slices/cartSlice";
import { useNavigation, useRoute } from "@react-navigation/core";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
	Dimensions,
	Image,
	LayoutAnimation,
	ScrollView,
	TouchableOpacity,
	View,
} from "react-native";
import ReactNativeModal from "react-native-modal";
import { Rating } from "react-native-ratings";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useDispatch } from "react-redux";
import ProductsList from "../../components/ProductsList";
import BackHeaderDefault from "./components/BackHeaderDefault";
import BackHeaderLimit from "./components/BackHeaderLimit";
import CustomCarouselItem from "./components/CustomCarouselItem";
import FavoritePrice from "./components/favoritePrice";
import ReviewBox from "./components/ReviewBox";
import { styles } from "./style";

export let customCarouselData: string[] = [
	"https://konvers-kazan.ru/wp-content/uploads/2020/11/fytbolki_02-e1614013120178.jpg",
	"https://image.freepik.com/free-photo/black-t-shirts-with-copy-space_53876-102012.jpg",
];

let productColors = [
	"https://pngimg.com/uploads/running_shoes/running_shoes_PNG5823.png",
	"https://u01.appmifile.com/images/2018/01/11/e269ddd1-9d47-4beb-8741-92764fb0578d.jpg",
	"https://xiaomistore.md/files/product_common_photo/id_2694/addphoto/10_5a2c291a326fe.jpg",
	"https://www.ixbt.com/img/n1/news/2020/1/6/1269151_10844817.jpg",
	"https://img.championat.com/c/1200x900/news/big/o/l/camye-dorogie-krossovki-v-mire_1593518652374931204.jpg",
];

const data2 = {
	data: {
		id: 100,
		name: "Shakhshop",
		price: 168000,
		price_old: 200000,
		price_opt: 1000,
		price_opt_small: 1200,
		count_price: null,
		count_price1: null,
		count_price2: null,
		discount: 5,
		discount_small_count: null,
		discount_big_count: null,
		weight: 500,
		height: 70,
		width: 30,
		length: 50,
		amount: null,
		brand: {
			id: 3,
			name: "Puma",
			description: "",
			photo: "/uploads/brand/3/original/1648783760.jpeg",
			category: {
				id: 3,
				name: "Продукты",
				description: "",
				photo: "/assets_files/images/no-photo.png",
			},
		},
		category: {
			id: 30,
			name: "Мужские",
			description: "",
			photo: "/assets_files/images/no-photo.png",
		},
		category_full: "Одежда/Рубашки/Мужские",
		category_full_array: [
			{
				id: 2,
				name: "Одежда",
			},
			{
				id: 7,
				name: "Рубашки",
			},
			{
				id: 30,
				name: "Мужские",
			},
		],
		views: 1,
		rating: 0,
		photo: "/uploads/product/100/original/1656527721.png",
		isFavorite: false,
		credit_label: "кредит до 50 млн. сум",
		status: 1,
		shop: {
			id: 8,
			name: "Магазин 2",
			photo: "/uploads/shop/8/original/1647145574.jpeg",
			gallery: [
				"/uploads/shop/8/original/1647125314.jpeg",
				"/uploads/shop/8/original/1646659983.jpeg",
			],
			contact_user: "",
			contact_phone: "",
			date: "2022-06-22 19:43:17",
			map_location: "41.29559575902607, 69.188192299082",
			description: "<p>Тестовое описание магазина 2 (RU)</p>\r\n",
			user: {
				id: 86,
				device_id: null,
				token: "CqAfCUfARIe2t3_yme_uNerzn9nC5FKq",
				login: "shop2",
				name: "Санджар",
				phone: "+998909008877",
				email: "",
				gender: null,
				birthday: null,
				photo: "/assets_files/images/user.png",
				addresses: [],
				date: "2022-06-24 13:34:54",
				last_address: null,
			},
			shopSeller: {
				id: 4,
				inn: "223344",
				account: "555666777",
				bank: "Agrobank",
				address_legal: "56 Aviasozlar 1 Street",
				oked: "4455",
				okohx: "6677",
				mfo: "8899",
			},
			product_count: 18,
			advertisment_count: 1,
			news_count: 0,
		},
		description: "Qalaysiz zo'rmi omonmisiz",
		composition: "Состав Sostav",
		recommendation: "Рекомендации Rek",
		filters: [],
		reviews: [],
		reviews_count: 0,
		review_separate: {
			rate_1: 0,
			rate_2: 0,
			rate_3: 0,
			rate_4: 0,
			rate_5: 0,
		},
		gallery: ["/uploads/product/100/original/1656527721.png"],
		productProperties: [
			{
				key_name: "key 1",
				value_name: "value 1",
			},
			{
				key_name: "key 2",
				value_name: "value 2",
			},
		],
		user: {
			id: 86,
			device_id: null,
			token: "CqAfCUfARIe2t3_yme_uNerzn9nC5FKq",
			login: "shop2",
			name: "Санджар",
			phone: "+998909008877",
			email: "",
			gender: null,
			birthday: null,
			photo: "/assets_files/images/user.png",
			addresses: [],
			date: "2022-06-24 13:34:54",
			last_address: null,
		},
		stock: {
			id: 2,
			name: "тест 2",
			description: "<p>тест</p>\r\n",
			photo: "/assets_files/images/no-photo.png",
			product_count: 23,
			status: 1,
			date: "2022-05-19 09:28:13",
		},
	},
};

let productSize = [
	"35",
	"36",
	"37",
	"38",
	"39",
	"40",
	"41",
	"42",
	"43",
	"44",
	"45",
];

const ProductDetailsView = ({}): ReactElement => {
	const colorScrollerRef = useRef<ScrollView>();
	const sizeScrollerRef = useRef<ScrollView>();
	const [currentColor, setCurrentColor] = useState(-1);
	const [colorScrollIndex, setColorScrollIndex] = useState(0);
	const [currentSize, setCurrentSize] = useState(-1);
	const [sizeScroll, setSizeScroll] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const [modalOpen, setModalOpen] = useState(false);

	let {
		params: { item, id },
	} = useRoute();

	const [activeSlide, setActiveSlide] = useState(0);
	const [shouldShow, setShouldShow] = useState(true);
	const [loading, setLoading] = useState(false);
	const [reviewsList, setReviewsList] = useState([]);
	const [review, setReview] = useState<SendReviewProps>({
		product_id: item.id,
		rate: 0,
		review: "",
	});

	const [rate, setRate] = useState(0);

	console.log("====================================");
	console.log(JSON.stringify(review, null, 4));
	console.log("====================================");

	let onStateChange = (key: string) => (value: string) => {
		console.log({ review, "OLD REVIEW": "" });

		setReview((e) => ({ ...e, [key]: value }));
		console.log({ key, value, review });
	};

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	const dispatch = useDispatch();
	let navigation: any = useNavigation();
	const cart = useAppSelector(cartSelector);
	let isInCart = !!cart[id];

	const onCartPress = async () => {
		try {
			if (isInCart) {
				dispatch(toggleLoading(true));
				let clear = await requests.products.removeItem({
					product_id: id,
				});
				let cartGet = await requests.products.getCarts();
				dispatch(loadCart(cartGet.data.data));
				dispatch(toggleLoading(false));
			} else {
				dispatch(toggleLoading(true));
				let res = await requests.products.addToCart({
					amount: 1,
					product_id: id,
				});
				let cartRes = await requests.products.getCarts();
				dispatch(loadCart(cartRes.data.data));
				dispatch(toggleLoading(false));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onSendReview = async () => {
		try {
			setLoading(true);
			let res = await requests.products.sendReview({
				rate: review.rate,
				review: review.review,
				product_id: review.product_id,
			});
			setLoading(false);
			setTimeout(() => {
				setReview({ product_id: id, rate: 0, review: "" });
				setModalOpen(false);
			}, 700);
		} catch (error) {
			console.log(error);
		}
	};

	const getReviews = async () => {
		try {
			let res = await requests.products.getReviews(item?.id);
			setReviewsList(res.data.data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getReviews();
	}, []);

	let per;

	reviewsList.map((i) => {
		const sum = reviewsList.reduce((a: any, b: any) => {
			return b.rate + a;
		}, 0);
		const sumReviews = reviewsList.reduce((a, b) => {
			return b.review;
		}, "");

		let percent = sum / reviewsList.length;
		per = percent.toString().substring(0, 3);
		console.log(percent.toString().substring(0, 3));
	});

	return (
		<View style={styles.container}>
			<BackHeaderLimit name={item.name} />
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 50 }}
			>
				<View style={styles.otsenka}>
					<Rating
						type="custom"
						ratingCount={5}
						imageSize={18}
						ratingColor="#EE4927"
						ratingBackgroundColor="#f1f1f1c1"
						readonly={true}
						startingValue={3.8}
					/>
					<Text>54 отзывов</Text>
				</View>
				<View style={styles.carousel}>
					<Carousel
						onSnapToItem={(index) => setActiveSlide(index)}
						itemWidth={WINDOW_WIDTH}
						windowSize={WINDOW_WIDTH}
						sliderWidth={WINDOW_WIDTH}
						itemHeight={200}
						sliderHeight={200}
						data={customCarouselData}
						renderItem={CustomCarouselItem}
						pagingEnabled
					/>
					<Pagination
						activeDotIndex={activeSlide}
						dotsLength={customCarouselData.length}
					/>
					<Text style={styles.itemName}>{item.name}</Text>
				</View>
				<FavoritePrice
					oldprice={item.price_old}
					newprice={item.price}
					fromTo={item.count_price}
					fromToFrom={item.count_price1}
					tofrom={item.count_price2}
					smallprice={item.price_opt_small}
					bigprice={item.price_opt}
				/>
				<Text style={styles.corusellText}>Цвет</Text>
				<View>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						ref={colorScrollerRef}
						contentContainerStyle={{ paddingRight: 60 }}
					>
						{productColors.map((e, i) => {
							return (
								<TouchableOpacity onPress={() => setCurrentColor(i)}>
									<View style={styles.corusellContiner}>
										<Image
											source={{ uri: e }}
											style={
												currentColor === i
													? styles.activeColor
													: styles.corusell
											}
										/>
									</View>
								</TouchableOpacity>
							);
						})}
					</ScrollView>
					<View style={styles.scrollView}>
						<TouchableOpacity
							onPress={() => {
								console.log({ colorScrollIndex });

								colorScrollerRef.current?.scrollTo({
									x: Dimensions.get("window").width * (colorScrollIndex + 1),
									animated: true,
								});
								setColorScrollIndex(colorScrollIndex + 1);
							}}
						>
							<ScrollViewIcon />
						</TouchableOpacity>
					</View>
				</View>
				<Text style={styles.corusellText}>Размер</Text>
				<View>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						ref={sizeScrollerRef}
						contentContainerStyle={{ paddingRight: 45, paddingLeft: 20 }}
					>
						{productSize.map((e, index) => {
							return (
								<TouchableOpacity
									onPress={() => {
										// sizeScrollerRef.current?.scrollTo({
										// 	x: (index + 1) * 20,
										// 	animated: true,
										// });
										setCurrentSize(index);
									}}
								>
									<View style={styles.sectionSize}>
										<Text
											style={
												currentSize === index
													? styles.activeSize
													: styles.sectionText
											}
										>
											{e}
										</Text>
									</View>
								</TouchableOpacity>
							);
						})}
					</ScrollView>
					<View style={styles.scrollView1}>
						<TouchableOpacity
							onPress={() => {
								console.log({
									setSizeScroll,
								});

								sizeScrollerRef.current?.scrollTo({
									x: Dimensions.get("window").width * (sizeScroll + 1),
									animated: true,
								});
								setSizeScroll(sizeScroll + 1);
							}}
						>
							<ScrollViewIcon />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.deliveryView}>
					<Text style={styles.deliveryText}>Доставка: 318,94 сум</Text>
					<Text style={styles.deliveryText1}>В Uzbekistan через BTC</Text>
					<Text style={styles.deliveryText1}>
						Расчётное время доставки: 29-48 дней
					</Text>
				</View>
				<View style={styles.counter}>
					<TouchableOpacity>
						<View style={styles.minus}>
							<MinusIcon fill={COLORS.white} />
						</View>
					</TouchableOpacity>
					<View style={styles.topBottom}>
						<Text>1 шт</Text>
					</View>
					<TouchableOpacity>
						<View style={styles.plus}>
							<PlusCounterIcon fill={COLORS.white} />
						</View>
					</TouchableOpacity>
					<View style={styles.function}>
						<Text style={styles.functionText}>Габариты: 120х120</Text>
					</View>
				</View>
				<View style={styles.oldContainer}>
					<TouchableOpacity>
						<View style={styles.oldView}>
							<Text style={styles.oldText}>Купить</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.sectionContainer}>
						<DefaultButton
							containerStyle={styles.button}
							onPress={() => setIsActive((e) => !e)}
							secondary={isActive}
						>
							<View style={styles.buttonContainer}>
								<Text
									style={[isActive ? styles.inactiveCartText : styles.cartText]}
								>
									{STRINGS.addToCart}
								</Text>
								<BasketIcon
									fill={isActive ? COLORS.cartColor3 : COLORS.white}
								/>
							</View>
						</DefaultButton>
					</View>
					<TouchableOpacity onPress={() => navigation.navigate(ROUTES.COMPARE)}>
						<View style={styles.oldView1}>
							<Text style={styles.oldText}>Сравнить</Text>
						</View>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate(ROUTES.CHARACTERISTIC_DETAILS, {
							options: item.options,
						})
					}
				>
					<View style={styles.sectionBox}>
						<Text style={styles.sectionBoxText}>{STRINGS.allDetails}</Text>
						<View style={styles.iconView}>
							<BlueBackIcon />
						</View>
					</View>
				</TouchableOpacity>
				{item.options?.map((e: any) => {
					return (
						<View style={styles.map}>
							<Text style={styles.key}>{e.key}</Text>
							<Text>{e.value}</Text>
						</View>
					);
				})}
				<DefaultButton containerStyle={{ marginHorizontal: 20 }}>
					<Text style={styles.buttonTxt}>{STRINGS.allDetails}</Text>
				</DefaultButton>
				<View style={styles.flatlistContainerView}>
					<View style={styles.flatlistContainer}>
						<Text style={styles.flatlistContainerText}>Описание</Text>
						<RightBlueIcon />
					</View>
					<View style={styles.flatlistContainerBox}>
						<Text style={styles.flatlistContainerBoxText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat a
							ut pellentesque adipiscing viverra risus laoreet. Orci, dictumst
							eget vel nunc at vulputate cras posuere commodo. Tortor, semper
							fermentum felis sagittis, phasellus molestie at nunc ut. Sit
							tristique at faucibus risus nunc cras.
						</Text>
						<Text style={styles.flatlistContainerBoxText1}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat a
							ut pellentesque adipiscing viverra risus laoreet. Orci, dictumst
							eget vel nunc at vulputate cras posuere commodo. Tortor,
							semperdispatch(toggleLoading()); fermentum felis sagittis,
							phasellus molestie at nunc ut. Sit tristique at faucibus risus
							nunc cras.
						</Text>
					</View>
				</View>
				<View>
					<View style={styles.flatlistContainer12}>
						<Text style={styles.flatlistContainerText12}>Мироншох</Text>
					</View>
					<View style={styles.propertyBox}>
						<Text style={styles.propertyBoxText}>
							12545 отзывов (94% положительных)
						</Text>
						<Text style={styles.propertyBoxText}>Махмуда тараби 23</Text>
						<Text style={styles.propertyBoxText}>Ташкент</Text>
					</View>
				</View>
				<View style={{ marginHorizontal: 10 }}>
					<ProductsList title={STRINGS.advertBlock} />
				</View>
				<DefaultButton containerStyle={styles.marginBottomEnd}>
					<Text style={styles.buttonReview}>{STRINGS.sendCustomer}</Text>
				</DefaultButton>
				<TouchableOpacity
					onPress={() => {
						LayoutAnimation.configureNext(
							LayoutAnimation.Presets.easeInEaseOut
						);
						setShouldShow(!shouldShow);
					}}
				>
					<View style={styles.composTwo}>
						<Text style={styles.composition}>
							{STRINGS.reviews} {reviewsList.length}
						</Text>
						<RightArrow fill={COLORS.red} />
					</View>
				</TouchableOpacity>
				<ReviewBox percent={per} />
				{!shouldShow ? (
					<View style={{ marginVertical: 10 }}>
						{reviewsList?.map((item) => (
							<View style={styles.containerComment}>
								<View style={styles.boxes}>
									<View style={styles.nameRow}>
										<Text style={styles.name}>{item.user.name}</Text>
										<View style={styles.stars}>
											{new Array(5).fill(1).map((e, i) => {
												if (i < item.rate) {
													return <MarkedStar fill={COLORS.red} />;
												} else {
													return <NotMarkedStar fill={COLORS.whiteGray} />;
												}
											})}
										</View>
									</View>
									<Text style={styles.comment}>{item.review}</Text>
									<View style={styles.row}>
										<Text>{item.date.split(" ")[0]}</Text>
										<View style={styles.row}>
											<Checked fill={COLORS.red} style={styles.icon} />
											<Text>Я купил товар</Text>
										</View>
									</View>
								</View>
							</View>
						))}
					</View>
				) : null}
				<Text style={styles.flexEnd}>{STRINGS.comments}</Text>
				<DefaultButton
					containerStyle={styles.marginBottom}
					onPress={() => {
						setModalOpen(!modalOpen);
						LayoutAnimation.configureNext(
							LayoutAnimation.Presets.easeInEaseOut
						);
					}}
				>
					<Text style={styles.buttonReview}>{STRINGS.sendReview}</Text>
				</DefaultButton>
				<View style={{ marginHorizontal: 10 }}>
					<ProductsList title={STRINGS.advertBlock} />
				</View>
			</ScrollView>
			<ReactNativeModal isVisible={modalOpen} onBackdropPress={toggleModal}>
				<View style={styles.modalView}>
					<DefaultInput
						autoFocus={modalOpen}
						title={STRINGS.sendReview}
						inputStyle={styles.inputStyle}
						value={review.review}
						onChange={onStateChange("review")}
						titleStyle={{ marginVertical: 10, fontSize: 20 }}
					/>
					<Rating
						type="star"
						ratingCount={5}
						imageSize={20}
						onFinishRating={(e: number) => setRate(e)}
						style={styles.rating}
						startingValue={rate}
					/>
					<DefaultButton
						onPress={onSendReview}
						text={STRINGS.sendReview}
						loading={loading}
						containerStyle={styles.buttonSubmit}
					/>
				</View>
			</ReactNativeModal>
		</View>
	);
};

export default ProductDetailsView;
