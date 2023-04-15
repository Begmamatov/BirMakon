import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingVertical: 20,
	},
	header: {
		marginHorizontal: 20,
		color: COLORS.defaultBlack,
	},
	containerText: {
		fontWeight: "600",
		fontSize: 20,
		marginHorizontal: 20,
		marginVertical: 20,
		color: COLORS.defaultBlack,
	},
});
