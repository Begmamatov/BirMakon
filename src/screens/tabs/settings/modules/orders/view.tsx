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
	// console.log(JSON.stringify(orders, null, 2));

	return (
		<View style={styles.container}>
			<BackHeader name={STRINGS.myOrders} style={styles.header} />
			<StatusBar orders={orders} />
			<FlatList
				data={orders}
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
				renderItem={(props) => <OrderItem {...props} />}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item: any) => item.id}
			/>
		</View>
	);
};
export default OrderView;
