import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingVertical: 20,
		// paddingBottom: 20,
		// height: 600,
	},

	header: {
		paddingHorizontal: 20,
		backgroundColor: COLORS.white,
	},

	headerTxt: {
		marginHorizontal: 20,
		marginVertical: 20,
		color: COLORS.defaultBlack,
		fontSize: 20,
	},
});
