import { ROUTES } from "@novomarkt/constants/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProductDetailsView from "@novomarkt/screens/tabs/home/modulus/product-details/view";
import Favorite from "./controller";

let Stack = createNativeStackNavigator();

const FavoritesSettingsScrenn = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen component={Favorite} name={ROUTES.FAVORITESSETTINGS} />
			<Stack.Screen
				component={ProductDetailsView}
				name={ROUTES.PRODUCT_DETAILS}
			/>
		</Stack.Navigator>
	);
};
export default FavoritesSettingsScrenn;
