import { LeftArrow, SearchIcon } from "@novomarkt/assets/icons/icons";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
	StyleProp,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	ViewStyle,
} from "react-native";
import { COLORS } from "../../constants/colors";
import Text from "../general/Text";

export interface BackHeaderProps {
	name?: string;
	style?: StyleProp<ViewStyle>;
	hasSearch?: boolean;
}

const BackHeader = ({
	name = STRINGS.backHeaderName,
	style,
	hasSearch,
}: BackHeaderProps) => {
	let navigation = useNavigation();
	return (
		<View>
			<TouchableOpacity
				hitSlop={{ bottom: 20, top: 20, left: 20, right: 20 }}
				onPress={() => navigation.goBack()}
				style={styles.row}
			>
				<LeftArrow style={{ width: 120, height: 120 }} />
				<Text style={styles.text}>{name}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BackHeader;

const styles = StyleSheet.create({
	text: {
		marginLeft: 10,
		fontSize: 20,
		color: COLORS.defaultBlack,
		fontFamily: "Montserrat",
		fontWeight: "600",
	},

	row: {
		flexDirection: "row",
		alignItems: "center",
	},
});
