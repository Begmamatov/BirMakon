import requests from "@novomarkt/api/requests";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BrandItem from "./BrandItem";
import ShopsItem from "./ShopItem";

const ShopsList = () => {
	const [shops, setShops] = useState([]);
	let effect = async () => {
		try {
			let res = await requests.shops.getShops();
			setShops(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, []);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{STRINGS.yourShops}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={shops}
				renderItem={(props) => <ShopsItem {...props} />}
				style={styles.container}
				contentContainerStyle={styles.contentContainerStyle}
			/>
		</View>
	);
};

export default ShopsList;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	container: { marginBottom: 20 },
	contentContainerStyle: {
		paddingLeft: 12,
	},
});
