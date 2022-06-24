import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	button: {
		marginHorizontal: 20,
		marginTop: 10,
	},

	buttonTxt: {
		fontSize: 16,
	},

	empty: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	emptyBox: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	emptyText: {
		fontSize: 22,
	},

	bottom: {
		marginBottom: 20,
	},

	top: {
		marginTop: 20,
	},
});
