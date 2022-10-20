import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
	ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { LeftArrowIcon } from "@novomarkt/assets/icons/icons";
import { styles } from "./styles";
import Item_Info from "./components/item_Info";

const data = [
	{
		name: "Farrux",
		age: "24",
		title: "Kastyum",
	},
	{
		name: "Farrux",
		age: "24",
		title: "Kuylak",
	},
];

const all_Information = () => {
	let navigation = useNavigation();
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<TouchableOpacity style={styles.button} onPress={navigation.goBack}>
					<LeftArrowIcon
						style={styles.icon}
						hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
					/>
					<Text style={styles.text}>Характеристики</Text>
				</TouchableOpacity>
				<ScrollView style={styles.scrol_container}>
					<View style={styles.title}>
						<Text style={styles.title_text}>
							Элегантный Костюм с брюками ZARA стиль {}
						</Text>
					</View>
					<View style={styles.information}>
						{data.map((item) => {
							return <Item_Info items={item} />;
						})}
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default all_Information;
