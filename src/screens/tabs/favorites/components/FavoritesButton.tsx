import Text from "@novomarkt/components/general/Text";
import { COLORS, GRADIENT_COLORS } from "@novomarkt/constants/colors";
import React, { ReactElement } from "react";
import {
	ActivityIndicator,
	GestureResponderEvent,
	StyleProp,
	StyleSheet,
	TextStyle,
	TouchableWithoutFeedback,
	View,
	ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export interface DefaultButtonProps {
	text?: string;
	onPress?: (event: GestureResponderEvent) => void;
	containerStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	secondary?: boolean;
	children?: ReactElement | null;
	loading?: boolean;
	active?: boolean;
}

const FavoritesButton = ({
	onPress,
	text,
	children,
	secondary,
	containerStyle = {},
	textStyle,
	loading,
}: DefaultButtonProps) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 3, y: 0 }}
				colors={GRADIENT_COLORS}
				style={[styles.container, containerStyle]}
			>
				<View style={[styles.content, secondary && styles.inactiveContainer]}>
					{loading ? (
						//TODO Check color
						<ActivityIndicator
							color={secondary ? COLORS.blue : COLORS.white}
							size={"small"}
						/>
					) : (
						children || (
							<Text
								style={[
									styles.text,
									textStyle,
									secondary && styles.secondaryText,
								]}
							>
								{text}
							</Text>
						)
					)}
				</View>
			</LinearGradient>
		</TouchableWithoutFeedback>
	);
};

export default FavoritesButton;

const styles = StyleSheet.create({
	content: {
		padding: 12,
		justifyContent: "center",
		alignItems: "center",
	},
	inactiveContainer: {
		backgroundColor: "white",
		flex: 1,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		flexDirection: "row",
		padding: 1,
		justifyContent: "center",
		marginHorizontal: 25,
		marginTop: 10,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4.84,

		elevation: 5,
	},
	text: {
		color: COLORS.white,
		fontSize: 20,
	},

	secondaryText: {
		color: COLORS.defaultBlack,
	},
});
