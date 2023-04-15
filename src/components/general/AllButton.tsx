import {
	GestureResponderEvent,
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	TouchableWithoutFeedback,
	View,
	ViewStyle,
} from "react-native";
import React, { ReactElement } from "react";
import { STRINGS } from "@novomarkt/locales/strings";
import { COLORS } from "@novomarkt/constants/colors";

export interface AllButtonProps {
	text?: string;
	onPress?: (event: GestureResponderEvent) => void;
	containerStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	secondary?: boolean;
	children?: ReactElement | null;
	loading?: boolean;
	active?: boolean;
}

const AllButton = ({
	text,
	onPress,
	containerStyle = {},
	textStyle,
	secondary,
	children,
	loading,
	active,
}: AllButtonProps) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<Text style={styles.allTextStyle}>{STRINGS.all}</Text>
		</TouchableWithoutFeedback>
	);
};

export default AllButton;

const styles = StyleSheet.create({
	allTextStyle: {
		color: COLORS.defaultBlack,
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderRadius: 15,
		backgroundColor: COLORS.white,
		borderWidth: 1,
		borderColor: COLORS.defaultBlack,
	},
});
