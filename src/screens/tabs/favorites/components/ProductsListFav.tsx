import requests from "@novomarkt/api/requests";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ProductItemResponse } from "@novomarkt/api/types";
import ProductItem from "../../home/components/ProductItem";

export interface PropularProductsProps {
	title?: string;
}

const ProductsListFav = ({
	title = STRINGS.popularProducts,
}: PropularProductsProps) => {
	const [products, setProducts] = useState<ProductItemResponse[]>([]);
	let effect = async () => {
		try {
			let res = await requests.products.getProducts();
			setProducts(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, []);
	return (
		<View style={styles.container}>
			<FlatList
				numColumns={2}
				data={products}
				showsHorizontalScrollIndicator={false}
				renderItem={(props) => <ProductItem {...props} />}
			/>
		</View>
	);
};

export default ProductsListFav;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
		marginBottom: 20,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	container: { marginBottom: 20, marginHorizontal: 0, alignItems: "center" },
});
