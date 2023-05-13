import React, { useEffect, useState } from "react";
import { styles } from "./style";
import { View, Text, ScrollView, FlatList } from "react-native";

import ChatPersonComponent from "./components/ChatPerson";
import requests from "@novomarkt/api/requests";

const ChatsView = () => {
	const [shopProductMessesge, setshopProductMessesge] = useState<any>();
	const getShopDetail = async () => {
		try {
			let res = await requests.chat.shopGetProduct();
			setshopProductMessesge(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getShopDetail();
	}, []);
	console.log(JSON.stringify(shopProductMessesge, null, 2));

	return (
		<View style={styles.container}>
			<FlatList
				data={shopProductMessesge}
				renderItem={() => <ChatPersonComponent />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default ChatsView;
