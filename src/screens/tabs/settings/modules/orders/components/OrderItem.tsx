//@ts-ignore
import MasterCard from "@novomarkt/assets/images/mastercard.png";
//@ts-ignore
import MirCard from "@novomarkt/assets/images/mir.png";
//@ts-ignore
import VisaCard from "@novomarkt/assets/images/visa.png";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { ProductItemProps } from "@novomarkt/screens/tabs/home/components/ProductItem";
import React from "react";
import {
	Image,
	ListRenderItemInfo,
	StyleSheet,
	Text,
	View,
} from "react-native";

const OrderItem = ({
	item: { name, image, shopName, price },
}: ListRenderItemInfo<ProductItemProps>) => {
	return (
		<View style={styles.shadowBox}>
			<View>
				<Image source={{ uri: image }} style={styles.img} />
				<Text style={styles.price}>{price}</Text>
			</View>
			<View style={styles.contentBox}>
				<Text style={styles.text}>{name}</Text>
				<Text style={styles.name}>{shopName}</Text>
				<Text style={styles.items}>
					{STRINGS.seller} {shopName}
				</Text>
				<Text style={styles.items}>{STRINGS.quantity} 1 шт</Text>
				<Text style={styles.items}>
					Способ оплаты:{" "}
					<View style={styles.row}>
						<Image style={styles.cards} source={MirCard} />
						<Image style={styles.cardsV} source={VisaCard} />
						<Image style={styles.cardsM} source={MasterCard} />
					</View>
				</Text>
				<Text style={styles.items}>{STRINGS.delivery} Бесплатная </Text>
			</View>
		</View>
	);
};

export default OrderItem;

const styles = StyleSheet.create({
	shadowBox: {
		marginVertical: 10,
		marginHorizontal: 20,
		elevation: 5,
		borderRadius: 8,
		backgroundColor: COLORS.white,
		padding: 10,
		flexDirection: "row",
	},

	img: {
		width: 100,
		height: 120,
	},

	text: {
		fontSize: 13,
		fontFamily: "Montserrat-Bold",
		color: COLORS.defaultBlack,
		textTransform: "uppercase",
	},

	contentBox: {
		flex: 1,
		paddingLeft: 5,
	},

	name: {
		marginTop: 10,
		marginBottom: 5,
		fontSize: 13,
		color: COLORS.defaultBlack,
	},

	items: {
		color: COLORS.defaultBlack,
		fontSize: 13,
		alignItems: "center",
		marginBottom: 5,
	},

	price: {
		fontSize: 20,
		color: COLORS.red,
		fontFamily: "Montserrat-Bold",
		alignSelf: "center",
		padding: 10,
		marginBottom: 5,
	},

	cards: {
		width: 35,
		height: 12,
		marginHorizontal: 5,
	},
	cardsV: {
		width: 35,
		height: 10,
		marginRight: 5,
	},
	cardsM: {
		width: 35,
		height: 10,
	},

	row: {
		flexDirection: "row",
	},
});
