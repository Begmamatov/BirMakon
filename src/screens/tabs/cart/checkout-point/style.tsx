import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	header: {
		marginVertical: 20,
		marginHorizontal: 20,
		backgroundColor: COLORS.white,
	},

	map: {
		width: WINDOW_WIDTH,
		height: WINDOW_HEIGHT,
		alignItems: "center",
	},

	inputBox: {
		position: "absolute",
		bottom: 15,
		backgroundColor: COLORS.white,
		borderRadius: 10,
		elevation: 5,
		marginHorizontal: 20,
		paddingHorizontal: 20,
		left: 0,
		right: 0,
		flexDirection: "row",
		alignItems: "center",
	},

	input: {
		width: "100%",
		paddingHorizontal: 20,
		paddingVertical: Platform.OS == "android" ? 10 : 15,
	},

	button: {
		position: "absolute",
		bottom: 100,
		padding: 20,
		borderRadius: 30,
		backgroundColor: COLORS.white,
		elevation: 5,
		right: 20,
	},

	filter: {
		marginHorizontal: 20,
		position: "absolute",
		top: 100,
		// backgroundColor: COLORS.blue,
	},

	filterInner: {
		borderRadius: 8,
		padding: 13,
		flexDirection: "row",
		alignItems: "center",
	},

	filterIcon: {
		marginLeft: 10,
	},
});
