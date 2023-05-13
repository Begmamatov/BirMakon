import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { Alert, ScrollView, View } from "react-native";
import MapView from "react-native-maps";
import QuestionBox from "../questions/components/QuestionBox";
import InfoBoxes from "./components/InfoBoxes";
import { styles } from "./style";
import requests from "@novomarkt/api/requests";

const ContactsView = () => {
	return (
		<ScrollView style={styles.container}>
			<BackHeader name={"Контакты"} style={styles.header} />
			<Text style={styles.headerText}>Контакты</Text>
			<MapView
				style={styles.map}
				showsUserLocation={true}
				followsUserLocation={true}
			/>
			<View style={styles.boxes}>
				<InfoBoxes title={STRINGS.phoneNumber} text={"+998 90-101-70-46"} />
				<InfoBoxes
					title={STRINGS.lawAddres}
					text={"Самарқанд вилояти Ургут тумани, Ургут шаҳри, Навои шоҳ кўчаси"}
				/>
				<InfoBoxes title={STRINGS.email} text={"info@birmakon.uz"} />
				<InfoBoxes
					title={"Реквизиты"}
					text={`Р/счёт: 2020 8000 7053 8369 4001 Наим-е банка: ЧАБ «Трастбанк» МФО: 01097 ИНН: 308452594`}
				/>
			</View>
			<QuestionBox
				title={"Отправьте нам сообщение"}
				button={"Отправить сообщение"}
			/>
		</ScrollView>
	);
};

export default ContactsView;
