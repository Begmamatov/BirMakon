import requests, { appendUrl, assetUrl } from "@novomarkt/api/requests";
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
	catalogId?: number;
}

const CatalogDetails = (props: any) => {
	let navigation = useNavigation();
	let { name, photo, id } = props?.props?.item;
	console.log(JSON.stringify(props?.catalogId));

	return (
		<TouchableWithoutFeedback
			onPress={() =>
				navigation.navigate(
					//@ts-ignore
					ROUTES.CATALOG_PRODUCTS as never,
					{ id, name, type: "category", categoryId: props?.catalogId } as never
				)
			}
		>
			<View style={styles.container}>
				<View style={styles.imageBox}>
					<Image style={styles.image} source={{ uri: assetUrl + photo }} />
				</View>
				<View style={styles.textBox}>
					<Text style={styles.text}>{name ? name : ""}</Text>
				</View>
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
		textAlign: "center",
	},
	imageBox: {
		width: (Dimensions.get("window").width - 108) / 2,
		height: (Dimensions.get("window").width - 108) / 2,
		resizeMode: "cover",
	},

	image: {
		width: "100%",
		height: "100%",
	},

	text: {
		fontSize: 14,
		color: COLORS.defaultBlack,
		textAlign: "center",
	},
	textBox: {
		maxWidth: 110,
	},
});
