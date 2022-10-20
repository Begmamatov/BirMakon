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
import { Shadow } from "react-native-shadow-2";
import {
	cartArraySelector,
	cartSelector,
	loadCart,
} from "@novomarkt/store/slices/cartSlice";
import { favoriteSelector } from "@novomarkt/store/slices/favoriteSlice";
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

let productSize = ["35", "36", "37", "38", "39", "40"];

const ProductDetailsView = ({}): ReactElement => {
	const colorScrollerRef = useRef<ScrollView>();
	const sizeScrollerRef = useRef<ScrollView>();
	const [currentColor, setCurrentColor] = useState(0);

	const [currentSize, setCurrentSize] = useState();
	const [sizeScroll, setSizeScroll] = useState(0);
	const [colorValue, setColorValue] = useState([]);

	const [modalOpen, setModalOpen] = useState(false);

	let {
		params: { item, id },
	} = useRoute<any>();

	const [activeSlide, setActiveSlide] = useState(0);
	const [shouldShow, setShouldShow] = useState(true);
	const [loading, setLoading] = useState(false);
	const [reviewsList, setReviewsList] = useState([]);
	const [rate, setRate] = useState(0);
	const [review, setReview] = useState<SendReviewProps>({
		product_id: item.id,
		rate: 0,
		review: "",
	});
	const cart = useAppSelector(cartArraySelector);
	const isActive =
		cart.filter((i) => i.product.id == item.id).length > 0 ? true : false;
	console.log("====================================");
	console.log("Item Value", JSON.stringify(item, null, 2), isActive);
	console.log("====================================");

	let onStateChange = (key: string) => (value: string) => {
		setReview((e) => ({ ...e, [key]: value }));
	};

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	const dispatch = useDispatch();

	let navigation: any = useNavigation();

	const onAddItem = async () => {
		try {
			dispatch(toggleLoading(true));
			let res = await requests.products.increaseItem({
				amount: 1,
				product_id: id,
			});
			let cartRes = await requests.products.getCarts();
			dispatch(loadCart(cartRes.data.data));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(toggleLoading(false));
		}
	};
	const onDecreaseItem = async () => {
		try {
			dispatch(toggleLoading(true));
			let res = await requests.products.decreaseItem({
				product_id: id,
			});
			let cartRes = await requests.products.getCarts();
			dispatch(loadCart(cartRes.data.data));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(toggleLoading(false));
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
	const colorHandler = async () => {
		try {
			let res = await requests.products.colorItem();
			setColorValue(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getReviews();
		colorHandler();
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

	const basketAktev = () => {
		setLoading(true);
		navigation.navigate(ROUTES.CART, { currentSize: currentSize });
		setLoading(false);
	};
	const productCart = cart.filter((i) => i.product.id == item.id);
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
						startingValue={item?.views}
					/>
					<Text>{}отзывов</Text>
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
						data={[item]}
						renderItem={CustomCarouselItem}
						pagingEnabled
					/>
					{/* <Pagination
						activeDotIndex={activeSlide}
						dotsLength={customCarouselData.length}
					/> */}
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
						// ref={colorScrollerRef}
						contentContainerStyle={{ paddingRight: 45, paddingLeft: 20 }}
						style={{ marginTop: 20 }}
					>
						{colorValue.map((a) => {
							const isHas = item.color.name === a.name;
							const borderWidth = isHas ? 1 : 0;
							return (
								<TouchableOpacity onPress={() => setCurrentColor(a.id)}>
									<View
										style={[
											{
												width: 75,
												height: 68,
												backgroundColor: `${a.color}`,
												borderWidth,
											},
										]}
									></View>
								</TouchableOpacity>
							);
						})}
					</ScrollView>
					{/* <View style={styles.scrollView}>
						<TouchableOpacity
							onPress={() => {
								colorScrollerRef.current?.scrollTo({
									x: Dimensions.get("window").width * (colorScrollIndex + 1),
									animated: true,
								});
								setColorScrollIndex(colorScrollIndex + 1);
							}}
						>
							<ScrollViewIcon />
						</TouchableOpacity>
					</View> */}
				</View>
				<Text style={styles.corusellText}>Размер</Text>
				<View>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{ paddingRight: 45, paddingLeft: 20 }}
					>
						{productSize.map((e, index) => {
							return (
								<TouchableOpacity
									onPress={() => {
										setCurrentSize(e);
									}}
								>
									<View style={styles.sectionSize}>
										<Text
											style={
												currentSize === e
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
					{/* <View style={styles.scrollView1}>
						<TouchableOpacity
							onPress={() => {
								sizeScrollerRef.current?.scrollTo({
									x: Dimensions.get("window").width * (sizeScroll + 1),
									animated: true,
								});
								setSizeScroll(sizeScroll + 1);
							}}
						>
							<ScrollViewIcon />
						</TouchableOpacity>
					</View> */}
				</View>
				<View style={styles.deliveryView}>
					<Text style={styles.deliveryText}>Доставка: 318,94 сум</Text>
					<Text style={styles.deliveryText1}>В Uzbekistan через BTC</Text>
					<Text style={styles.deliveryText1}>
						Расчётное время доставки: 29-48 дней
					</Text>
				</View>
				{/* amount */}
				<View style={styles.counter}>
					<TouchableOpacity onPress={onDecreaseItem}>
						<View style={styles.minus}>
							<MinusIcon
								style={{ width: 120, height: 120 }}
								fill={COLORS.white}
							/>
						</View>
					</TouchableOpacity>
					<View style={styles.topBottom}>
						<Text>
							{cart.filter((i) => i.product.id == item.id).length
								? cart.filter((i) => i.product.id == item.id)[0].amount
								: 0}
						</Text>
					</View>
					<TouchableOpacity onPress={onAddItem}>
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
							onPress={basketAktev}
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
						onPress={() =>
							navigation.navigate(ROUTES.COMPARISON, {
								item: item.options,
								productSize: productSize,
							})
						}
					>
						<View style={styles.oldView1}>
							<Text style={styles.oldText}>Сравнить</Text>
						</View>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate(ROUTES.ALL_INFORMATION, {
							options: item.options,
						})
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
				<DefaultButton containerStyle={{ marginHorizontal: 20 }}>
					<Text style={styles.buttonTxt}>{STRINGS.allDetails}</Text>
				</DefaultButton>
				<View style={styles.flatlistContainerView}>
					<View style={styles.flatlistContainer}>
						<Text style={styles.flatlistContainerText}>Описание</Text>
						<RightBlueIcon style={{ width: 120, height: 120 }} />
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
						<RightArrow style={{ width: 120, height: 120 }} fill={COLORS.red} />
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
				<Text style={styles.flexEnd}>{STRINGS.comments}</Text>
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
