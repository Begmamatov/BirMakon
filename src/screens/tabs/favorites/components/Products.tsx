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
import { STRINGS } from "@novomarkt/locales/strings";
import { useAppSelector } from "@novomarkt/store/hooks";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import { cartSelector, loadCart } from "@novomarkt/store/slices/cartSlice";
import {
	favoriteSelector,
	loadFavorite,
} from "@novomarkt/store/slices/favoriteSlice";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
	Image,
	LayoutAnimation,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { useDispatch } from "react-redux";

const Products = ({ item }: { item: ProductItemResponse }) => {
	let { photo, name, price, discount, price_old, id, isFavorite } = item;

	const dispatch = useDispatch();
	const cart = useAppSelector(cartSelector);
	const favorite = useAppSelector(favoriteSelector);
	let isInCart = !!cart[id];
	let isInFavorite = !!favorite[id];

	const navigation: any = useNavigation();

	const onCartPress = async () => {
		try {
			if (isInCart) {
				//TODO remove from cart
				try {
					let res = await requests.products.removeItem({
						product_id: id,
					});
					let cartRes = await requests.products.getCarts();
					dispatch(loadCart(cartRes.data.data));
				} catch (error) {
					console.log(error);
				} finally {
					effect();
				}
			} else {
				let res = await requests.products.addToCart({
					amount: 1,
					product_id: id,
				});
				let cartRes = await requests.products.getCarts();
				dispatch(loadCart(cartRes.data.data));
			}
		} catch (error) {
			console.log(error);
		} finally {
			effect();
		}
	};

	const effect = async () => {
		try {
			let res = await requests.favorites.getFavorites();
			// setFavorites(res.data.data);
		} catch (error) {
			console.log(error);
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
			LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
		}
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				navigation.navigate(ROUTES.PRODUCT_DETAILS, { item, id });
			}}
		>
			<View style={styles.container}>
				<Image source={{ uri: appendUrl(photo) }} style={styles.image} />
				<View style={styles.itemsContainer}>
					<View style={styles.nameContainer}>
						<Text style={styles.itemName}>{name ? name : ""}</Text>

						<TouchableOpacity
							onPress={onAddFavorite}
							hitSlop={{ bottom: 10, top: 10, right: 10, left: 10 }}
						>
							{isFavorite === true ? (
								<HeartIconRed fill={COLORS.red} />
							) : (
								<HeartIconBorder fill={COLORS.red} />
							)}
						</TouchableOpacity>
					</View>
					<View style={styles.priceContainer}>
						{price_old ? (
							<Text style={styles.oldPrice}>
								{price_old ? price_old : ""} сум
							</Text>
						) : (
							<Text style={styles.oldPrice}>0</Text>
						)}
						<Text style={styles.price}>{price} сум</Text>
					</View>
					<View style={styles.nameContainer}>
						{discount ? (
							<View style={styles.discount}>
								<Text style={styles.dscountText}>
									{discount ? discount : "0"}%
								</Text>
							</View>
						) : (
							<Text style={styles.dscountText}>0%</Text>
						)}
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
								<BasketIcon
									fill={isInCart ? COLORS.cartColor3 : COLORS.white}
								/>
							</View>
						</DefaultButton>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default Products;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flexDirection: "row",
		borderBottomWidth: 1,
		borderColor: "rgba(113, 113, 113, 0.3)",
		// borderColor: "red",
	},

	image: {
		width: 100,
		height: 120,
		borderRadius: 10,
		marginHorizontal: 10,
	},

	itemsContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		// paddingHorizontal: 5,
	},
	priceContainer: {
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginTop: 10,
	},

	nameContainer: {
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "space-between",
	},

	itemName: {
		color: COLORS.defaultBlack,
		fontSize: 16,
	},

	dscountText: {
		fontSize: 12,
		color: COLORS.red,
	},

	discount: {
		borderRadius: 8,
		padding: 4,
		backgroundColor: COLORS.white,
	},

	price: {
		fontSize: 16,
		color: COLORS.red,
	},

	oldPrice: {
		fontSize: 14,
		color: COLORS.defaultBlack,
		textDecorationLine: "line-through",
	},

	buttonContainer: {
		flexDirection: "row",
		margin: 0,
	},

	cartText: {
		color: COLORS.white,
		marginRight: 10,
	},

	inactiveCartText: {
		color: COLORS.cartColor3,
		marginRight: 10,
	},

	button: {
		width: 120,
		height: 40,
		margin: 0,
	},
});
