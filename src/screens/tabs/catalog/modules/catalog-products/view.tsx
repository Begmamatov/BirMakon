import requests from "@novomarkt/api/requests";
import { ProductItemResponse } from "@novomarkt/api/types";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import ProductItem from "@novomarkt/screens/tabs/home/components/ProductItem";
import { useRoute } from "@react-navigation/native";
import React, { ReactElement, useEffect, useState } from "react";
import { FlatList, Image, ScrollView, View } from "react-native";
import ScrollableMenu from "./components/ScrollableMenu";
import SelectableFlter from "./components/SelectableFlter";
import { styles } from "./style";

let BannerURL =
	"https://lh4.googleusercontent.com/mEIPzmkL2ezY8H55Ib7dyT7gUPQRnDSxyu_SM458KWgKAkOWD0X9VmkIw7hBQdgecLARQOUT97qOtLxf2OHysWaByiq-HbLPzrMA5Sb9hsUP3Xrml-BPjUTBQP_YR1ZTOsm14Doh";

const CatalogProductsView = ({}): ReactElement => {
	const [products, setProducts] = useState<ProductItemResponse[]>();

	let {
		params: { id, name },
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

	useEffect(() => {
		effect();
		brandsEffect();
	}, []);

	return (
		<View style={styles.container}>
			<BackHeader hasSearch={true} style={styles.header} name={name} />
			<ScrollView>
				<Image source={{ uri: BannerURL }} style={styles.banner} />
				<ScrollableMenu />
				<SelectableFlter />
				<FlatList
					showsVerticalScrollIndicator={false}
					style={styles.columns}
					data={products}
					numColumns={2}
					renderItem={(props) => <ProductItem {...props} />}
				/>
			</ScrollView>
		</View>
	);
};

export default CatalogProductsView;
