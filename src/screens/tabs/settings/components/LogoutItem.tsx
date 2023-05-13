import { COLORS } from "@novomarkt/constants/colors";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { SvgProps } from "react-native-svg";

export interface SettingsItemProps {
	icon?: (props: SvgProps) => JSX.Element;
	text?: string;
	onPress?: any;
	focus?: boolean;
}

const LogoutItem = ({ icon: Icon, text, onPress }: SettingsItemProps) => {
	const [onActive, setOnActive] = useState(false);
	const onPresActive = () => {
		setTimeout(() => setOnActive(true), 100);
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				onPresActive(), onPress();
			}}
		>
			<View
				style={[
					styles.container,
					{ backgroundColor: onActive === true ? "#131E3D" : COLORS.white },
				]}
			>
				<View style={styles.icon}>{Icon ? <Icon /> : null}</View>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default LogoutItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
		flexDirection: "row",
		paddingHorizontal: 20,
		paddingVertical: 12,
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
