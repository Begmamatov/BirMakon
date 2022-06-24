import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_HEIGHT } from "@novomarkt/constants/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingVertical: 20,
	},

	header: {
		fontSize: 20,
		color: COLORS.defaultBlack,
		marginTop: 20,
		marginHorizontal: 20,
	},

	shadowBox: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
	},

	row: {
		alignItems: "center",
		flexDirection: "row",
	},

	text: {
		fontSize: 18,
		color: COLORS.defaultBlack,
		marginHorizontal: 15,
	},

	inputBox: {
		marginTop: 20,
	},

	rowButtons: {
		marginTop: 5,
		marginRight: 10,
		flexDirection: "row",
	},

	blueText: {
		color: COLORS.blue,
		fontSize: 14,
		marginTop: 10,
	},

	dot: {
		width: 17,
		height: 17,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: COLORS.gray,
		backgroundColor: COLORS.white,
		alignItems: "center",
		justifyContent: "center",
	},

	background: {
		width: 9,
		height: 9,
		borderRadius: 6,
		backgroundColor: COLORS.gray,
	},
	dotGray: {
		width: 17,
		height: 17,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: COLORS.gray,
		backgroundColor: COLORS.white,
		alignItems: "center",
		justifyContent: "center",
	},

	backgroundGray: {
		width: 9,
		height: 9,
		borderRadius: 6,
		backgroundColor: COLORS.white,
	},

	black: {
		marginLeft: 5,
		color: COLORS.defaultBlack,
	},

	head: {
		// marginTop: -10,
		alignSelf: "center",
		color: COLORS.defaultBlack,
		fontFamily: "Montserrat-Medium",
	},

	shadowBoxTwo: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
		paddingRight: 50,
	},

	bank: {
		color: COLORS.defaultBlack,
		fontSize: 18,
		marginBottom: 10,
	},

	locate: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
	},

	moscow: {
		marginLeft: 10,
	},

	txt: {
		color: COLORS.defaultBlack,
		fontSize: 18,
		marginBottom: 10,
	},

	delete: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
	},

	recover: {
		padding: 15,
		marginVertical: 10,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
		marginBottom: 60,
	},

	left: {
		paddingHorizontal: 20,
		paddingBottom: 10,
		backgroundColor: COLORS.white,
	},

	userData: {
		flex: 1,
		padding: 15,
		borderRadius: 8,
		marginHorizontal: 20,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		marginVertical: 20,
	},
});
