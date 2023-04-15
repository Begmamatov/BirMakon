import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { ScrollView } from "react-native";
import HandlingTextBox from "./components/HandlingTextBox";
import QuestionBox from "./components/QuestionBox";
import { styles } from "./style";

const QuestionsView = () => {
	return (
		<>
			<ScrollView style={styles.container}>
				<BackHeader name={STRINGS.faq} style={styles.header} />
				<Text style={styles.headerTxt}>Часто задаемевые вопросы</Text>
				<HandlingTextBox />
				<QuestionBox title={"У вас есть вопросы?"} button={"Отправить отзыв"} />
			</ScrollView>
		</>
	);
};

export default QuestionsView;
