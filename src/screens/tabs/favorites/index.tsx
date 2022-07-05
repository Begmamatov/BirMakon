import { ROUTES } from "@novomarkt/constants/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProductDetailsView from "../home/modulus/product-details/view";
import Favorite from "./controller";

let Stack = createNativeStackNavigator();

const FavoritesScreen = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen component={Favorite} name={ROUTES.FAVORITES} />
			<Stack.Screen
				component={ProductDetailsView}
				name={ROUTES.PRODUCT_DETAILS}
			/>
		</Stack.Navigator>
	);
};
export default FavoritesScreen;
