import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "@novomarkt/constants/colors";

type Props = {
	label?: string;
	viewStyle?: object;
	textStyle?: object;
	checkout?: any;
	price?: any;
	priceName?: any;
};

export default function CheckBox(props: Props) {
	return (
		<View style={styles.checkBox} {...props.viewStyle}>
			<View style={styles.checkBoxItem}>
				<View
					style={[
						styles.checkBoxItemBox,
						{
							backgroundColor: props.checkout
								? COLORS.activeButtonBgColor
								: COLORS.white,
						},
					]}
				></View>
			</View>
			<Text style={styles.checkBoxText} {...props.textStyle}>
				{props.label}
			</Text>
			<Text style={styles.checkBoxText}>{props.price}</Text>
			<Text style={styles.checkBoxText}>{props.priceName}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	checkBox: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 30,
	},
	checkBoxItem: {
		width: 22,
		height: 22,
		backgroundColor: COLORS.white,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: COLORS.activeButtonBgColor,
		marginRight: 10,
		padding: 2,
	},
	checkBoxItemBox: {
		width: "100%",
		height: "100%",
		borderRadius: 5,
	},
	checkBoxText: {
		fontSize: 13,
		color: COLORS.checkboxTextColor,
		marginRight: 2,
	},
});
