import requests from "@novomarkt/api/requests";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import OrderItem from "./components/OrderItem";
import StatusBar from "./components/StatusBar";
import { styles } from "./style";

const OrderView = () => {
	const [orders, setOrders] = useState<any>([]);
	const [filter, setFilter] = useState({ status: 6 });
	const [loading, setLoading] = useState(false);

	let timer = -1;
	const getOrders = async () => {
		setLoading(true);
		try {
			let res = await requests.order.getOrders(filter);
			setOrders(res.data.data);
		} catch (error) {
			console.log(error);
		} finally {
			timer = setTimeout(() => {
				setLoading(false);
			}, 1500);
		}
	};

	useEffect(() => {
		getOrders();
	}, [filter]);

	const amount = orders?.length;
	return (
		<View style={styles.container}>
			<BackHeader name={STRINGS.myOrders} style={styles.header} />
			<StatusBar orders={orders} filter={filter} setFilter={setFilter} />
			<FlatList
				data={orders}
				ListHeaderComponent={() => {
					return (
						<View style={styles.row}>
							{amount > 0 ? (
								<View>
									<Text style={styles.headerText}>Заказ №23</Text>
									<View style={styles.salesman}>
										<Text>Продавец:</Text>
										<Text>ООО "ПРАЙД"</Text>
									</View>
								</View>
							) : null}
							<Text style={styles.salesman}></Text>
						</View>
					);
				}}
				renderItem={(props) => <OrderItem {...props} />}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item: any) => item.id}
			/>
			<Spinner visible={loading} />
		</View>
	);
};
export default OrderView;
