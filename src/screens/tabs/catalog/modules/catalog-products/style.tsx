import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	header: {
		marginVertical: 20,
		marginHorizontal: 20,
	},

	banner: {
		width: WINDOW_WIDTH,
		height: 85,
		borderRadius: 5,
	},

	columns: {
		marginHorizontal: 10,
		marginBottom: 200,
	},
});
