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
	content: {
		marginTop: 30,
		flexDirection: "row",
		minHeight: 600,
		backgroundColor: "white",
		borderRadius: 8,
		paddingVertical: 45,
		paddingHorizontal: 25,
		width: "100%",
		marginVertical: 10,
	},
	box_1: {
		flexDirection: "row",
		width: 151,
		borderWidth: 1,
		justifyContent: "center",
	},
	box_2: {
		flexDirection: "row",
		width: 151,
	},
	box_1_container: {},

	image_container_doc: {},
	all_value: {
		flexDirection: "row",
		alignItems: "center",
	},
	all_value_doc: {
		width: 40,
		height: 30,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#EE4927",
		borderRadius: 8,
	},
	all_value_text: {
		color: "#ffff",
		fontSize: 12,
	},
	otpravet_value: {
		flexDirection: "row",
		width: 147,
		height: 40,
		borderWidth: 1,
		borderColor: "red",
		borderRadius: 8,
		alignItems: "center",
		marginTop: 8,
	},
	otpravet_value_text: {
		fontSize: 12,
		fontWeight: "400",
		color: "red",
		marginRight: 4,
	},
	// sizes
	sizes: {
		flexDirection: "column",
	},
	size: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	size_box: {
		width: 40,
		height: 40,
		borderWidth: 1,
		borderRadius: 5,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
	},
	size_text: {},
});
