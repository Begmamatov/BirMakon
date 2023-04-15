import { COLORS } from "@novomarkt/constants/colors";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	txt: {
		fontWeight: "bold",
	},

	inputStyle: {
		paddingVertical: Platform.OS == "android" ? 10 : 15,
		paddingHorizontal: 5,
	},

	btn: {
		marginHorizontal: 20,
		marginBottom: 12,
	},

	timer: {
		marginHorizontal: 20,
		marginTop: -15,
		color: COLORS.red,
	},

	end: {
		color: COLORS.red,
		textDecorationLine: "underline",
		textDecorationStyle: "solid",
		marginVertical: 15,
		marginHorizontal: 20,
	},

	textView: {
		marginHorizontal: 20,
	},

	endText: {
		// alignSelf: "flex-end",
	},

	blueEnd: {
		// alignSelf: "flex-end",
		marginVertical: 10,
		color: COLORS.red,
	},

	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},

	logoText: {
		alignSelf: "center",
		fontSize: 40,
		// fontFamily: "Montserrat-Bold",
		fontWeight: "bold",
		marginVertical: 20,
		marginBottom: 50,
	},

	inputBox: {
		// borderWidth: 1,
		borderRadius: 10,
		paddingVertical: 20,
		marginHorizontal: 20,
		marginVertical: 20,
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

	rowText: {
		// alignSelf: "center",
		marginVertical: 10,
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

	askText: {
		color: "#023047",
		fontSize: 14,
	},

	title: {
		color: "gray",
		fontSize: 15,
	},

	defButton: {
		marginHorizontal: 20,
	},

	buttonTxt: {
		fontSize: 18,
	},
});
