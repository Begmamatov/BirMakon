import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 20,
		backgroundColor: COLORS.white,
	},

	header: {
		marginHorizontal: 20,
	},

	rowHeader: {
		marginVertical: 20,
		marginHorizontal: 20,
		flexDirection: "row",
	},

	arrow: {
		alignSelf: "center",
		marginLeft: 0.5,
	},

	txt: {
		fontSize: 14,
	},

	blueText: {
		// textDecorationLine: "underline",
		// textDecorationStyle: 'solid',
		// textDecorationColor: COLORS.blue,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.red,
		marginLeft: 10,
		fontSize: 14,
	},

	blueText2: {
		fontSize: 14,
		marginLeft: 10,
	},
});
