import requests from "@novomarkt/api/requests";
import { ProductItemResponse } from "@novomarkt/api/types";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import ProductItem from "@novomarkt/screens/tabs/home/components/ProductItem";
import { useRoute } from "@react-navigation/native";
import React, { ReactElement, useEffect, useState } from "react";
import { FlatList, Image, ScrollView, View, Text } from "react-native";
import SelectableFlter from "./components/SelectableFlter";
import { styles } from "./style";
import BottomHeight from "@novomarkt/components/BottomHeight";
import { COLORS } from "@novomarkt/constants/colors";

const CatalogProductsView = ({}): ReactElement => {
	const [products, setProducts] = useState<ProductItemResponse[]>();
	const [newValyu, setNewValyu] = useState<any>();
	let {
		params: { id, name, type, categoryId },
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

	let productDisebled = products?.length;
	if (newValyu) {
		productDisebled = newValyu?.length;
	}
	console.log("Value", JSON.stringify(productDisebled, null, 2));

	return (
		<View style={styles.container}>
			<>
				<BackHeader hasSearch={true} style={styles.header} name={name} />
				<SelectableFlter
					id={id}
					setProducts={setProducts}
					categoryId2={categoryId}
					setNewValyu={setNewValyu}
				/>
			</>
			{productDisebled ? (
				<FlatList
					showsVerticalScrollIndicator={false}
					style={styles.columns}
					data={newValyu ? newValyu : products}
					numColumns={2}
					renderItem={(props) => <ProductItem {...props} />}
				/>
			) : (
				<Text
					style={{
						textAlign: "center",
						color: COLORS.red,
						marginTop: 100,
					}}
				>
					Нет результатов
				</Text>
			)}
		</View>
	);
};

export default CatalogProductsView;
