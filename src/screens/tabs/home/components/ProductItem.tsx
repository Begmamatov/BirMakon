import requests, { appendUrl } from "@novomarkt/api/requests";
import { ProductItemResponse } from "@novomarkt/api/types";
import {
	BasketIcon,
	HeartIconBorder,
	HeartIconRed,
} from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useAppSelector } from "@novomarkt/store/hooks";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import { cartSelector, loadCart } from "@novomarkt/store/slices/cartSlice";
import {
	favoriteSelector,
	loadFavorite,
} from "@novomarkt/store/slices/favoriteSlice";
import { useNavigation } from "@react-navigation/core";
import { is } from "immer/dist/internal";
import React, { ReactElement, useEffect, useState } from "react";
import {
	ActivityIndicator,
	Image,
	ListRenderItemInfo,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { useDispatch } from "react-redux";

const ProductItem = ({
	item,
	getProducts,
}: ListRenderItemInfo<ProductItemResponse> & {
	getProducts?: () => void;
}): ReactElement => {
	let {
		photo,
		brand,
		shop,
		category,
		name,
		price,
		discount,
		price_old,
		id,
		isFavorite,
	} = item;
	const dispatch = useDispatch();
	let navigation = useNavigation();
	const cart = useAppSelector(cartSelector);
	let isInCart = !!cart[id];
	const fav = useAppSelector(favoriteSelector);
	let isFav = !!fav[id];

	const [animate, setAnimate] = useState(false);

	const onCartPress = async () => {
		console.log("onCartPress");
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
					amount: 1,
					product_id: id,
				});

				let cartRes = await requests.products.getCarts();
				dispatch(loadCart(cartRes.data.data));
				setAnimate(false);
			} catch (error) {
				console.log("erorrs++++", JSON.stringify(error, null, 4));
				alert(JSON.stringify(error, null, 4));
			} finally {
				setAnimate(false);
			}
		}
	};

	const onAddFavorite = async () => {
		try {
			dispatch(toggleLoading(true));
			let res = await requests.favorites.addFavorite({
				product_id: id,
			});
			let r = await requests.favorites.getFavorites();
			dispatch(loadFavorite(r.data.data));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(toggleLoading(false));
		}
	};

	return (
		<TouchableWithoutFeedback
			onPress={() =>
				//@ts-ignore
				navigation.navigate(ROUTES.PRODUCT_DETAILS, { item, id })
			}
		>
			<View style={styles.container}>
				<Image source={{ uri: appendUrl(photo) }} style={styles.image} />
				<View style={styles.absolute}>
					<TouchableOpacity
						onPress={onAddFavorite}
						hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
					>
						{isFav ? (
							<HeartIconRed fill={COLORS.red} />
						) : (
							<HeartIconBorder fill={COLORS.red} stroke={COLORS.red} />
						)}
					</TouchableOpacity>
					{discount && (
						<View style={styles.discount}>
							<Text style={styles.dscountText}>
								{discount ? discount : ""}%
							</Text>
						</View>
					)}
				</View>
				<View style={styles.details}>
					<View style={styles.row}>
						<Text style={styles.brand}>{category?.name}</Text>
						<Text style={styles.brand}>{shop?.name}</Text>
					</View>
					<Text style={styles.name}>{name ? name : ""}</Text>
					<View
						style={{
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "space-between",
							height: 60,
						}}
					>
						<Text style={styles.price}>{price ? price : ""} сум</Text>
						{price_old && (
							<Text style={styles.oldPrice}>
								{price_old ? price_old : ""} сум
							</Text>
						)}
					</View>
					<DefaultButton
						containerStyle={styles.button}
						secondary={isInCart}
						onPress={onCartPress}
					>
						{animate ? (
							<ActivityIndicator
								size="small"
								color={COLORS.red}
								animating={animate}
							/>
						) : (
							<View style={styles.buttonContainer}>
								<Text
									style={[isInCart ? styles.inactiveCartText : styles.cartText]}
								>
									{isInCart ? `${STRINGS.addToCart}е` : `${STRINGS.addToCart}у`}
								</Text>
								<BasketIcon
									fill={isInCart ? COLORS.cartColor3 : COLORS.white}
								/>
							</View>
						)}
					</DefaultButton>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	dscountText: { fontSize: 12, color: COLORS.defaultBlack, fontWeight: "700" },
	discount: {
		borderRadius: 8,
		padding: 4,
		backgroundColor: COLORS.discountRed,
	},
	absolute: {
		position: "absolute",
		right: 10,
		top: 10,
		justifyContent: "space-between",
		height: 162,
		alignItems: "flex-end",
	},
	cartText: {
		color: COLORS.white,
		marginRight: 4,
		fontWeight: "700",
	},
	inactiveCartText: {
		color: COLORS.cartColor3,
		marginRight: 8,
		fontFamily: "Montserrat-Medium",
	},
	button: {
		marginHorizontal: 0,
	},
	price: {
		color: COLORS.red,
		fontSize: 15,
		marginVertical: 10,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	name: {
		color: COLORS.defaultBlack,
		fontSize: 13,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	brand: {
		color: COLORS.gray,
		fontSize: 11,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	image: {
		width: WINDOW_WIDTH / 2 - 20,
		height: 180,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	container: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
		elevation: 2,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		width: WINDOW_WIDTH / 2 - 20,
		marginVertical: 15,
		marginHorizontal: 5,
	},
	details: {
		paddingHorizontal: 8,
		paddingBottom: 24,
		paddingTop: 8,
	},
	buttonContainer: {
		flexDirection: "row",
	},

	oldPrice: {
		color: COLORS.gray,
		textDecorationLine: "line-through",
	},
});
