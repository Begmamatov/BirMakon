import React from "react";
import { styles } from "./style";
import {
	View,
	Text,
	ScrollView,
	Touchable,
	TouchableOpacity,
} from "react-native";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import ChatPersonComponent from "./components/ChatPerson";

const ChatsView = () => {
	return (
		<View style={styles.container}>
			<BackHeader name="Чаты" style={styles.header} />
			<Text style={styles.title}>{STRINGS.chats}</Text>
			<ScrollView style={styles.itemBox}>
				<ChatPersonComponent />
				<ChatPersonComponent />
				<ChatPersonComponent />
				<ChatPersonComponent />
				<ChatPersonComponent />
				<ChatPersonComponent />
				<ChatPersonComponent />
				<ChatPersonComponent />
				<ChatPersonComponent />
				<ChatPersonComponent />
			</ScrollView>
		</View>
	);
};

export default ChatsView;
