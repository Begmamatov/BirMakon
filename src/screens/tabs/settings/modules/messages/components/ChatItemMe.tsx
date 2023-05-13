import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@novomarkt/constants/colors";

const ChatItemMe = ({ item }: any) => {
	let time = item.date.split(" ")[1].slice(0, 5);

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.personNime}>{item.sender?.name}</Text>
				<View style={styles.messege}>
					<Text style={styles.messege_text}>{item.message}</Text>
				</View>
				<Text style={styles.date_text}>{time}</Text>
			</View>
		</>
	);
};

export default ChatItemMe;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "column",
		alignItems: "flex-end",
		paddingRight: 2,
	},
	personNime: {
		color: "#3F3535",
		fontWeight: "700",
		fontSize: 16,
		lineHeight: 40,
	},
	messege: {
		paddingVertical: 22,
		paddingRight: 9,
		paddingLeft: 18,
		borderColor: COLORS.white,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-end",
		backgroundColor: COLORS.white,
		elevation: 5,
		shadowOpacity: 0.1,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
	},
	messege_text: {
		color: "#717171",
		fontSize: 13,
		fontWeight: "700",
		lineHeight: 18,
	},
	date_text: {
		color: "#C8C8C8",
		fontSize: 13,
		fontWeight: "400",
		marginTop: 10,
	},
});
