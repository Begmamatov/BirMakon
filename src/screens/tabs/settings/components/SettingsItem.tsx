import { COLORS } from "@novomarkt/constants/colors";
import React, { ReactElement } from "react";
import {
	GestureResponderEvent,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { SvgProps } from "react-native-svg";

export interface SettingsItemProps {
	icon?: (props: SvgProps) => JSX.Element;
	text?: string;
	onPress?: (event: GestureResponderEvent) => void;
	focus?: boolean;
}

const SettingsItem = ({
	icon: Icon,
	text,
	onPress,
	focus,
}: SettingsItemProps) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View
				style={[
					styles.container,
					{ backgroundColor: focus ? COLORS.lightBlack : COLORS.white },
				]}
			>
				<View style={styles.icon}>{Icon ? <Icon /> : null}</View>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default SettingsItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: "rgba(113, 113, 113, 0.3)",
		paddingVertical: 12,
		backgroundColor: "#131E3D",
	},

	text: {
		marginLeft: 10,
		color: COLORS.defaultBlack,
		fontSize: 16,
	},

	icon: {
		width: 30,
	},
});
