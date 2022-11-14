import React from "react";
import AdminView from "./components/adminView";
import ShopView from "./components/shopView";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import { styles } from "./style";
import userView from "./components/userView";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { COLORS } from "@novomarkt/constants/colors";

const Tab = createMaterialTopTabNavigator();
function MessageView() {
	return (
		<>
			<BackHeader name={STRINGS.myMessages} style={styles.header} />
			<Tab.Navigator
				screenOptions={{
					tabBarLabelStyle: { fontSize: 10 },
					tabBarActiveTintColor: COLORS.red,
					tabBarInactiveTintColor: COLORS.gray,
				}}
				style={{ backgroundColor: COLORS.white }}
			>
				<Tab.Screen name="Пользователю" component={userView} />
				<Tab.Screen name="Mагазину" component={ShopView} />
				<Tab.Screen name="Администратору" component={AdminView} />
			</Tab.Navigator>
		</>
	);
}
export default MessageView;
