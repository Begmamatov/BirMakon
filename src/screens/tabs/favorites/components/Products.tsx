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
import { STRINGS } from "@novomarkt/locales/strings";
import { useAppSelector } from "@novomarkt/store/hooks";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import { cartSelector, loadCart } from "@novomarkt/store/slices/cartSlice";
import {
	favoriteSelector,
	loadFavorite,
} from "@novomarkt/store/slices/favoriteSlice";
import React from "react";
import {
	Image,
	LayoutAnimation,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { useDispatch } from "react-redux";

export let imageURL =
	"https://static.theblacktux.com/products/suits/gray-suit/1_2018_0326_TBT_Spring-Ecomm_Shot03_-31_w1_1812x1875.jpg?width=1024";

export let ProductsData = {
	name: "Элегантный Костюм с брюками ZARA стиль",
	price: "1400  ₽",
};

export default function Products({
	name,
	photo,
	price,
	id,
	discount,
	price_old,
	isFavorite,
	getProducts,
}: ProductItemResponse) {
	const dispatch = useDispatch();
	const cart = useAppSelector(cartSelector);
	const favorite = useAppSelector(favoriteSelector);
	let isInCart = !!cart[id];
	let isInFavorite = !!favorite[id];

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
			dispatch(toggleLoading());
			let res = await requests.favorites.addFavorite({
				product_id: id,
			});
			let r = await requests.favorites.getFavorites();
			dispatch(loadFavorite(r.data.data));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(toggleLoading());
			LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
		}
	};

	return (
		<View style={styles.container}>
			<Image source={{ uri: appendUrl(photo) }} style={styles.image} />
			<View style={styles.itemsContainer}>
				<View style={styles.nameContainer}>
					<Text style={styles.itemName}>{name}</Text>
					{discount && (
						<View style={styles.discount}>
							<Text style={styles.dscountText}>{discount}%</Text>
						</View>
					)}
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
				<View style={styles.nameContainer}>
					<View>
						{price_old && <Text style={styles.oldPrice}>{price_old} ₽</Text>}
						<Text style={styles.price}>{price}₽</Text>
					</View>
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
			</View>
			{/* <View>
				<Image source={{ uri: appendUrl(photo) }} style={styles.image} />
			</View>
			<View style={styles.textBox}>
				<Text style={styles.text}>{name}</Text>
				<View style={styles.row}>
					<Text style={styles.price}>{price}</Text>
					<DefaultButton
						containerStyle={styles.button}
						secondary={isInCart}
						onPress={onCartPress}
					>
						<View style={styles.buttonContainer}>
							<Text
								style={[isInCart ? styles.inactiveCartText : styles.cartText]}
							>
								{STRINGS.addToCart}
							</Text>
							<BasketIcon fill={isInCart ? COLORS.cartColor3 : COLORS.white} />
						</View>
					</DefaultButton>
				</View>
			</View> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flexDirection: "row",
		borderBottomWidth: 1,
		borderColor: "rgba(113, 113, 113, 0.3)",
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
		paddingHorizontal: 5,
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
		color: COLORS.blue,
	},

	discount: {
		borderRadius: 8,
		padding: 4,
		backgroundColor: COLORS.white,
	},

	price: {
		fontSize: 16,
		color: COLORS.blue,
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
