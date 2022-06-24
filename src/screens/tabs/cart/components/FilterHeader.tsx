import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import Text from "@novomarkt/components/general/Text";
import { CancelIcon } from "@novomarkt/assets/icons/icons";
import { useNavigation } from "@react-navigation/core";
import { ROUTES } from "@novomarkt/constants/routes";

const FilterHeader = () => {
	let navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<CancelIcon
					fill={COLORS.blue}
					hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
					onPress={() => navigation.goBack()}
				/>
				<Text style={styles.headerTxt}>{STRINGS.filtres}</Text>
			</View>
			<Text style={styles.blueTxt}>{STRINGS.clear}</Text>
		</View>
	);
};

export default FilterHeader;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 15,
		marginHorizontal: 20,
		marginVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	row: {
		alignItems: "center",
		flexDirection: "row",
	},

	headerTxt: {
		fontSize: 20,
		marginHorizontal: 15,
		color: COLORS.defaultBlack,
	},

	blueTxt: {
		fontSize: 14,
		color: COLORS.blue,
		alignSelf: "center",
	},
});
