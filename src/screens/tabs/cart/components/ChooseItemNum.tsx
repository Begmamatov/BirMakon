import requests, { appendUrl } from "@novomarkt/api/requests";
import { CartItemResponse } from "@novomarkt/api/types";
import {
	CrashIcon,
	HeartIcon,
	HeartIconBorder,
	HeartIconRed,
	MinusIcon,
	PlusCounterIcon,
} from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS, GRADIENT_COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { useAppSelector } from "@novomarkt/store/hooks";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import { loadCart } from "@novomarkt/store/slices/cartSlice";
import {
	favoriteSelector,
	loadFavorite,
} from "@novomarkt/store/slices/favoriteSlice";
import React, { useState } from "react";
import {
	Image,
	LayoutAnimation,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch } from "react-redux";

export let imageURL =
	"https://static.theblacktux.com/products/suits/gray-suit/1_2018_0326_TBT_Spring-Ecomm_Shot03_-31_w1_1812x1875.jpg?width=1024";

export let ProductsData = {
	name: "Элегантный Костюм с брюками ZARA стиль",
	price: "1400  ₽",
};

export default function ChooseItemNum({ data }: { data: CartItemResponse }) {
	const [shouldShow, setShouldShow] = useState(true);
	const dispatch = useDispatch();
	let id = data.product.id;
	const fav = useAppSelector(favoriteSelector);
	let isFav = !!fav[id];

	const onAddItem = async () => {
		try {
			dispatch(toggleLoading());
			let res = await requests.products.increaseItem({
				amount: 1,
				product_id: id,
			});
			let cartRes = await requests.products.getCarts();
			dispatch(loadCart(cartRes.data.data));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(toggleLoading());
		}
	};

	const onDecreaseItem = async () => {
		try {
			dispatch(toggleLoading());
			let res = await requests.products.decreaseItem({
				product_id: id,
			});
			let cartRes = await requests.products.getCarts();
			dispatch(loadCart(cartRes.data.data));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(toggleLoading());
		}
	};

	const onRemoveItem = async () => {
		try {
			dispatch(toggleLoading());
			let res = await requests.products.removeItem({
				product_id: id,
			});
			let cartRes = await requests.products.getCarts();
			dispatch(loadCart(cartRes.data.data));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(toggleLoading());
			LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
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
		}
	};

	return (
		<View style={styles.container}>
			<View>
				<Image
					style={styles.leftImage}
					source={{ uri: appendUrl(data.product.photo) }}
				/>
			</View>
			<View style={styles.textBox}>
				<Text style={styles.headerTxt}>{data.product.name}</Text>
				<Text style={styles.itemTxt}>
					{STRINGS.color}
					<Text> Белый</Text>
				</Text>
				<Text style={styles.itemTxt}>
					{STRINGS.size}
					<Text> XXL - 44</Text>
				</Text>
				<View style={styles.rowTxt}>
					<Text style={styles.blueTxt}>{data.product.price} ₽</Text>
					<Text style={styles.lineThrough}>{data.product.price_old} ₽</Text>
				</View>
				<View style={styles.counter}>
					<TouchableOpacity onPress={onDecreaseItem} style={styles.minus}>
						<View style={styles.minus}>
							<MinusIcon fill={COLORS.white} />
						</View>
					</TouchableOpacity>
					<View style={styles.topBottom}>
						<Text>{data.amount} шт</Text>
					</View>
					<TouchableOpacity onPress={onAddItem} style={styles.plus}>
						<View style={styles.plus}>
							<PlusCounterIcon fill={COLORS.white} />
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.iconBox}>
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
				<TouchableOpacity
					onPress={onRemoveItem}
					hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
				>
					<CrashIcon fill={COLORS.gray} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// borderWidth: 1,
		// padding: 10,
		marginHorizontal: 20,
		marginVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottomColor: COLORS.gray,
		borderBottomWidth: 1,
		paddingBottom: 10,
	},

	leftImage: {
		width: 80,
		height: 90,
		borderRadius: 8,
	},

	textBox: {
		flexShrink: 1,
		paddingHorizontal: 10,
	},

	headerTxt: {
		fontSize: 14,
		letterSpacing: 0.5,
		fontWeight: "700",
		color: COLORS.defaultBlack,
	},

	itemTxt: {
		fontSize: 11,
		color: COLORS.defaultBlack,
	},

	rowTxt: {
		alignItems: "center",
		flexDirection: "row",
		marginVertical: 5,
	},

	blueTxt: {
		fontSize: 15,
		fontWeight: "700",
		color: COLORS.red,
	},

	lineThrough: {
		fontSize: 12,
		marginLeft: 10,
		textDecorationLine: "line-through",
	},

	counter: {
		// alignItems: "center",
		flexDirection: "row",
		width: 150,
	},

	iconBox: {
		paddingVertical: 5,
		justifyContent: "space-between",
	},

	item: {
		color: COLORS.white,
	},

	minus: {
		paddingVertical: 5,
		paddingHorizontal: 5,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		backgroundColor: COLORS.orange,
	},

	plus: {
		paddingVertical: 5,
		paddingHorizontal: 5,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		backgroundColor: COLORS.lightBlack,
	},
	topBottom: {
		// height: "100%",
		width: 50,
		borderColor: COLORS.whiteGray,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
