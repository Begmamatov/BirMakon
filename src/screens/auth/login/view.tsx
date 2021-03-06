import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import DefaultInputEye from "@novomarkt/components/general/DefaultInputEye";
import Text from "@novomarkt/components/general/Text";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import useLoginHook from "./hooks";
import { styles } from "./style";

const LoginView = () => {
	let {
		loading,
		onStateChange,
		onLogin,
		state,
		onLoginNavigation,
		onForgotPassNavigation,
		error,
	} = useLoginHook();

	return (
		<View style={styles.container}>
			<Text style={styles.logoText}>Novamarkt</Text>
			<View style={styles.inputBox}>
				<DefaultInput
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.number}
					placeholder={STRINGS.yourNumber}
					onChange={onStateChange("phone")}
					value={state.phone}
					keyboardType="phone-pad"
				/>
				<DefaultInputEye
					containerStyle={styles.input}
					inputStyle={styles.inputStyle}
					title={STRINGS.password}
					placeholder={STRINGS.yourPassword}
					textContentType={"password"}
					secureText={true}
					onChange={onStateChange("password")}
					value={state.password}
				/>
				{error ? (
					<Text style={styles.error}>{error}</Text>
				) : (
					<Text style={styles.error}></Text>
				)}
				<DefaultButton
					textStyle={styles.buttonTxt}
					text={STRINGS.auth}
					onPress={onLogin}
					containerStyle={styles.button}
					loading={loading}
				/>
				<View style={styles.rowText}>
					<TouchableOpacity
						onPress={onForgotPassNavigation}
						hitSlop={{ left: 20, right: 20, bottom: 20, top: 20 }}
					>
						<Text style={styles.blueText}>Забыли пароль?</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={onLoginNavigation}
						hitSlop={{ left: 20, right: 20, bottom: 20, top: 20 }}
					>
						<Text style={styles.askText}>Нет учетной записи?</Text>
					</TouchableOpacity>
				</View>
				<DefaultButton
					textStyle={styles.buttonTxt}
					text={STRINGS.registration}
					onPress={onLoginNavigation}
					containerStyle={styles.button}
				/>
			</View>
		</View>
	);
};

export default LoginView;
