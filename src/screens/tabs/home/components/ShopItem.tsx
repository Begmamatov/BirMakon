import { appendUrl } from "@novomarkt/api/requests";
import { ShopsItemResponse } from "@novomarkt/api/types";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { useNavigation } from "@react-navigation/native";
import React, { ReactElement } from "react";
import {
	Image,
	ListRenderItemInfo,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

const ShopsItem = ({
	item: { photo, id, name },
}: ListRenderItemInfo<ShopsItemResponse>): ReactElement => {
	let navigation: any = useNavigation();
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate(ROUTES.CATALOG_PRODUCTS, { id, name, type: "shop" })
			}
		>
			<View style={styles.container}>
				<Image source={{ uri: appendUrl(photo) }} style={styles.image} />
				<Text style={styles.title}>{name}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ShopsItem;

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 110,
		elevation: 2,
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		marginHorizontal: 6,
		backgroundColor: COLORS.white,
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		margin: 10,
		borderRadius: 8,
		fontSize: 20,
	},
	image: {
		width: 120,
		height: 70,
	},
	title: {
		color: COLORS.black,
	},
});
