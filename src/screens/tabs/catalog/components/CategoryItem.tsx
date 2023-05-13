import { appendUrl, assetUrl } from "@novomarkt/api/requests";
import { Category } from "@novomarkt/api/types";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
	Dimensions,
	Image,
	ListRenderItemInfo,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";

const CategoryItem = ({
	item: { photo, name, id },
}: ListRenderItemInfo<Category>) => {
	let navigation: any = useNavigation();
	return (
		<TouchableWithoutFeedback
			onPress={() => navigation.navigate(ROUTES.CATALOG_DETAILS, { id, name })}
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

export default CategoryItem;

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
