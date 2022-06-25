import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import React from "react";
import {
	StyleProp,
	StyleSheet,
	TextInput,
	TextStyle,
	View,
	ViewStyle,
} from "react-native";
import Text from "./Text";

export interface DefaultInputProps {
	title?: string;
	autoFocus?: boolean;
	placeholder?: string;
	titleStyle?: StyleProp<TextStyle>;
	containerStyle?: ViewStyle;
	inputStyle?: TextStyle;
	textContentType?:
		| "none"
		| "URL"
		| "addressCity"
		| "addressCityAndState"
		| "addressState"
		| "countryName"
		| "creditCardNumber"
		| "emailAddress"
		| "familyName"
		| "fullStreetAddress"
		| "givenName"
		| "jobTitle"
		| "location"
		| "middleName"
		| "name"
		| "namePrefix"
		| "nameSuffix"
		| "nickname"
		| "organizationName"
		| "postalCode"
		| "streetAddressLine1"
		| "streetAddressLine2"
		| "sublocality"
		| "telephoneNumber"
		| "username"
		| "password"
		| "newPassword"
		| "oneTimeCode"
		| undefined;
	secureText?: boolean | undefined;
	onChange?: (val: string) => void;
	value?: string;
	keyboardType?:
		| "default"
		| "number-pad"
		| "decimal-pad"
		| "numeric"
		| "email-address"
		| "phone-pad";
}

const DefaultInput = ({
	placeholder,
	title,
	titleStyle,
	containerStyle,
	inputStyle,
	textContentType,
	secureText,
	onChange,
	value,
	keyboardType,
	autoFocus,
}: DefaultInputProps) => {
	return (
		<View style={[styles.container, containerStyle]}>
			<Text style={[styles.title, titleStyle]}>{title}</Text>
			<TextInput
				textContentType={textContentType}
				secureTextEntry={secureText}
				style={[styles.input, inputStyle]}
				placeholder={placeholder}
				placeholderTextColor={COLORS.gray}
				onChangeText={onChange}
				value={value}
				keyboardType={keyboardType}
				autoFocus={autoFocus}
			/>
		</View>
	);
};

export default DefaultInput;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 16,
		lineHeight: 27,
	},
	input: {
		borderColor: COLORS.darkBorder,
		borderWidth: 1,
		borderRadius: 8,
		width: WINDOW_WIDTH - 80,
		fontFamily: "Montserrat-Medium",
		color: COLORS.defaultBlack,
	},
	container: {
		alignSelf: "center",
		marginBottom: 20,
	},
});
