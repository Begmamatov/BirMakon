import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	text: {
		marginVertical: 20,
		marginHorizontal: 20,
		fontSize: 20,
		color: COLORS.defaultBlack,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	content: {
		alignSelf: "center",
		// marginHorizontal: 20,
	},

	view: {
		justifyContent: "flex-end",
		margin: 0,
	},

	modal: {
		padding: 20,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		backgroundColor: COLORS.white,
	},

	modalText: {
		fontSize: 16,
		marginVertical: 15,
		color: COLORS.defaultBlack,
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
});
