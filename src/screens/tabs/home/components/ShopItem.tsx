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
	TouchableOpacity,
	View,
} from "react-native";

const ShopsItem = ({
	item: { photo, id, name },
}: ListRenderItemInfo<ShopsItemResponse>): ReactElement => {
	let navigation: any = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(ROUTES.CATALOG_PRODUCTS, { id, name })}
		>
			<View style={styles.container}>
				<Image source={{ uri: appendUrl(photo) }} style={styles.image} />
			</View>
		</TouchableOpacity>
	);
};

export default ShopsItem;

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 80,
		elevation: 2,
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		marginHorizontal: 6,
		backgroundColor: COLORS.white,
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
		borderRadius: 8,
		fontSize: 20,
	},
	image: {
		width: 100,
		height: 60,
	},
});
