import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	header: {
		marginVertical: 10,
		marginHorizontal: 20,
	},

	title: {
		fontSize: 20,
		marginVertical: 10,
		marginHorizontal: 20,
	},

	itemBox: {
		// padding: 10,
		marginVertical: 10,
		marginHorizontal: 20,
		backgroundColor: COLORS.lightGray,
	},
});
