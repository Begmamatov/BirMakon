import {
	BasketIcon,
	CatalogIcon,
	HeartIcon,
	HomeIcon,
	PersonIcon,
} from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { cartTotalSelector } from "@novomarkt/store/slices/cartSlice";
import { favoriteArraySelector } from "@novomarkt/store/slices/favoriteSlice";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useCallback } from "react";
import { SvgProps } from "react-native-svg";
import { useSelector } from "react-redux";
import CartStack from "./cart";
import CatalogStack from "./catalog";
import FavoritesScreen from "./favorites";
import { HomeStack } from "./home";
import { SettingsStack } from "./settings";

let Tab = createBottomTabNavigator();

const TabNavigation = () => {
	let renderTabIcon = useCallback((Component: React.FC<SvgProps>) => {
		return (props: { focused: boolean; color: string; size: number }) => {
			let { color, focused, size } = props;

			return <Component fill={color} width={size} height={size} />;
		};
	}, []);

	let total = useSelector(cartTotalSelector);
	let favs = useSelector(favoriteArraySelector);

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: COLORS.red,
				tabBarInactiveTintColor: COLORS.gray,
				tabBarHideOnKeyboard: true,
				tabBarStyle: {
					height: 70,
					paddingBottom: 15,
				},
			}}
		>
			<Tab.Screen
				name={ROUTES.HOME}
				component={HomeStack}
				options={{
					tabBarIcon: renderTabIcon(HomeIcon),
					tabBarLabel: STRINGS.home,
					tabBarLabelStyle: { fontSize: 14 },
				}}
			/>
			<Tab.Screen
				name={ROUTES.CATEGORIES}
				component={CatalogStack}
				options={{
					tabBarIcon: renderTabIcon(CatalogIcon),
					tabBarLabel: STRINGS.categories,
					tabBarLabelStyle: { fontSize: 14 },
				}}
			/>
			<Tab.Screen
				name={ROUTES.CART}
				component={CartStack}
				options={{
					tabBarIcon: renderTabIcon(BasketIcon),
					tabBarBadge: total.count == 0 ? undefined : total.count,
					tabBarLabel: STRINGS.cart,
					tabBarLabelStyle: { fontSize: 14 },
				}}
			/>
			<Tab.Screen
				name={ROUTES.FAVORITES}
				component={FavoritesScreen}
				options={{
					tabBarIcon: renderTabIcon(HeartIcon),
					tabBarLabel: STRINGS.favorites,
					tabBarBadge: favs?.length == 0 ? undefined : favs.length,
					tabBarLabelStyle: { fontSize: 14 },
				}}
			/>
			<Tab.Screen
				name={ROUTES.SETTINGSSTACK}
				component={SettingsStack}
				options={{
					tabBarIcon: renderTabIcon(PersonIcon),
					tabBarLabel: STRINGS.login,
					tabBarLabelStyle: { fontSize: 14 },
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigation;
