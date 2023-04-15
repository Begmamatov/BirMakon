import { COLORS } from "@novomarkt/constants/colors";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	backHeader: {
		marginVertical: 20,
		marginHorizontal: 20,
	},
	deliveryContainer: {
		marginHorizontal: 20,
	},

	headerTxt: {
		fontSize: 19,
		color: COLORS.defaultBlack,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	activeBox: {
		marginVertical: 10,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: COLORS.red,
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 20,
		paddingHorizontal: 10,

		backgroundColor: COLORS.white,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},

	box: {
		marginVertical: 10,
		borderWidth: 1,
		borderColor: COLORS.white,
		borderRadius: 8,
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: COLORS.white,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		paddingVertical: 20,
		paddingHorizontal: 10,
	},

	border: {
		borderWidth: 1,
		borderColor: COLORS.whiteGray,
		width: 12,
		height: 12,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},

	activeBorder: {
		borderWidth: 1,
		borderColor: COLORS.red,
		width: 12,
		height: 12,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},

	dot: {
		width: 6,
		height: 6,
		borderRadius: 10,
		backgroundColor: COLORS.white,
	},

	activeDot: {
		width: 6,
		height: 6,
		borderRadius: 10,
		backgroundColor: COLORS.red,
	},

	textBox: {
		marginHorizontal: 10,
	},

	text: {
		fontSize: 16,
		color: COLORS.defaultBlack,
	},

	comment: {
		fontSize: 12,
	},
	pickupContainer: {
		marginVertical: 10,
		marginHorizontal: 20,
	},

	pickupHeaderTxt: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	button: {
		marginVertical: 10,
		backgroundColor: COLORS.menuBackground,
		paddingVertical: 10,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},

	buttonTxt: {
		fontSize: 16,
		color: COLORS.red,
	},

	pickupBox: {
		marginVertical: 20,
		padding: 15,
		backgroundColor: COLORS.white,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},

	boxTxt: {
		fontSize: 13,
		color: COLORS.defaultBlack,
	},

	boxImage: {
		borderRadius: 8,
		width: 80,
		height: 80,
		marginTop: 5,
	},

	boxNum: {
		zIndex: 2,
		margin: 5,
		flexDirection: "row",
	},

	imageNum: {
		zIndex: 1,
		marginLeft: -10,
		width: 20,
		height: 20,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.lighBlue,
	},

	num: {
		fontSize: 12,
		color: COLORS.white,
	},

	recipientContainer: {
		marginHorizontal: 20,
	},

	recipHeaderTxt: {
		fontSize: 19,
		color: COLORS.defaultBlack,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	recipBox: {
		padding: 15,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		marginVertical: 20,
		backgroundColor: COLORS.white,
	},

	switch: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	notMe: {
		fontSize: 14,
	},

	input: {
		borderWidth: 1,
		borderRadius: 8,
		marginVertical: 10,
		paddingHorizontal: 10,
		paddingVertical: Platform.OS == "android" ? 10 : 15,
		backgroundColor: COLORS.lightGray,
		borderColor: COLORS.whiteGray,
		color: COLORS.defaultBlack,
		fontSize: 16,
	},

	underline: {
		marginTop: 10,
		color: COLORS.red,
	},

	recipButton: {
		marginHorizontal: 0,
		marginBottom: 40,
	},
});
