import requests from "@novomarkt/api/requests";
import SearchHeader from "@novomarkt/components/navigation/SearchHeader";
import React, { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import CategoryItem from "./components/CategoryItem";
import { styles } from "./style";

const CatalogView = () => {
	const [categories, setCategories] = useState([]);
	let effect = async () => {
		try {
			let res = await requests.categories.getCategories();
			setCategories(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		effect();
	}, []);
	return (
		<View style={styles.container}>
			<SearchHeader />

			<Image
				source={require("../../../assets/images/image26.png")}
				style={{ width: "100%" }}
			/>

			<FlatList
				data={categories}
				renderItem={(props) => <CategoryItem {...props} />}
				numColumns={2}
				style={styles.box}
				contentContainerStyle={{
					paddingBottom: 30,
					paddingHorizontal: 16,
				}}
			/>
		</View>
	);
};

export default CatalogView;
