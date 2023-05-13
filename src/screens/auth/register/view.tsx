import { FbIcon, GmailIcon, OkIcon } from "@novomarkt/assets/icons/icons";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import DefaultInputEye from "@novomarkt/components/general/DefaultInputEye";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import {
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import Text from "../../../components/general/Text";
import useRegisterHook from "./hooks";
import { styles } from "./style";

const RegisterView = () => {
	let {
		loading,
		onStateChange,
		onRegister,
		state,
		errTxt,
		setConfirmPassword,
		confirmPassword,
	} = useRegisterHook();
	console.log(JSON.stringify(state, null, 2));

	return (
		<View style={{ flex: 1 }}>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 20}
			>
				<View style={styles.container}>
					<Image
						style={{
							width: 320,
							height: 60,
							marginHorizontal: 30,
							marginBottom: 50,
							justifyContent: "center",
						}}
						source={require("../../../assets/images/Logo.png")}
					/>
					<View style={[styles.inputBox, styles.elevation]}>
						<DefaultInput
							containerStyle={styles.input}
							title={STRINGS.name}
							placeholder={STRINGS.yourName}
							onChange={onStateChange("name")}
							value={state.name}
						/>
						<DefaultInput
							containerStyle={styles.input}
							title={STRINGS.number}
							placeholder={STRINGS.yourNumber}
							onChange={onStateChange("phone")}
							value={state.phone}
							keyboardType="phone-pad"
							onFocus={() => {
								if (state.phone === "") {
									onStateChange("phone")("+998");
								}
							}}
						/>
						<DefaultInputEye
							containerStyle={styles.input}
							title={STRINGS.password}
							placeholder={STRINGS.yourPassword}
							onChange={onStateChange("password")}
							value={state.password}
							secureText={false}
						/>
						<DefaultInputEye
							containerStyle={styles.input}
							title={STRINGS.confirmPassword}
							placeholder={STRINGS.yourConfirmPassword}
							onChange={setConfirmPassword}
							value={confirmPassword}
							secureText={false}
						/>

						<Text style={styles.errText}>{errTxt}</Text>
						<DefaultButton
							text={STRINGS.continue}
							textStyle={styles.text}
							containerStyle={styles.button}
							//@ts-ignore
							onPress={() => onRegister()}
							loading={loading}
						/>
					</View>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

export default RegisterView;
