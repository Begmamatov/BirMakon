import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
	},

	header: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: COLORS.white,
		elevation: 4,
	},

	headerText: {
		fontSize: 15,
		fontWeight: "700",
		letterSpacing: 0.5,
		color: COLORS.blue,
	},

	button: {
		width: 130,
		height: 40,
		flexDirection: "row",
	},

	buttonText: {
		color: COLORS.white,
		marginRight: 10,
	},

	buttonCon: {
		paddingHorizontal: 10,
		paddingVertical: 0,
		marginHorizontal: 0,
		marginTop: 0,
		borderRadius: 14,
	},

	itemName: {
		color: COLORS.defaultBlack,
		marginHorizontal: 25,
		fontSize: 17,
		fontWeight: "700",
		letterSpacing: 0.5,
		marginVertical: 10,
	},

	credit: {
		padding: 18,
		backgroundColor: COLORS.lightGray,
		marginHorizontal: 20,
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
	},

	creditPrice: {
		marginLeft: 10,
	},

	creditName: {
		color: COLORS.defaultBlack,
		fontSize: 14,
	},

	creditPriceText: {
		color: COLORS.defaultBlack,
		fontSize: 15,
		fontWeight: "700",
	},

	map: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	key: {
		color: COLORS.defaultBlack,
		fontSize: 14,
	},

	compos: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 15,
		marginTop: 20,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray,
	},

	composition: {
		color: COLORS.defaultBlack,
		fontSize: 15,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	buttonTxt: {
		color: COLORS.white,
		fontSize: 16,
		marginHorizontal: 20,
	},

	composTwo: {
		marginVertical: 20,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	rowHeader: {
		marginTop: 20,
		marginVertical: 10,
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
		borderBottomWidth: 1,
		borderBottomColor: COLORS.blue,
		marginLeft: 10,
		fontSize: 14,
	},

	blueText2: {
		fontSize: 14,
		marginLeft: 10,
	},

	flexEnd: {
		color: COLORS.blue,
		marginHorizontal: 20,
		marginTop: 10,
		alignSelf: "flex-end",
		textDecorationLine: "underline",
		textDecorationColor: COLORS.blue,
	},

	buttonReview: {
		fontSize: 16,
		color: COLORS.white,
	},

	contentContainerStyle: { paddingHorizontal: 12 },

	containerFlat: {
		marginBottom: 20,
		alignSelf: "center",
	},

	title: {
		color: COLORS.defaultBlack,
		fontSize: 20,
		marginHorizontal: 20,
		marginVertical: 20,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	marginBottom: {
		marginBottom: 40,
		marginHorizontal: 20,
	},

	marginBottomEnd: {
		marginBottom: 80,
		marginHorizontal: 20,
	},

	productImage: {
		width: WINDOW_WIDTH - 20,
		height: 400,
		alignSelf: "center",
	},

	buttonContainer: {
		flexDirection: "row",
		margin: 0,
	},

	cartText: {
		color: COLORS.white,
		marginRight: 4,
		fontWeight: "700",
	},
	inactiveCartText: {
		color: COLORS.cartColor3,
		marginRight: 8,
		fontFamily: "Montserrat-Medium",
	},

	modalView: {
		padding: 10,
		borderRadius: 8,
		backgroundColor: COLORS.white,
		marginBottom: 70,
	},

	inputStyle: {
		padding: 10,
	},

	rating: {
		marginHorizontal: 10,
		marginVertical: 10,
		alignSelf: "flex-start",
	},

	buttonSubmit: {
		padding: 0,
		marginHorizontal: 10,
		marginVertical: 10,
	},

	containerComment: {
		backgroundColor: COLORS.white,
	},

	boxes: {
		marginHorizontal: 20,
		marginVertical: 10,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		borderRadius: 8,
		padding: 15,
	},

	nameRow: {
		flexDirection: "row",
	},

	name: {
		color: COLORS.defaultBlack,
		fontSize: 16,
	},

	stars: {
		marginLeft: 30,
		alignSelf: "center",
		flexDirection: "row",
	},

	comment: {
		maxWidth: 200,
		marginVertical: 10,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	icon: {
		marginRight: 5,
	},
});
