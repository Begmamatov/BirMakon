import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import {
	cartArraySelector,
	cartTotalSelector,
} from "@novomarkt/store/slices/cartSlice";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import DefaultHeader from "../favorites/components/DefaultHeader";
import ChooseItemNum from "./components/ChooseItemNum";
import LocationBox from "./components/LocationBox";
import OrderDetails from "./components/OrderDetails";
import { useCartScreenHooks } from "./hooks";
import { styles } from "./style";

const CartView = () => {
	let navigation: any = useNavigation();
	// let cart = useSelector((s) => s)?.cart.card_list ?? [];
	// console.log("size", cart.length);

	let cart = useSelector(cartArraySelector);

	let cartTotal = useSelector(cartTotalSelector);

	let { onClearCart } = useCartScreenHooks();

	if (cart.length <= 0) {
		return (
			<View style={styles.empty}>
				<DefaultHeader name={STRINGS.cart} />
				<View style={styles.emptyBox}>
					<Text style={styles.emptyText}>{STRINGS.cartIsEmpty}</Text>
				</View>
			</View>
		);
	}
	return (
		<>
			<DefaultHeader name={STRINGS.cart} />
			<ScrollView style={styles.container}>
				{/* <LocationBox /> */}
				<OrderDetails total={cartTotal} />
				{cart.map((e) => {
					return <ChooseItemNum data={e} />;
				})}

				<DefaultButton
					text={STRINGS.emptyCart}
					containerStyle={[styles.button, styles.top]}
					textStyle={styles.buttonTxt}
					secondary
					onPress={onClearCart}
				/>
				<DefaultButton
					onPress={() => navigation.navigate(ROUTES.CHECKOUT, cart)}
					text={STRINGS.continueOrdering}
					containerStyle={[styles.button, styles.bottom]}
					textStyle={styles.buttonTxt}
				/>
			</ScrollView>
		</>
	);
};

export default CartView;
