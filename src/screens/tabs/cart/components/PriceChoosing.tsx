import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";

const PriceChoosing = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{STRINGS.price}</Text>
			<View style={styles.row}>
				<View style={styles.inputBox}>
					<Text>{STRINGS.from}</Text>
					<TextInput
						style={styles.input}
						keyboardType={"numeric"}
						placeholder="256"
						placeholderTextColor={COLORS.defaultBlack}
					/>
					<Text>₽</Text>
				</View>
				<View style={styles.inputBox}>
					<Text>{STRINGS.till}</Text>
					<TextInput
						style={styles.input}
						placeholder="3499"
						keyboardType={"numeric"}
						placeholderTextColor={COLORS.defaultBlack}
					/>
					<Text>₽</Text>
				</View>
			</View>
		</View>
	);
};

export default PriceChoosing;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		marginHorizontal: 20,
	},

	row: {
		marginVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	text: {
		color: COLORS.defaultBlack,
		fontSize: 17,
	},

	inputBox: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		borderWidth: 1,
		borderRadius: 10,
		borderColor: COLORS.whiteGray,
		paddingHorizontal: 15,
		backgroundColor: COLORS.lightGray,
	},

	input: {
		width: "35%",
		paddingVertical: Platform.OS === "android" ? 0 : 10,
	},
});
