import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useState } from "react";
import {
	LayoutAnimation,
	Platform,
	StyleSheet,
	Switch,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

const RecipientBox = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const [shouldShow, setShouldShow] = useState(true);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	return (
		<View style={styles.recipientContainer}>
			<Text style={styles.recipHeaderTxt}>{STRINGS.recipient}</Text>
			<View style={styles.recipBox}>
				<View style={styles.switch}>
					<Text style={styles.notMe}>{STRINGS.itsNotMe}</Text>
					<Switch
						hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
						trackColor={{ false: "#767577", true: COLORS.red }}
						thumbColor={isEnabled ? COLORS.red : COLORS.white}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>
				<TextInput placeholder={STRINGS.inputName} style={styles.input} />
				<TextInput placeholder={STRINGS.inputLastName} style={styles.input} />
				<TextInput
					placeholder={STRINGS.email}
					style={styles.input}
					keyboardType={"email-address"}
				/>
				<TextInput
					placeholder={STRINGS.phoneNumber}
					style={styles.input}
					keyboardType={"phone-pad"}
				/>
				<TouchableOpacity
					onPress={() => {
						LayoutAnimation.configureNext(
							LayoutAnimation.Presets.easeInEaseOut
						);
						setShouldShow(!shouldShow);
					}}
				>
					<Text style={styles.underline}>+ Дополнительный номер телефона</Text>
				</TouchableOpacity>
				{!shouldShow ? (
					<TextInput
						placeholder={STRINGS.phoneNumber}
						style={styles.input}
						keyboardType={"phone-pad"}
					/>
				) : null}
			</View>
			<DefaultButton containerStyle={styles.button} text={STRINGS.addOrder} />
		</View>
	);
};

export default RecipientBox;

const styles = StyleSheet.create({
	recipientContainer: {
		marginHorizontal: 20,
	},

	recipHeaderTxt: {
		fontSize: 19,
		color: COLORS.defaultBlack,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	recipBox: {
		padding: 15,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		marginVertical: 20,
		backgroundColor: COLORS.white,
	},

	switch: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	notMe: {
		fontSize: 14,
	},

	input: {
		borderWidth: 1,
		borderRadius: 8,
		marginVertical: 10,
		paddingHorizontal: 10,
		paddingVertical: Platform.OS == "android" ? 10 : 15,
		backgroundColor: COLORS.lightGray,
		borderColor: COLORS.whiteGray,
	},

	underline: {
		marginTop: 10,
		color: COLORS.red,
	},

	button: {
		marginHorizontal: 0,
		marginBottom: 40,
	},
});
