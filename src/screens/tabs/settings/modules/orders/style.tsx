import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 20,
		// paddingHorizontal: 20,
		backgroundColor: COLORS.white,
	},

	headerText: {
		marginTop: 20,
		marginHorizontal: 20,
		fontSize: 16,
		color: COLORS.defaultBlack,
	},

	header: {
		marginHorizontal: 20,
	},
	salesman: {
		flexDirection: "row",
		marginHorizontal: 20,
		marginVertical: 5,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	finish: {
		marginBottom: 60,
		marginVertical: 10,
		marginHorizontal: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	finishTexto: {
		fontSize: 16,
	},
	finishText: {
		fontWeight: "700",
		fontSize: 16,
		color: COLORS.defaultBlack,
	},
});
