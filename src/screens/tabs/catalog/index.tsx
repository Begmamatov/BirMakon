import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "@novomarkt/constants/routes";
import { CatalogDetailsScreen } from "./modules/catalog-details";
import CatalogView from "./view";
import { CatalogProductsScreen } from "./modules/catalog-products";
import { ProdusctDetailsScreen } from "../home/modulus/product-details";

let Stack = createNativeStackNavigator();

export default function CatalogStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name={ROUTES.CATALOG} component={CatalogView} />
			<Stack.Screen
				name={ROUTES.CATALOG_DETAILS}
				component={CatalogDetailsScreen}
			/>
			<Stack.Screen
				name={ROUTES.CATALOG_PRODUCTS}
				component={CatalogProductsScreen}
			/>
			<Stack.Screen
				name={ROUTES.PRODUCT_DETAILS}
				component={ProdusctDetailsScreen}
			/>
		</Stack.Navigator>
	);
}
