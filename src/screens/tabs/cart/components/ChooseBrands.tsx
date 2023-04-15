import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const ChooseBrands = () => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Text style={styles.headerTxt}>{STRINGS.brands}</Text>
				<Text style={styles.blueTxt}>{STRINGS.all}</Text>
			</View>
			<View style={styles.brands}>
				<TouchableOpacity style={styles.box}>
					<Text>Zara</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.box}>
					<Text>Penti</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ChooseBrands;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		marginHorizontal: 20,
	},

	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	headerTxt: {
		fontSize: 17,
		color: COLORS.defaultBlack,
	},

	blueTxt: {
		color: COLORS.red,
	},

	brands: {
		marginVertical: 20,
		flexDirection: "row",
	},

	box: {
		borderRadius: 10,
		marginRight: 15,
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: COLORS.lightGray,
	},
});
