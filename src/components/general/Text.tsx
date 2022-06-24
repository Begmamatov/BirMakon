import { COLORS } from "@novomarkt/constants/colors";
import React from "react";
import {
	StyleProp,
	StyleSheet,
	Text as RNText,
	TextBase,
	TextProps,
	TextStyle,
} from "react-native";

export default function Text({ children, style }: TextProps): JSX.Element {
	let fontFamily = "Montserrat-Medium";
	//@ts-ignore
	switch (style?.fontWeight) {
		case "bold":
			fontFamily = "Montserrat-Bold";
			break;
		case "400":
			fontFamily = "Montserrat-Thin";
			break;
		case "700":
			fontFamily = "Montserrat-SemiBold";
			break;
		default:
			fontFamily = "Montserrat-Regular";
			break;
	}
	let styl: StyleProp<TextStyle> = StyleSheet.compose(
		{
			fontFamily,
			color: COLORS.gray,
		},
		style
	);

	return <RNText style={styl}>{children}</RNText>;
}
