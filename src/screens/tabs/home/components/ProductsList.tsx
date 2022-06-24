import requests from "@novomarkt/api/requests";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ProductItemResponse } from "@novomarkt/api/types";
import ProductItem from "./ProductItem";

export interface PropularProductsProps {
	title?: string;
}

export const ProductsList = ({
	title = STRINGS.popularProducts,
}: PropularProductsProps) => {
	const [products, setProducts] = useState<ProductItemResponse[]>([]);
	const getProducts = async () => {
		try {
			let res = await requests.products.getProducts();
			setProducts(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		getProducts();
	}, []);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={products}
				renderItem={(props) => (
					<ProductItem {...props} getProducts={getProducts} />
				)}
				style={styles.container}
				contentContainerStyle={styles.contentContainerStyle}
			/>
		</View>
	);
};

export default ProductsList;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
		marginBottom: 20,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	container: { marginBottom: 20 },
	contentContainerStyle: { paddingHorizontal: 12 },
});
