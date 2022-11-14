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
import { useRoute } from "@react-navigation/core";
import { LeftArrowIcon } from "@novomarkt/assets/icons/icons";
import { styles } from "./styles";

const all_Information = () => {
	let navigation = useNavigation();

	let router = useRoute<any>();
	console.log("====================================");
	console.log("Router Value::", JSON.stringify(router, null, 2));
	console.log("====================================");
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
				<View style={styles.scrol_container}>
					<View style={styles.title}>
						<Text style={styles.title_text}>{router.params.name}</Text>
					</View>
					<ScrollView
						style={styles.information}
						showsVerticalScrollIndicator={false}
					>
						<Text style={styles.title_text}>{router.params.description}</Text>
					</ScrollView>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default all_Information;
