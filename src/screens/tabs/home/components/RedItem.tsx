import { ApprovedIcon, MainPagesIcon } from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import React, { ReactElement } from "react";
import { ListRenderItemInfo, StyleSheet, Text, View } from "react-native";

const data = {
	title: "Lorem Ipsum is",
	descriptions: "У нас выгодные цены",
};
const data2 = {
	title: "Lorem Ipsum is",
	descriptions:
		"Быстрое оформление и гарантия на возврат в случае неисправности",
};

export interface ItemProps {
	title: string;
	descriptions: string;
}

export default function RedItem() {
	return (
		<View style={styles.container}>
			<View style={styles.containerBox}>
				<View style={styles.itemBox}>
					<ApprovedIcon />
				</View>
				<Text style={styles.containerText}>{data?.title}</Text>
				<Text style={styles.containerText1}>{data?.descriptions}</Text>
			</View>
			<View style={styles.containerBoxTwo}>
				<View style={styles.itemBox1}>
					<MainPagesIcon />
				</View>
				<Text style={styles.containerText}>{data2?.title}</Text>
				<Text style={styles.containerText1}>{data2?.descriptions}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		// marginTop: 10,
		marginBottom: 60,
		marginLeft: 10,
	},
	containerBox: {
		width: "50%",
	},
	itemBox: {
		alignItems: "center",
	},
	itemBox1: {
		alignItems: "center",
	},
	containerBoxTwo: {
		width: "50%",
	},
	containerText: {
		fontWeight: "700",
		fontSize: 14,
		textAlign: "center",
	},
	containerText1: {
		fontSize: 13,
		fontWeight: "500",
		color: COLORS.whiteGray,
		textAlign: "center",
	},
});
