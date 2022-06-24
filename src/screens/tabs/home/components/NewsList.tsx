import requests from "@novomarkt/api/requests";
import { NewsItemResponse } from "@novomarkt/api/types";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import NewsItem from "./NewsItem";

export interface NewsData {
	title?: string;
}

const NewsList = ({ title = STRINGS.news }: NewsData) => {
	const [news, setNews] = useState<NewsItemResponse[]>([]);
	let effect = async () => {
		try {
			let res = await requests.news.getNews();
			setNews(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, []);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={news}
				renderItem={(props) => <NewsItem {...props} />}
				style={styles.container}
				contentContainerStyle={styles.contentContainerStyle}
			/>
		</View>
	);
};

export default NewsList;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
		marginBottom: 20,
	},
	container: { marginBottom: 20 },
	contentContainerStyle: { paddingHorizontal: 12 },
});
