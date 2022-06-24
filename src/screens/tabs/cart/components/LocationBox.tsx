import {
	GeoIcon,
	LocationIcon,
	RightArrow,
} from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const LocationBox = () => {
	let navigation = useNavigation();
	return (
		<TouchableOpacity style={styles.container} onPress={() => navigation.navigate(ROUTES.LOCATION)} >
			<View style={styles.row}>
				<GeoIcon fill={COLORS.blue} />
				<Text style={styles.text}>Москва и московская област</Text>
			</View>
			<View>
				<RightArrow fill={COLORS.gray} />
			</View>
		</TouchableOpacity>
	);
};

export default LocationBox;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		paddingVertical: 12,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: COLORS.whiteGray,
		flexDirection: "row",
		marginHorizontal: 20,
		alignItems: "center",
		justifyContent: "space-between",
	},

	text: {
		fontSize: 13,
		marginLeft: 5,
		color: COLORS.defaultBlack,
	},

	row: {
		flexDirection: "row",
	},
});
