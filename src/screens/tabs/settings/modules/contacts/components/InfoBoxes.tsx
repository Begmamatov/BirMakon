import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { NOT_INITIALIZED_ERROR } from "@react-navigation/core/lib/typescript/src/createNavigationContainerRef";
import React from "react";
import { StyleSheet, View } from "react-native";

export interface InfoBoxesProps {
	title?: string;
	text?: string;
}

const InfoBoxes = ({ title, text }: InfoBoxesProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};

export default InfoBoxes;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		marginVertical: 10,
		elevation: 5,
		padding: 15,
		borderRadius: 10,
		backgroundColor: COLORS.lightGray,
	},

	title: {
		fontSize: 14,
	},

    text: {
        marginTop: 10,
        fontSize: 16,
        color: COLORS.defaultBlack
    }
});
