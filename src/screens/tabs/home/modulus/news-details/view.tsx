import { Image, ScrollView, View } from "react-native";
import React from "react";
import Text from "@novomarkt/components/general/Text";
import { useNewsPageHooks } from "./hooks";
import { NewsItemResponse } from "@novomarkt/api/types";
import { appendUrl } from "@novomarkt/api/requests";
import { styles } from "./styles";
import DefaultHeader from "@novomarkt/screens/tabs/favorites/components/DefaultHeader";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";

const NewsDetailsView = ({
	date,
	description_mini,
	id,
	name,
	photo,
	views,
}: NewsItemResponse) => {
	let { news, item } = useNewsPageHooks();

	return (
		<View style={styles.container}>
			<BackHeader name={STRINGS.back} style={styles.header} />
			<Image source={{ uri: appendUrl(item.photo) }} style={styles.image} />
			<Text style={styles.name}>{item.name}</Text>
			<ScrollView showsVerticalScrollIndicator={true}>
				<Text style={styles.description}>{item.description_mini}</Text>
			</ScrollView>
		</View>
	);
};

export default NewsDetailsView;
