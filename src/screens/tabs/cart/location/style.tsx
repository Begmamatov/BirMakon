import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	header: {
		marginHorizontal: 20,
		marginVertical: 10,
	},

	input: {
		borderWidth: 1,
		borderRadius: 8,
		marginVertical: 10,
		paddingVertical: 10,
		marginHorizontal: 20,
		paddingHorizontal: 15,
		borderColor: COLORS.whiteGray,
		backgroundColor: COLORS.lightGray,
	},
});
