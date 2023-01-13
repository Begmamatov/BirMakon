import requests from "@novomarkt/api/requests";
import { ProductItemResponse } from "@novomarkt/api/types";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import ProductItem from "@novomarkt/screens/tabs/home/components/ProductItem";
import { useRoute } from "@react-navigation/native";
import React, { ReactElement, useEffect, useState } from "react";
import { FlatList, Image, ScrollView, View } from "react-native";
import SelectableFlter from "./components/SelectableFlter";
import { styles } from "./style";

const CatalogProductsView = ({}): ReactElement => {
	const [products, setProducts] = useState<ProductItemResponse[]>();

	let {
		params: { id, name, type },
	}: any = useRoute();

	let effect = async () => {
		try {
			let res = await requests.products.getProductsWithID(id);
			setProducts(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	let brandsEffect = async () => {
		try {
			let res = await requests.products.getProductsWithBrand(id);
			setProducts(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};
	let shopEffect = async () => {
		try {
			let res = await requests.products.getProductWithShopID(id);
			setProducts(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (type === "brand") {
			brandsEffect();
		}
		if (type === "category") {
			effect();
		}
		if (type === "shop") {
			shopEffect();
		}
	}, []);

	return (
		<View style={styles.container}>
			<BackHeader hasSearch={true} style={styles.header} name={name} />
			<View>
				<Image
					source={require("../../../../../assets/images/image26.png")}
					style={styles.banner}
				/>

				<SelectableFlter id={id} setProducts={setProducts} />
				<FlatList
					showsVerticalScrollIndicator={false}
					style={styles.columns}
					data={products}
					numColumns={2}
					renderItem={(props) => <ProductItem {...props} />}
				/>
			</View>
		</View>
	);
};

export default CatalogProductsView;
