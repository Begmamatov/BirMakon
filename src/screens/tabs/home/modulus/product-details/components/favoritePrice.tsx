import { COLORS } from "@novomarkt/constants/colors";
import React from "react";
import {
	StyleSheet,
	View,
	Text,
	ViewStyle,
	StyleProp,
	TouchableOpacity,
	GestureResponderEvent,
} from "react-native";

export interface BlueButtonProps {
	newprice?: number | undefined | null;
	oldprice?: number | undefined | null;
	fromTo?: number | undefined | null;
	fromToFrom?: number | undefined | null;
	tofrom?: number | undefined | null;
	smallprice?: number | undefined | null;
	bigprice?: number | undefined | null;
	onPress?: (event: GestureResponderEvent) => void;
}

const FavoritePrice = ({
	onPress,
	oldprice,
	newprice,
	fromTo,
	fromToFrom,
	tofrom,
	smallprice,
	bigprice,
}: BlueButtonProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Text style={styles.text01}>{oldprice} сум</Text>
				<Text style={styles.newprice}>{newprice} сум</Text>
			</View>
			<View style={styles.box1}>
				<View style={styles.row}>
					<Text style={styles.fromTo}>
						от {fromTo} до {fromToFrom}:
					</Text>
					<Text style={styles.smallprice}>{smallprice} сум</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.tofrom}>
						от {fromToFrom} до {tofrom}:
					</Text>
					<Text style={styles.bigprice}>{bigprice} сум</Text>
				</View>
			</View>
		</View>
	);
};

export default FavoritePrice;
const styles = StyleSheet.create({
	text01: {
		color:
			"background: linear-gradient(270deg, rgba(64, 64, 64, 0.8) 0%, rgba(21, 21, 21, 0.8) 109.4%)",
		fontWeight: "500",
		fontSize: 18,
		textDecorationColor: COLORS.defaultBlack,
		textDecorationLine: "line-through",
	},
	newprice: {
		fontSize: 22,
		fontWeight: "700",
		color: COLORS.red,
	},
	buttoncontainer: {},
	container: {
		marginHorizontal: 25,
		flexDirection: "row",
		alignItems: "center",
	},
	box: {
		width: "50%",
		marginHorizontal: -5,
	},
	box1: {
		width: "50%",
		marginHorizontal: 25,
	},
	fromTo: {
		fontSize: 16,
		color: "#000000",
		fontWeight: "300",
		marginHorizontal: 2,
	},
	tofrom: {
		fontSize: 16,
		color: "#000000",
		fontWeight: "300",
		marginHorizontal: 2,
	},
	smallprice: {
		fontSize: 14,
		fontWeight: "400",
		color: "#999999",
		// backgroundColor: "red",
	},
	bigprice: {
		fontSize: 14,
		fontWeight: "400",
		color: "#999999",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 2,
	},
});
