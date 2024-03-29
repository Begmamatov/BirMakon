import requests from "@novomarkt/api/requests";
import { SendReviewProps } from "@novomarkt/api/types";
import {
	BasketIcon,
	BlueBackIcon,
	Checked,
	MarkedStar,
	MinusIcon,
	NotMarkedStar,
	PlusCounterIcon,
	RightArrow,
	RightBlueIcon,
} from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useAppSelector } from "@novomarkt/store/hooks";
import { cartArraySelector, loadCart } from "@novomarkt/store/slices/cartSlice";
import { useNavigation, useRoute } from "@react-navigation/core";
import React, { ReactElement, useEffect, useState } from "react";
import {
	Alert,
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
import BackHeaderLimit from "./components/BackHeaderLimit";
import CustomCarouselItem from "./components/CustomCarouselItem";
import ReviewBox from "./components/ReviewBox";
import FavoritePrice from "./components/favoritePrice";
import { styles } from "./style";

const ProductDetailsView = ({}): ReactElement => {
	const [detailIdValue, setDetailIdValue] = useState<any>([]);
	const [modalOpen, setModalOpen] = useState(false);
	let {
		params: { item, id },
	} = useRoute<any>();

	const [activeSlide, setActiveSlide] = useState(0);
	const [shouldShow, setShouldShow] = useState(true);
	const [loading, setLoading] = useState(false);
	const [reviewsList, setReviewsList] = useState<any>([]);
	const [rate, setRate] = useState(0);
	const [review, setReview] = useState<SendReviewProps>({
		product_id: item.id,
		rate: 0,
		review: "",
	});
	const cart = useAppSelector(cartArraySelector);
	const isActive =
		cart.filter((i) => i.product.id == item.id).length > 0 ? true : false;

	let onStateChange = (key: string) => (value: string) => {
		setReview((e) => ({ ...e, [key]: value }));
	};

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};
	const dispatch = useDispatch();
	let navigation: any = useNavigation();

	let isInCart = !!cart[id];
	const [animate, setAnimate] = useState(false);

	const onCartPress = async () => {
		if (isInCart) {
			try {
				setAnimate(true);
				let clear = await requests.products.removeItem({
					product_id: id,
				});
				let cartGet = await requests.products.getCarts();
				dispatch(loadCart(cartGet.data.data));
				setAnimate(false);
			} catch (error) {
				console.log(error);
				setAnimate(false);
			}
		} else {
			try {
				setAnimate(true);
				let res = await requests.products.addToCart({
					amount: adValue,
					product_id: id,
				});
				if (res.status.toString() === "422") {
					Alert.alert("Кол-во товара на складе меньше чем вы указали");
				}
				let cartRes = await requests.products.getCarts();
				dispatch(loadCart(cartRes.data.data));
				setAnimate(false);
			} catch (error) {
				Alert.alert("Кол-во товара на складе меньше чем вы указали");
			} finally {
				setAnimate(false);
			}
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
	const getDetailId = async () => {
		try {
			let res = await requests.products.getProductDetailID(id);
			setDetailIdValue(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};
	let per = detailIdValue.reviews_count;
	let separate = detailIdValue.review_separate;
	reviewsList.map(() => {
		const sum = reviewsList.reduce((a: any, b: any) => {
			return b.rate + a;
		}, 0);

		let percent = sum / reviewsList.length;
		per = percent.toString().substring(0, 3);
	});

	// const basketAktev = () => {
	// 	setLoading(true);
	// 	navigation.navigate(ROUTES.CART);
	// 	setLoading(false);
	// };
	const productCart = cart.filter((i) => i.product.id == item.id);
	const massive = detailIdValue.gallery;

	useEffect(() => {
		getReviews();
		getDetailId();
	}, []);
	const [adValue, setAdValue] = useState(0);
	const adHandler = (a: string) => {
		if (a === "add") {
			setAdValue((c) => c + 1);
		} else {
			if (adValue > 0) {
				setAdValue((c) => c - 1);
			} else {
				setAdValue(0);
			}
		}
	};

	return (
		<View style={styles.container}>
			<BackHeaderLimit name={item.name} id={id} />
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
						startingValue={item?.rating}
					/>
					<Text>{item.views} отзывов</Text>
				</View>
				{/* carousel */}
				<View style={styles.carousel}>
					<Carousel
						onSnapToItem={(index) => setActiveSlide(index)}
						itemWidth={WINDOW_WIDTH}
						windowSize={WINDOW_WIDTH}
						sliderWidth={WINDOW_WIDTH}
						itemHeight={200}
						sliderHeight={200}
						data={detailIdValue.gallery}
						renderItem={CustomCarouselItem}
						pagingEnabled
					/>
					<Pagination
						activeDotIndex={activeSlide}
						dotsLength={
							detailIdValue.gallery ? detailIdValue.gallery.length : 1
						}
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

				<View style={styles.counter}>
					<TouchableOpacity onPress={() => adHandler("remov")}>
						<View style={styles.minus}>
							<MinusIcon
								style={{ width: 120, height: 120 }}
								fill={COLORS.white}
							/>
						</View>
					</TouchableOpacity>
					<View style={styles.topBottom}>
						<Text>
							{/* {cart.filter((i) => i.product.id == item.id).length
								? cart.filter((i) => i.product.id == item.id)[0].amount
								: 0} */}
							{adValue}
						</Text>
					</View>
					<TouchableOpacity onPress={() => adHandler("add")}>
						<View style={styles.plus}>
							<PlusCounterIcon
								style={{ width: 120, height: 120 }}
								fill={COLORS.white}
							/>
						</View>
					</TouchableOpacity>
					<View style={styles.function}>
						<Text style={styles.functionText}>Габариты: 120х120</Text>
					</View>
				</View>
				{/* amount */}
				<View style={styles.oldContainer}>
					<TouchableOpacity
						onPress={() => navigation.navigate(ROUTES.CHECKOUT, productCart)}
					>
						<View style={styles.oldView}>
							<Text style={styles.oldText}>Купить</Text>
						</View>
					</TouchableOpacity>

					{/* basketAktev */}
					<View style={styles.sectionContainer}>
						<DefaultButton
							containerStyle={styles.button}
							onPress={onCartPress}
							secondary={isActive}
						>
							<View style={styles.buttonContainer}>
								<Text
									style={[isActive ? styles.inactiveCartText : styles.cartText]}
								>
									{STRINGS.addToCart}
								</Text>
								<BasketIcon
									style={{ width: 120, height: 120 }}
									fill={isActive ? COLORS.cartColor3 : COLORS.white}
								/>
							</View>
						</DefaultButton>
					</View>
					{/* basketAktev */}

					<TouchableOpacity
					// onPress={() =>
					// 	navigation.navigate(ROUTES.COMPARISON, {
					// 		item: item.options,
					// 		productSize: productSize,
					// 	})
					// }
					>
						<View style={styles.oldView1}>
							<Text style={styles.oldText}>Сравнить</Text>
						</View>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate(ROUTES.ALL_INFORMATION, detailIdValue)
					}
				>
					<View style={styles.sectionBox}>
						<Text style={styles.sectionBoxText}>{STRINGS.allDetails}</Text>
						<View style={styles.iconView}>
							<BlueBackIcon style={{ width: 120, height: 120 }} />
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

				<View style={styles.flatlistContainerView}>
					<View style={styles.flatlistContainer}>
						<Text style={styles.flatlistContainerText}>Описание</Text>
						<RightBlueIcon style={{ width: 120, height: 120 }} />
					</View>
					<View style={styles.flatlistContainerBox}>
						<Text style={styles.flatlistContainerBoxText}>
							{detailIdValue.description}
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
					<ProductsList title="Товары продовца" />
				</View>
				<DefaultButton containerStyle={styles.marginBottomEnd}>
					<Text style={styles.buttonReview}>Перейти в магазин</Text>
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
						<RightArrow style={{ width: 120, height: 120 }} fill={COLORS.red} />
					</View>
				</TouchableOpacity>
				{/* ReviewBox */}
				<ReviewBox
					percent={per}
					separate={separate}
					rating={detailIdValue.rating}
				/>
				{/* ReviewBox */}
				{!shouldShow ? (
					<View style={{ marginVertical: 10 }}>
						{reviewsList?.map((item: any) => (
							<View key={item.id} style={styles.containerComment}>
								<View style={styles.boxes}>
									<View style={styles.nameRow}>
										<Text style={styles.name}>{item.user.name}</Text>
										<View style={styles.stars}>
											{new Array(5).fill(1).map((e, i) => {
												if (i < item.rate) {
													return (
														<MarkedStar
															style={{ width: 120, height: 120 }}
															fill={COLORS.red}
														/>
													);
												} else {
													return (
														<NotMarkedStar
															style={{ width: 120, height: 120 }}
															fill={COLORS.whiteGray}
														/>
													);
												}
											})}
										</View>
									</View>
									<Text style={styles.comment}>{item.review}</Text>
									<View style={styles.row}>
										<Text>{item.date.split(" ")[0]}</Text>
										<View style={styles.row}>
											<Checked
												fill={COLORS.red}
												style={[styles.icon, { width: 120, height: 120 }]}
											/>
											<Text>Я купил товар</Text>
										</View>
									</View>
								</View>
							</View>
						))}
					</View>
				) : null}
				<TouchableOpacity
					onPress={() => navigation.navigate(ROUTES.REVIEWSALL, reviewsList)}
				>
					<Text style={styles.flexEnd}>{STRINGS.comments}</Text>
				</TouchableOpacity>

				<DefaultButton
					containerStyle={styles.marginBottom}
					onPress={toggleModal}
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
						// autoFocus={modalOpen}
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
