import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import {
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import Text from "../../../components/general/Text";

import useResedSmsHook from "./hooks";
import { styles } from "./styles";

const ResedSmsView = () => {
	let {
		timeLeft,
		onChangePhoneNumber,
		state,
		onStateChange,
		onVerificate,
		loading,
		resendCode,
	} = useResedSmsHook();

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 20}
		>
			<TouchableWithoutFeedback
				onPress={() => Keyboard.dismiss()}
				style={{ flex: 1 }}
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
					<View style={styles.inputBox}>
						<View style={styles.textView}>
							<Text style={styles.endText}>
								Мы отправили код на{" "}
								<Text style={styles.txt}>{state.phone}</Text> номер
							</Text>
							<TouchableOpacity onPress={onChangePhoneNumber}>
								<Text style={styles.blueEnd}>{state.phone}</Text>
							</TouchableOpacity>
						</View>
						<DefaultInput
							containerStyle={styles.input}
							title={STRINGS.code}
							placeholder={STRINGS.yourCode}
							titleStyle={styles.title}
							onChange={onStateChange}
							value={state.code}
						/>
						<Text style={styles.timer}>-{timeLeft}</Text>
						<DefaultButton
							text={STRINGS.resend}
							containerStyle={styles.btn}
							textStyle={styles.buttonTxt}
							secondary={timeLeft !== 0}
							onPress={resendCode}
						/>
						<DefaultButton
							text={STRINGS.registration}
							textStyle={styles.buttonTxt}
							containerStyle={styles.defButton}
							loading={loading}
							onPress={onVerificate}
						/>
						<TouchableOpacity onPress={onChangePhoneNumber}>
							<Text style={styles.end}>Уже зарегистрирован?</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default ResedSmsView;
