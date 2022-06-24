import requests from "@novomarkt/api/requests";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryItem from "./CategoryItem";

const PopularCategories = () => {
	const [categories, setCategories] = useState([]);
	let effect = async () => {
		try {
			let res = await requests.categories.getCategories();
			setCategories(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{STRINGS.popularCategories}</Text>
			<FlatList
				showsVerticalScrollIndicator={false}
				numColumns={2}
				data={categories}
				style={styles.container}
				renderItem={(props) => <CategoryItem {...props} />}
				contentContainerStyle={styles.contentContainerStyle}
			/>
		</View>
	);
};

export default PopularCategories;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	container: { marginBottom: 20 },
	contentContainerStyle: { paddingHorizontal: 12 },
});
