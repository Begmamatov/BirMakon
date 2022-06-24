import requests from "@novomarkt/api/requests";
import { SendQuestionValue } from "@novomarkt/api/types";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import React, { useState } from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";

export interface QuestionBoxProps {
	title?: string;
	button?: string;
}

const QuestionBox = ({ title, button }: QuestionBoxProps) => {
	const [question, setQuestion] = useState<SendQuestionValue>();
	const onSubmit = async () => {
		try {
			let res = await requests.frequentQuestions.sendQuestion({
				name: question?.name as string,
				email: question?.email as string,
				message: question?.message as string,
			});
			console.log("success");
			setQuestion({});
		} catch (error) {
			alert("errroooor");
			console.log(error);
		}
	};
	return (
		<View style={{ backgroundColor: COLORS.white }}>
			<View style={styles.footer}>
				<Text style={styles.footerTxt}>{title}</Text>
				<TextInput
					style={styles.input}
					placeholder={"Ваше имя"}
					placeholderTextColor={COLORS.gray}
					value={question?.name}
					onChangeText={(e) => {
						setQuestion({ ...question, name: e });
					}}
				/>
				<TextInput
					placeholderTextColor={COLORS.gray}
					style={styles.input}
					keyboardType="email-address"
					placeholder={"Ваш  e-mail"}
					value={question?.email}
					onChangeText={(e) => {
						setQuestion({ ...question, email: e });
					}}
				/>
				<TextInput
					style={styles.bigger}
					placeholder={"Ваш отзыв"}
					placeholderTextColor={COLORS.gray}
					value={question?.message}
					onChangeText={(e) => {
						setQuestion({ ...question, message: e });
					}}
				/>
				<DefaultButton
					textStyle={styles.text}
					containerStyle={styles.button}
					text={button}
					onPress={onSubmit}
				/>
			</View>
		</View>
	);
};

export default QuestionBox;

const styles = StyleSheet.create({
	footer: {
		backgroundColor: COLORS.skyBlue,
		marginHorizontal: 20,
		marginVertical: 40,
		borderRadius: 10,
		padding: 15,
		paddingRight: 40,
		elevation: 8,
	},

	footerTxt: {
		color: COLORS.defaultBlack,
		fontSize: 20,
	},

	input: {
		marginVertical: 10,
		backgroundColor: COLORS.white,
		borderRadius: 8,
		paddingHorizontal: 15,
		paddingVertical: Platform.OS == "android" ? 10 : 15,
		fontStyle: "italic",
	},

	bigger: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
		paddingHorizontal: 15,
		paddingVertical: Platform.OS == "android" ? 10 : 15,
		paddingBottom: 60,
		fontStyle: "italic",
	},

	button: {
		padding: 0,
		marginTop: 20,
		marginBottom: 10,
		marginHorizontal: 0,
		paddingHorizontal: 20,
		alignSelf: "flex-start",
	},

	text: {
		fontSize: 15,
	},
});
