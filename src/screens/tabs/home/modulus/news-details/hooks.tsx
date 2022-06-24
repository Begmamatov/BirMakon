import React from "react";
import requests from "@novomarkt/api/requests";
import { NewsItemResponse } from "@novomarkt/api/types";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

export const useNewsPageHooks = () => {
	const [news, setNews] = useState<NewsItemResponse[]>([]);
	let {
		params: { item, id },
	} = useRoute();

	let effect = async () => {
		try {
			let res = await requests.news.getNewsDetails(id);
			setNews(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		effect();
	}, []);

	return { news, item };
};
