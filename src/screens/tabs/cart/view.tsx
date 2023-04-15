import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import {
	cartArraySelector,
	cartTotalSelector,
} from "@novomarkt/store/slices/cartSlice";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useSelector } from "react-redux";
import ChooseItemNum from "./components/ChooseItemNum";
import OrderDetails from "./components/OrderDetails";
import { useCartScreenHooks } from "./hooks";
import { styles } from "./style";

const CartView = () => {
	let navigation: any = useNavigation();
	let cart = useSelector(cartArraySelector);
	let cartTotal = useSelector(cartTotalSelector);
	let { onClearCart, loading } = useCartScreenHooks();

	if (cart.length <= 0) {
		return (
			<View style={styles.empty}>
				{/* <DefaultHeader name={STRINGS.cart} /> */}
				<BackHeader name={STRINGS.cart} />
				<View style={styles.emptyBox}>
					<Text style={styles.emptyText}>{STRINGS.cartIsEmpty}</Text>
				</View>
			</View>
		);
	}
	return (
		<>
			{/* <DefaultHeader name={STRINGS.cart} /> */}
			<BackHeader name={STRINGS.cart} />
			<ScrollView style={styles.container}>
				<OrderDetails total={cartTotal} />
				{cart.map((e, index) => {
					return <ChooseItemNum data={e} index={index} />;
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
			<Spinner visible={loading} textContent={""} textStyle={{}} />
		</>
	);
};

export default CartView;
