import BackHeader from "@novomarkt/components/navigation/BackHeader";
import React from "react";
import { FlatList, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import CatalogDetails from "./components/CatalogDetails";
import useCatalogDetailsHook from "./hooks";
import { styles } from "./style";

let BannerURL = "../../../../../assets/images/image26.png";

const CatalogDetailsView = () => {
	let { details, title, loading, catalogId } = useCatalogDetailsHook();
	console.log(catalogId);

	return (
		<>
			<BackHeader name={title} style={styles.header} />
			<View style={styles.container}>
				<FlatList
					data={details}
					renderItem={(props) => (
						<CatalogDetails props={props} catalogId={catalogId} />
					)}
					numColumns={2}
					style={styles.box}
					contentContainerStyle={{
						paddingBottom: 30,
						paddingHorizontal: 15,
					}}
					keyExtractor={(item: any) => item.id}
					showsVerticalScrollIndicator={false}
				/>
				<Spinner textContent="" textStyle={{}} visible={loading} />
			</View>
		</>
	);
};

export default CatalogDetailsView;
