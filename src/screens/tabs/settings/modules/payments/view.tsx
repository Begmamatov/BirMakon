import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import { styles } from "./style";
import React from "react";
import { View, Text } from "react-native";
import Mypayments from "./components/mypayments";

const view = () => {
	return (
		<View style={styles.container}>
			<BackHeader name={STRINGS.Mypayments} style={styles.header} />
			<Text style={styles.containerText}>Мои платежи</Text>
			<Mypayments />
		</View>
	);
};

export default view;
