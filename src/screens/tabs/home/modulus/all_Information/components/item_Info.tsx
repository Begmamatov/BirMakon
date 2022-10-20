import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Item_Info = ({ items }: { items: any }) => {
	console.log("====================================");
	console.log("qiymat", items);
	console.log("====================================");
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{items.title}</Text>
			<View style={styles.info_container}>
				<Text>{items.name}</Text>
				<Text>{items.age}%</Text>
			</View>
		</View>
	);
};

export default Item_Info;
const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		marginTop: 25,
		marginBottom: 31,
	},
	title: {
		fontSize: 15,
		fontWeight: "600",
		marginBottom: 24,
	},
	info_container: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderTopWidth: 1,
		borderTopColor: "black",
		paddingTop: 10,
		paddingBottom: 12,
	},
});
