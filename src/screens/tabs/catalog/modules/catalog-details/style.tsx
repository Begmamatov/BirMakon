import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white
	},

	header: {
		marginHorizontal: 20,
		marginVertical: 20,
	},

	banner: {
		width: WINDOW_WIDTH,
		height: 85,
		borderRadius: 5,
	},

	box: {
		marginTop: 20,
        // marginBottom: 20,
	},
});
