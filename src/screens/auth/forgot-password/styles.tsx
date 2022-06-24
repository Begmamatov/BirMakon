import { COLORS } from "@novomarkt/constants/colors";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: COLORS.white,
	},
	logoText: {
		alignSelf: "center",
		fontSize: 45,
		color: "#0057FF",
		fontWeight: "bold",
		marginVertical: 20,
	},

	margin: {
		// marginVertical: 20,
	},

	header: {
		textAlign: "center",
		fontSize: 22,
		marginVertical: 20,
		color: COLORS.defaultBlack,
	},

	title: {
		marginHorizontal: 10,
		textAlign: "center",
	},

	inputBox: {
		borderRadius: 10,
		paddingVertical: 30,
		marginHorizontal: 20,
		marginVertical: 40,
		backgroundColor: "#fff",
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},

	input: {
		marginHorizontal: 20,
	},

	inputStyle: {
		paddingVertical: Platform.OS == "android" ? 10 : 15,
		paddingHorizontal: 10,
	},

	button: {
		marginHorizontal: 20,
	},

	buttonTxt: {
		fontSize: 18,
	},

	flexEnd: {
		fontSize: 20,
		alignSelf: "center",
		marginHorizontal: 20,
		marginTop: 20,
	},
});
