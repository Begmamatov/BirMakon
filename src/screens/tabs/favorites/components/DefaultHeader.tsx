import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

export interface DefaultHeaderProps {
	name?: string;
}

const DefaultHeader = ({ name }: DefaultHeaderProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{name ? name : ""}</Text>
		</View>
	);
};

export default DefaultHeader;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	text: {
		fontSize: 20,
		color: COLORS.defaultBlack,
	},
});
