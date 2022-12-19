import requests from "@novomarkt/api/requests";
import { OrderItemResponse } from "@novomarkt/api/types";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import FilterOrders from "./components/FilterOrder";
import OrderItem from "./components/OrderItem";
import StatusBar from "./components/StatusBar";
import { styles } from "./style";

const OrderView = () => {
	const [orders, setOrders] = useState<any>([]);
	const [date, setDate] = useState<string>("");

	const getOrders = async () => {
		try {
			let res = await requests.order.getOrders();
			setOrders(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getOrders();
	}, []);
	// console.log("===============OrderView=====================");
	// console.log(JSON.stringify(orders, null, 2));
	// console.log("==============OrderView======================");

	return (
		<View style={styles.container}>
			<BackHeader name={STRINGS.myOrders} style={styles.header} />
			<StatusBar />
			<FlatList
				data={orders}
				renderItem={(props) => <OrderItem {...props} />}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => {
					return (
						<View style={styles.row}>
							<View>
								<Text style={styles.headerText}>Заказ №23</Text>
								<View style={styles.salesman}>
									<Text>Продавец:</Text>
									<Text>ООО "ПРАЙД"</Text>
								</View>
							</View>
							<Text style={styles.salesman}></Text>
						</View>
					);
				}}
				keyExtractor={(item: any) => item.id}
			/>
		</View>
	);
};
export default OrderView;
