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
}

const SettingsItem = ({ icon: Icon, text, onPress }: SettingsItemProps) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.icon}>{Icon && <Icon />}</View>
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
		borderBottomColor: COLORS.lightGray,
		paddingVertical: 10,
	},

	text: {
		marginLeft: 10,
		color: COLORS.defaultBlack,
		fontSize: 16,
	},

	icon: {
		width: 30
	}
});
