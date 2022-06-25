import { StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "@novomarkt/constants/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	containerView: {
		marginHorizontal: 20,
		paddingHorizontal: 10,
		marginTop: 10,
		paddingBottom: 20,
	},
	containerText: {
		marginHorizontal: 30,
		marginTop: 20,
	},
	werticalView: {
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
		marginVertical: 30,
	},
	sectionText: {
		fontWeight: "600",
		fontSize: 20,
	},
	sectionBoxView: {
		paddingHorizontal: 30,
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomWidth: 0.5,
		paddingBottom: 15,
		borderBottomColor: COLORS.gray,
	},
	sectionBoxView1: {
		paddingHorizontal: 30,
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingBottom: 15,
	},
	animateText: {
		fontSize: 20,
	},
});
