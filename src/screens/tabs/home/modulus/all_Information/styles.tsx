import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingBottom: 20,
		flexDirection: "column",
		backgroundColor: "white",
	},
	scrol_container: {
		height: "100%",
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		marginRight: 9,
		color: "#0052FF",
	},
	text: {
		fontSize: 20,
		color: "#023047",
		fontWeight: "500",
	},
	title: {
		marginTop: 24,
	},
	title_text: {
		fontSize: 16,
		fontWeight: "600",
		color: COLORS.gray,
	},
	information: {
		marginTop: 45,
	},
});
