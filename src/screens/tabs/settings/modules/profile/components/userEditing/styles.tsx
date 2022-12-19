import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	buttonTxt: {
		color: COLORS.white,
		fontSize: 16,
		marginHorizontal: 20,
	},

	userImg: {
		alignSelf: "center",
		marginVertical: 10,
		flexDirection: "column",
		alignItems: "center",
		paddingHorizontal: 20,
	},

	changeTxt: {
		marginVertical: 5,
	},
	back: {
		marginTop: 20,
		marginBottom: 10,
	},

	inputLabel: {
		marginVertical: 15,
	},

	input: {
		flex: 1,
		borderBottomWidth: 1,
		marginVertical: Platform.OS === "ios" ? 10 : 0,
	},

	sexPicker: {
		padding: 0,
		borderWidth: 0,
		borderBottomWidth: 1,
		margin: 0,
		zIndex: 999,
	},
});
