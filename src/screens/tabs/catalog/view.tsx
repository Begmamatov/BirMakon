import requests from "@novomarkt/api/requests";
import SearchHeader from "@novomarkt/components/navigation/SearchHeader";
import React, { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import CategoryItem from "./components/CategoryItem";
import { styles } from "./style";
import Loading from "@novomarkt/components/loading/Loading";
import Spinner from "react-native-loading-spinner-overlay/lib";

const CatalogView = () => {
	const [categories, setCategories] = useState([]);
	const [lading, setLading] = useState(false);
	let effect = async () => {
		setLading(true);
		try {
			let res = await requests.categories.getCategories();
			setCategories(res.data.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLading(false);
		}
	};
	useEffect(() => {
		effect();
	}, []);

	return (
		<View style={styles.container}>
			<SearchHeader />
			<FlatList
				data={categories}
				renderItem={(props) => <CategoryItem {...props} />}
				numColumns={2}
				style={styles.box}
				contentContainerStyle={{
					paddingBottom: 30,
					paddingHorizontal: 16,
				}}
				keyExtractor={(item: any) => item.id}
			/>
			<Spinner visible={lading} />
		</View>
	);
};

export default CatalogView;
