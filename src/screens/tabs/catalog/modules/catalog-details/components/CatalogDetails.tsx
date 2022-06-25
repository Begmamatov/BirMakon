import requests, { appendUrl } from "@novomarkt/api/requests";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
	Dimensions,
	Image,
	ListRenderItemInfo,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";

export interface CatalogDetailsProps {
	name?: string;
	photo?: string;
	id?: number;
}

const CatalogDetails = ({ item }: ListRenderItemInfo<CatalogDetailsProps>) => {
	let navigation = useNavigation();
	let { name, photo, id } = item || {};
	return (
		<TouchableWithoutFeedback
			onPress={() =>
				navigation.navigate(
					ROUTES.CATALOG_PRODUCTS as never,
					{ id, name, type: "category" } as never
				)
			}
		>
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={{ uri: appendUrl(photo as string) }}
				/>
				<Text style={styles.text}>{name}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default CatalogDetails;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: COLORS.white,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		margin: 8,
		borderRadius: 10,
		alignItems: "center",
	},

	image: {
		width: (Dimensions.get("window").width - 108) / 2,
		height: (Dimensions.get("window").width - 108) / 2,
	},

	text: {
		fontSize: 14,
		color: COLORS.defaultBlack,
	},
});
