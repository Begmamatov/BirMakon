import { COLORS } from "@novomarkt/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingVertical: 20,
		height: "100%",
	},

	header: {
		marginHorizontal: 20,
	},

	headerTxt: {
		fontSize: 20,
		marginHorizontal: 20,
		marginVertical: 20,
		color: COLORS.defaultBlack,
	},

	box: {
		backgroundColor: COLORS.chatColor,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		marginHorizontal: 20,
		marginVertical: 20,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		flex: 1,
	},

	top: {
		backgroundColor: "rgba(0, 82, 255, 0.15)",
		padding: 15,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},

	topText: {
		fontSize: 15,
		color: COLORS.defaultBlack,
	},

	inner: {
		padding: 15,
		flex: 1,
	},

	innerBox: {
		padding: 15,
		backgroundColor: "rgba(212, 212, 212, 0.5);",
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8,
	},

	innerText: {
		fontSize: 13,
		color: COLORS.defaultBlack,
	},

	texting: {
		flexDirection: "row",
		backgroundColor: COLORS.white,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		paddingHorizontal: 15,
		// marginTop: 50,
		paddingVertical: 10,
	},

	input: {
		// borderWidth: 1,
		// paddingHorizontal: 20,
		width: "80%",
		marginLeft: 5,
		color: COLORS.defaultBlack,
	},

	textingBox: {
		height: 45,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		backgroundColor: "rgba(212, 212, 212, 0.5);",
	},

	tgicon: {
		marginLeft: 10,
		alignSelf: "center",
	},

	myMsg: {
		color: COLORS.white,
		backgroundColor: COLORS.lighBlue,
		padding: 10,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomLeftRadius: 8,
	},

	myBox: {
		marginTop: 20,
		alignItems: "flex-end",
	},
});
