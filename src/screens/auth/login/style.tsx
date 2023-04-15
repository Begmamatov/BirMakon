import { COLORS } from "@novomarkt/constants/colors";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},

	logoText: {
		alignSelf: "center",
		fontSize: 45,
		color: "#0057FF",
		fontWeight: "bold",
		marginVertical: 30,
	},

	inputBox: {
		borderRadius: 10,
		paddingVertical: 30,
		marginHorizontal: 20,
		backgroundColor: "#fff",
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},

	rowText: {
		marginVertical: 15,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	blueText: {
		fontSize: 14,
		color: COLORS.red,
		textDecorationLine: "underline",
		textDecorationStyle: "solid",
	},

	inputStyle: {
		paddingVertical: Platform.OS == "android" ? 10 : 15,
		paddingHorizontal: 10,
	},

	askText: {
		color: "#023047",
		fontSize: 14,
	},

	input: {
		marginHorizontal: 20,
	},
	button: {
		marginHorizontal: 20,
	},

	buttonTxt: {
		fontSize: 18,
	},

	error: {
		color: COLORS.red,
		alignSelf: "center",
	},
});
