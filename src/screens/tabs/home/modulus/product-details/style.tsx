import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
	},
	propertyBox: {
		marginLeft: 20,
	},
	propertyBoxText: {
		fontSize: 16,
		color: COLORS.black,
		marginBottom: 7,
		fontWeight: "500",
	},
	iconView: {
		marginTop: 8,
	},
	flatlistContainerView: {
		marginHorizontal: 10,
		paddingVertical: 20,
	},
	flatlistContainer: {
		marginHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	flatlistContainerText: {
		fontWeight: "700",
		fontSize: 17,
		color: COLORS.textColor1,
	},
	flatlistContainerBox: {
		marginTop: 10,
	},
	flatlistContainerBoxText: {
		fontSize: 12,
		marginLeft: 10,
		color: COLORS.gray,
	},
	flatlistContainerBoxText1: {
		fontSize: 12,
		marginLeft: 10,
		marginTop: 10,
		color: COLORS.gray,
	},
	flatlistContainer12: {
		marginHorizontal: 10,
		paddingVertical: 20,
	},
	flatlistContainerText12: {
		fontSize: 17,
		color: COLORS.textColor1,
		marginLeft: 10,
		fontWeight: "700",
	},
	oldContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: 20,
		marginTop: 20,
	},
	oldView: {
		width: WINDOW_WIDTH / 5,
		maxWidth: 90,
		height: 46,
		backgroundColor: "#131E3D",
		borderRadius: 7,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
		marginRight: -8,
		paddingHorizontal: 5,
	},
	oldText: {
		color: COLORS.white,
	},
	oldView1: {
		width: WINDOW_WIDTH / 4,
		maxWidth: 90,
		height: 46,
		backgroundColor: COLORS.lightOrange,
		borderRadius: 7,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
		marginLeft: -1,
	},
	sectionBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 40,
		marginHorizontal: 20,
	},
	sectionBoxText: {
		fontSize: 20,
		fontWeight: "600",
		color: COLORS.lightBlack,
	},
	sectionContainer: {
		width: 180,
		marginRight: -4,
	},
	corusellText: {
		fontSize: 22,
		fontWeight: "700",
		color: COLORS.lightBlack,
		marginLeft: 20,
		marginTop: 20,
	},
	activeSize: {
		fontSize: 20,
		fontWeight: "500",
		borderRadius: 5,
		color: COLORS.lightBlack,
	},
	counter: {
		flexDirection: "row",
		marginHorizontal: 20,
		borderRadius: 8,
	},
	minus: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: COLORS.orange,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
	},

	plus: {
		padding: 10,
		paddingHorizontal: 10,
		backgroundColor: COLORS.lightBlack,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
	},
	topBottom: {
		paddingHorizontal: 15,
		borderColor: COLORS.whiteGray,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		justifyContent: "center",
	},
	function: {
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 15,
	},
	functionText: {
		fontSize: 16,
		color: "#666666",
	},
	deliveryView: {
		marginVertical: 30,
		marginHorizontal: 10,
		paddingHorizontal: 10,
	},
	deliveryText: {
		fontWeight: "600",
		fontSize: 20,
		color: COLORS.black,
		marginVertical: 6,
	},
	deliveryText1: {
		fontSize: 16,
		color: COLORS.black,
		marginVertical: 6,
	},
	scrollView1: {
		position: "absolute",
		width: 34,
		height: 34,
		borderRadius: 50,
		backgroundColor: "#E5E5E5",
		justifyContent: "center",
		alignItems: "center",
		right: 10,
		top: 28,
		zIndex: 1,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	sectionText: {},
	sectionSize: {
		marginTop: 20,
		marginHorizontal: 12,
		borderWidth: 1,
		paddingHorizontal: 18,
		paddingVertical: 14,
		borderRadius: 5,
		marginLeft: 1,
	},
	corusellContiner: {
		marginTop: 20,
		marginLeft: 18,
		paddingHorizontal: 1,
		width: 92,
		height: 86,
	},
	scrollView: {
		position: "absolute",
		width: 34,
		height: 34,
		borderRadius: 50,
		backgroundColor: "#E5E5E5",
		justifyContent: "center",
		alignItems: "center",
		right: 10,
		top: 40,
		zIndex: 1,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
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
	activeColor: {
		width: 92,
		height: 86,
	},
	corusell: {
		width: 75,
		height: 68,
		borderRadius: 5,
	},
	carousel: {
		paddingVertical: 20,
	},
	headerText: {
		fontSize: 15,
		fontWeight: "700",
		letterSpacing: 0.5,
		color: COLORS.red,
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
	otsenka: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 20,
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
		borderBottomColor: COLORS.red,
		marginLeft: 10,
		fontSize: 14,
	},

	redText2: {
		fontSize: 14,
		marginLeft: 10,
	},

	flexEnd: {
		color: COLORS.red,
		marginHorizontal: 20,
		marginTop: 10,
		alignSelf: "flex-end",
		textDecorationLine: "underline",
		textDecorationColor: COLORS.red,
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
		marginBottom: 20,
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

	ceckedColor: {
		borderWidth: 1,
		borderColor: "blue",
	},
	ceckedColorNo: {
		borderWidth: 0,
	},
});
