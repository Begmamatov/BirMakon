import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: COLORS.white,
	},

	userImg: {
		alignSelf: "center",
		marginVertical: 10,
		flexDirection: "column",
		alignItems: "center",
	},

	changeTxt: {
		marginVertical: 5,
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
	},
});
