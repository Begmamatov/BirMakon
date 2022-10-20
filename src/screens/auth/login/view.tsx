import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import DefaultInputEye from "@novomarkt/components/general/DefaultInputEye";
import Text from "@novomarkt/components/general/Text";
import { STRINGS } from "@novomarkt/locales/strings";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import React, { useEffect } from "react";
import { Alert, Image, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
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
		codeValue,
	} = useLoginHook();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(toggleLoading(false));
	}, []);

	return (
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
					secureText={false}
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
