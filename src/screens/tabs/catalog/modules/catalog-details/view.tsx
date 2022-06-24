import BackHeader from "@novomarkt/components/navigation/BackHeader";
import React from "react";
import { FlatList, Image, ScrollView } from "react-native";
import CatalogDetails from "./components/CatalogDetails";
import useCatalogDetailsHook from "./hooks";
import { styles } from "./style";

let BannerURL =
	"https://lh4.googleusercontent.com/mEIPzmkL2ezY8H55Ib7dyT7gUPQRnDSxyu_SM458KWgKAkOWD0X9VmkIw7hBQdgecLARQOUT97qOtLxf2OHysWaByiq-HbLPzrMA5Sb9hsUP3Xrml-BPjUTBQP_YR1ZTOsm14Doh";

const CatalogDetailsView = () => {
	let { details, title } = useCatalogDetailsHook();
	return (
		<ScrollView style={styles.container}>
			<BackHeader name={title} style={styles.header} />
			<Image source={{ uri: BannerURL }} style={styles.banner} />
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
		</ScrollView>
	);
};

export default CatalogDetailsView;
