import requests, { appendUrl } from "@novomarkt/api/requests";
import { SendReviewProps } from "@novomarkt/api/types";
import {
	BasketIcon,
	Checked,
	CheckedItem,
	MarkedStar,
	NotMarkedStar,
	RightArrow,
} from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { useAppSelector } from "@novomarkt/store/hooks";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import { cartSelector, loadCart } from "@novomarkt/store/slices/cartSlice";
import { useNavigation, useRoute } from "@react-navigation/core";
import React, { ReactElement, useEffect, useState } from "react";
import {
	Image,
	LayoutAnimation,
	ScrollView,
	TouchableOpacity,
	View,
} from "react-native";
import ReactNativeModal from "react-native-modal";
import { Rating } from "react-native-ratings";
import { useDispatch } from "react-redux";
import ProductsList from "../../components/ProductsList";
import BackHeaderDefault from "./components/BackHeaderDefault";
import ReviewBox from "./components/ReviewBox";
import { styles } from "./style";

const ProductDetailsView = ({}): ReactElement => {
	const [modalOpen, setModalOpen] = useState(false);
	let {
		params: { item, id },
	} = useRoute();
	const [activeSlide, setActiveSlide] = useState(0);
	const [shouldShow, setShouldShow] = useState(true);
	const [loading, setLoading] = useState(false);
	const [reviewsList, setReviewsList] = useState([]);
	const [review, setReview] = useState<SendReviewProps>({
		product_id: id,
		rate: 0,
		review: "",
	});

	const [rate, setRate] = useState(0);

	let onStateChange = (key: string) => (value: string) => {
		console.log({ review, "OLD REVIEW": "" });

		setReview((e) => ({ ...e, [key]: value }));
		console.log({ key, value, review });
	};

	let carouselPhoto = () => {
		item`${appendUrl}`.photo;
	};

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	const dispatch = useDispatch();
	let navigation = useNavigation();
	const cart = useAppSelector(cartSelector);
	let isInCart = !!cart[id];

	const onCartPress = async () => {
		try {
			if (isInCart) {
				dispatch(toggleLoading());
				let clear = await requests.products.removeItem({
					product_id: id,
				});
				let cartGet = await requests.products.getCarts();
				dispatch(loadCart(cartGet.data.data));
				dispatch(toggleLoading());
			} else {
				dispatch(toggleLoading());
				let res = await requests.products.addToCart({
					amount: 1,
					product_id: id,
				});
				let cartRes = await requests.products.getCarts();
				dispatch(loadCart(cartRes.data.data));
				dispatch(toggleLoading());
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
			let res = await requests.products.getReviews({ product_id: id });
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
		});

		let percent = sum / reviewsList.length;
		per = percent.toString().substring(0, 3);
		console.log(percent.toString().substring(0, 3));
	});

	return (
		<View style={styles.container}>
			<BackHeaderDefault />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.header}>
					<Text style={styles.headerText}>{item.price}</Text>
					<DefaultButton
						containerStyle={styles.button}
						secondary={isInCart}
						onPress={onCartPress}
					>
						<View style={styles.buttonContainer}>
							<Text
								style={[isInCart ? styles.inactiveCartText : styles.cartText]}
							>
								{isInCart ? `${STRINGS.addToCart}е` : `${STRINGS.addToCart}у`}
							</Text>
							<BasketIcon fill={isInCart ? COLORS.cartColor3 : COLORS.white} />
						</View>
					</DefaultButton>
				</View>
				<Image
					source={{ uri: appendUrl(item.photo) }}
					style={styles.productImage}
				/>
				<Text style={styles.itemName}>{item.name}</Text>
				<View style={styles.credit}>
					<View>
						<CheckedItem />
					</View>
					<View style={styles.creditPrice}>
						<Text style={styles.creditName}>{STRINGS.credit}</Text>
						<Text style={styles.creditPriceText}>
							{item.price_old} {STRINGS.creditPrice}
						</Text>
					</View>
				</View>
				<View>
					<View style={styles.compos}>
						<Text style={styles.composition}>{STRINGS.composition}</Text>
						<RightArrow fill={COLORS.blue} />
					</View>
					{item.options?.map((e: any) => {
						return (
							<View style={styles.map}>
								<Text style={styles.key}>{e.key}</Text>
								<Text>{e.value}</Text>
							</View>
						);
					})}
				</View>
				<DefaultButton containerStyle={{ marginHorizontal: 20 }}>
					<Text style={styles.buttonTxt}>{STRINGS.allDetails}</Text>
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
						<RightArrow fill={COLORS.blue} />
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
													return <MarkedStar fill={COLORS.blue} />;
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
											<Checked fill={COLORS.blue} style={styles.icon} />
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
				<DefaultButton containerStyle={styles.marginBottomEnd}>
					<Text style={styles.buttonReview}>{STRINGS.sendCustomer}</Text>
				</DefaultButton>
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
