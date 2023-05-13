import { Image, StyleSheet, View, Text } from "react-native";
import React from "react";
import { assetUrl } from "@novomarkt/api/requests";
import { COLORS } from "@novomarkt/constants/colors";

const ChatCart = ({ valyu }: any) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: assetUrl + valyu?.photo }} />
			<View style={styles.itemsContainer}>
				<View style={styles.nameContainer}>
					<Text
						style={{
							fontWeight: "400",
							fontSize: 13,
							color: " #C8C8C8",
						}}
					></Text>
					<Text style={styles.itemName}> {valyu?.name}</Text>
					{valyu?.price_usd ? (
						<Text style={styles.oldPrice}>{valyu?.price_usd}</Text>
					) : null}
					<Text style={styles.price}>{valyu?.price}сум</Text>
				</View>
			</View>
		</View>
	);
};

export default ChatCart;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flexDirection: "row",
		marginVertical: 20,
		backgroundColor: "#FFFFFF",
		shadowOpacity: 0.05,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		borderRadius: 10,
		alignItems: "center",
		elevation: 5,
	},

	image: {
		width: 91,
		height: 92,
		borderRadius: 10,
		marginHorizontal: 10,
	},

	itemsContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 10,
	},

	nameContainer: {
		flexDirection: "column",
		alignItems: "flex-start",
	},

	itemName: {
		color: COLORS.defaultBlack,
		fontSize: 21,
		fontWeight: "600",
		lineHeight: 40,
	},

	price: {
		fontSize: 16,
		color: COLORS.black,
		fontWeight: "400",
	},

	oldPrice: {
		fontSize: 14,
		color: COLORS.defaultBlack,
		textDecorationLine: "line-through",
	},
});
