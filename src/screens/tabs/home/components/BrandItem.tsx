import { appendUrl } from "@novomarkt/api/requests";
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

export type BrandItemProps = {
	photo: string;
	id: number;
};

const BrandItem = ({
	item: { photo, id },
}: ListRenderItemInfo<BrandItemProps>): ReactElement => {
	let navigation: any = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(ROUTES.CATALOG_PRODUCTS, { id })}
		>
			<View style={styles.container}>
				<Image source={{ uri: appendUrl(photo) }} style={styles.image} />
			</View>
		</TouchableOpacity>
	);
};

export default BrandItem;

const styles = StyleSheet.create({
	container: {
		width: 85,
		height: 55,
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
	},
	image: {
		width: 50,
		height: 30,
	},
});
