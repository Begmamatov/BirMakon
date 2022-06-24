import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import Text from "@novomarkt/components/general/Text";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const ForgotPassView = () => {
	let navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.logoText}>Novamarkt</Text>
			<View style={styles.inputBox}>
				<View style={styles.margin}>
					<Text style={styles.header}>
						{STRINGS.problemActivation}
					</Text>
					<Text style={styles.title}>{STRINGS.forgotPassword}</Text>
					<DefaultInput
						containerStyle={styles.input}
						inputStyle={styles.inputStyle}
						placeholder={STRINGS.yourNumber}
					/>
					<DefaultButton
						textStyle={styles.buttonTxt}
						text={STRINGS.continue}
						containerStyle={styles.button}
					/>
				</View>
				<TouchableOpacity onPress={navigation.goBack}>
					<Text style={styles.flexEnd}>{STRINGS.auth}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ForgotPassView;
