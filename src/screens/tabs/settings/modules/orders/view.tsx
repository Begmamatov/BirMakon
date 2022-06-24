import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import { productsData } from "@novomarkt/screens/tabs/home/components/ProductsList";
import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import OrderItem from "./components/OrderItem";
import { styles } from "./style";

const OrderView = () => {
	return (
		<View style={styles.container}>
			<BackHeader name={STRINGS.myOrders} style={styles.header} />
			<FlatList
				data={productsData}
				renderItem={OrderItem}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => (
					<Text style={styles.headerText}>Заказ №23</Text>
				)}
			/>
		</View>
	);
};

export default OrderView;
