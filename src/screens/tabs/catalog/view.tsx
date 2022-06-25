import requests from "@novomarkt/api/requests";
import SearchHeader from "@novomarkt/components/navigation/SearchHeader";
import React, { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import CategoryItem from "./components/CategoryItem";
import { styles } from "./style";

let BannerURL =
	"https://lh4.googleusercontent.com/mEIPzmkL2ezY8H55Ib7dyT7gUPQRnDSxyu_SM458KWgKAkOWD0X9VmkIw7hBQdgecLARQOUT97qOtLxf2OHysWaByiq-HbLPzrMA5Sb9hsUP3Xrml-BPjUTBQP_YR1ZTOsm14Doh";

const CatalogView = () => {
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
			<SearchHeader />
			<Image source={{ uri: BannerURL }} style={styles.banner} />
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
