import BackHeader from "@novomarkt/components/navigation/BackHeader";
import React from "react";
import { FlatList, Image, ScrollView, View } from "react-native";
import CatalogDetails from "./components/CatalogDetails";
import useCatalogDetailsHook from "./hooks";
import { styles } from "./style";

let BannerURL = "../../../../../assets/images/image26.png";

const CatalogDetailsView = () => {
	let { details, title } = useCatalogDetailsHook();
	return (
		<>
			<BackHeader name={title} style={styles.header} />
			<View style={styles.container}>
				<Image source={require(BannerURL)} style={styles.banner} />
				<FlatList
					renderItem={(props) => <CatalogDetails {...props} />}
					data={details}
					numColumns={2}
					style={styles.box}
					contentContainerStyle={{
						paddingBottom: 30,
						paddingHorizontal: 16,
					}}
				/>
			</View>
		</>
	);
};

export default CatalogDetailsView;
