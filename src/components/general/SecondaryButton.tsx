import { COLORS } from "@novomarkt/constants/colors";
import React from "react";
import {
	GestureResponderEvent,
	StyleProp,
	StyleSheet,
	TextStyle,
	TouchableWithoutFeedback,
	View,
	ViewStyle,
} from "react-native";
import Text from "./Text";

export interface SecondaryButtonProps {
	text?: string;
	textStyle?: TextStyle;
	containerStyle?: StyleProp<ViewStyle>;
	onPress?: (event: GestureResponderEvent) => void;
}

const SecondaryButton = ({
	onPress,
	text,
	textStyle,
	containerStyle,
}: SecondaryButtonProps) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={[styles.container, containerStyle]}>
				<Text style={[styles.text, textStyle]}>{text}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default SecondaryButton;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 12,
		justifyContent: "center",
		marginHorizontal: 25,
		marginTop: 10,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#517EBD",
	},
	text: {
		color: COLORS.gray,
		fontSize: 20,
	},
});
