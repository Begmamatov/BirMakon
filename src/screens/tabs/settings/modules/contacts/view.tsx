import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { ScrollView, View } from "react-native";
import MapView from "react-native-maps";
import QuestionBox from "../questions/components/QuestionBox";
import InfoBoxes from "./components/InfoBoxes";
import { styles } from "./style";

const ContactsView = () => {
	return (
		<ScrollView style={styles.container}>
			<BackHeader name={"Контакты"} style={styles.header} />
			<Text style={styles.headerText}>Контакты</Text>
			<MapView
				style={styles.map}
				showsUserLocation={true}
				followsUserLocation={true}
				// initialRegion={{
				// 	latitude: 37.78825,
				// 	longitude: -122.4324,
				// 	latitudeDelta: 0.0922,
				// 	longitudeDelta: 0.0421,
				// }}
			/>
			<View style={styles.boxes}>
				<InfoBoxes title={STRINGS.phoneNumber} text={"+7 237 181 18"} />
				<InfoBoxes
					title={STRINGS.lawAddres}
					text={"Россия , Петербург"}
				/>
				<InfoBoxes
					title={STRINGS.forPartners}
					text={"Узнайте подробные условия для сотрудничества"}
				/>
			</View>
			<QuestionBox title={"Отправьте нам сообщение"} button={"Отправить сообщение"} />
		</ScrollView>
	);
};

export default ContactsView;
