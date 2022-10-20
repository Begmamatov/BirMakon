import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingBottom: 20,
		flexDirection: "column",
		marginTop: 20,
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
		fontStyle: "normal",
		fontSize: 16,
		fontWeight: "600",
		color: "#023047",
	},
	information: {
		marginTop: 25,
		marginBottom: 30,
	},
});
