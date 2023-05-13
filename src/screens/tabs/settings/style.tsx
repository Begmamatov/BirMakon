import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingVertical: 20,
		position: "relative",
	},

	headerText: {
		color: COLORS.defaultBlack,
		marginHorizontal: 20,
		fontSize: 20,
		fontWeight: "700",
	},

	itemsBox: {
		marginVertical: 20,
	},

	footer: {
		width: "100%",
		zIndex: 1,
		position: "absolute",
		bottom: 15,
		height: 100,
		backgroundColor: COLORS.white,
		borderWidth: 0.3,
		borderColor: COLORS.white,
		elevation: 5,
		shadowOpacity: 1,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},
});
