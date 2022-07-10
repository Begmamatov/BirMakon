import requests, { appendUrl } from "@novomarkt/api/requests";
import {
	DeliveryMethodResponse,
	OrderSend,
	PaymentMethodResponse,
} from "@novomarkt/api/types";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import { loadCart } from "@novomarkt/store/slices/cartSlice";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
	Image,
	LayoutAnimation,
	ScrollView,
	Switch,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { Snackbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import SelectableDelivery from "../components/SelectableDelivery";
import { styles } from "./style";

const CheckoutView = () => {
	const route = useRoute();
	const item: any = route.params;
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const [activeIndex, setIsActive] = useState(0);
	const [activeIndex2, setIsActive2] = useState(0);
	const [delivery, setDelivery] = useState<DeliveryMethodResponse[]>();
	const [payment, setPayment] = useState<PaymentMethodResponse[]>();
	const [isEnabled, setIsEnabled] = useState(false);
	const [shouldShow, setShouldShow] = useState(true);
	const [visibleSnackbar, setVisibleSnackbar] = useState(false);
	const [state, setState] = useState<OrderSend>({
		address: "",
		comment: "",
		delivery_id: 1,
		email: "",
		lastName: "",
		name: "",
		payment_id: 37,
		phone: "",
		receiver: 0,
	});

	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	const toggleSnackbar = () => setVisibleSnackbar(!visibleSnackbar);

	const effect = async () => {
		try {
			let res = await requests.products.deliveryMethods();
			let res2 = await requests.products.getProductPayment();
			setDelivery(res.data.data);
			setPayment(res2.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		effect();
	}, []);

	let onStateChange = (key: string) => (value: string) => {
		setState({ ...state, [key]: value });
	};

	const sendOrder = async () => {
		try {
			dispatch(toggleLoading(true));
			let res = await requests.order.sendOrder(state);
			let ClearRes = await requests.products.clearCart();
			let cartGet = await requests.products.getCarts();
			dispatch(loadCart(cartGet.data.data));
			toggleSnackbar();
			setTimeout(() => {
				navigation.goBack();
			}, 1500);
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(toggleLoading(false));
		}
	};

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<BackHeader name={STRINGS.checkout} style={styles.backHeader} />
			<View style={styles.deliveryContainer}>
				<Text style={styles.headerTxt}>{STRINGS.deliveryChoose}</Text>
				{delivery?.map((item, i) => {
					return (
						<>
							<TouchableOpacity
								style={activeIndex == i ? styles.activeBox : styles.box}
								onPress={() => {
									setIsActive(i), setState({ ...state, delivery_id: item.id });
								}}
							>
								<View
									style={
										activeIndex === i ? styles.activeBorder : styles.border
									}
								>
									<View
										style={activeIndex === i ? styles.activeDot : styles.dot}
									></View>
								</View>
								<View style={styles.textBox}>
									<Text style={styles.text}>{item?.name}</Text>
									<Text style={styles.comment}>{item?.description}</Text>
								</View>
							</TouchableOpacity>
						</>
					);
				})}
			</View>
			<View style={[styles.deliveryContainer, { marginTop: 10 }]}>
				<Text style={styles.headerTxt}>{STRINGS.Paymentexpected}</Text>
				{payment?.map((item, i) => {
					return (
						<>
							<TouchableOpacity
								style={[
									activeIndex2 == i ? styles.activeBox : styles.box,
									{ alignItems: "center" },
								]}
								onPress={() => {
									setIsActive2(i), setState({ ...state, payment_id: item.id });
								}}
							>
								<View
									style={
										activeIndex2 === i ? styles.activeBorder : styles.border
									}
								>
									<View
										style={activeIndex2 === i ? styles.activeDot : styles.dot}
									></View>
								</View>
								<View style={[styles.textBox, { justifyContent: "center" }]}>
									<Text style={[styles.text, {}]}>{item?.name}</Text>
									<Text style={[styles.comment, {}]}>{item?.description}</Text>
								</View>
							</TouchableOpacity>
						</>
					);
				})}
			</View>
			<View style={styles.pickupContainer}>
				<Text style={styles.pickupHeaderTxt}>{STRINGS.pickupPoint}*</Text>
				<DefaultInput
					inputStyle={{ width: WINDOW_WIDTH - 40, padding: 10 }}
					containerStyle={{ marginBottom: 0 }}
					placeholder={"Tashkent, Uzbekistan"}
					onChange={onStateChange("address")}
				/>
				<View style={styles.pickupBox}>
					<Text style={styles.boxTxt}>
						Срок доставки будет расчитан после выбора пункт самовывоза
					</Text>
					<ScrollView
						horizontal={true}
						style={{
							flexDirection: "row",
							flexWrap: "wrap",
						}}
					>
						{item?.map((e: any) => {
							return (
								<View style={styles.boxNum}>
									<Image
										source={{ uri: appendUrl(e.product.photo) }}
										style={styles.boxImage}
									/>
									{e.amount && (
										<View style={styles.imageNum}>
											<Text style={styles.num}>{e?.amount}</Text>
										</View>
									)}
								</View>
							);
						})}
					</ScrollView>
				</View>
			</View>
			{/* <PickupPoint items={item} /> */}
			{/* <RecipientBox /> */}
			<View style={styles.recipientContainer}>
				<Text style={styles.recipHeaderTxt}>{STRINGS.recipient}</Text>
				<View style={styles.recipBox}>
					<View style={styles.switch}>
						<Text style={styles.notMe}>{STRINGS.itsNotMe}</Text>
						<Switch
							hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
							trackColor={{ false: "#767577", true: COLORS.red }}
							thumbColor={isEnabled ? COLORS.red : COLORS.white}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
					</View>
					<TextInput
						placeholder={STRINGS.inputName}
						style={styles.input}
						onChangeText={onStateChange("name")}
						placeholderTextColor={COLORS.gray}
					/>
					<TextInput
						placeholder={STRINGS.inputLastName}
						style={styles.input}
						onChangeText={onStateChange("lastName")}
						placeholderTextColor={COLORS.gray}
					/>
					<TextInput
						placeholder={STRINGS.email}
						style={styles.input}
						keyboardType={"email-address"}
						onChangeText={onStateChange("email")}
						placeholderTextColor={COLORS.gray}
					/>
					<TextInput
						placeholder={STRINGS.phoneNumber}
						style={styles.input}
						keyboardType={"phone-pad"}
						onChangeText={onStateChange("phone")}
						placeholderTextColor={COLORS.gray}
					/>
					<TouchableOpacity
						onPress={() => {
							LayoutAnimation.configureNext(
								LayoutAnimation.Presets.easeInEaseOut
							);
							setShouldShow(!shouldShow);
						}}
					>
						<Text style={styles.underline}>
							+ Дополнительный номер телефона
						</Text>
					</TouchableOpacity>
					{!shouldShow ? (
						<TextInput
							placeholder="Comment"
							style={styles.input}
							onChangeText={onStateChange("comment")}
						/>
					) : null}
				</View>
				<DefaultButton
					containerStyle={styles.recipButton}
					text={STRINGS.addOrder}
					onPress={sendOrder}
				/>
			</View>
			<Snackbar
				visible={visibleSnackbar}
				onDismiss={toggleSnackbar}
				duration={4000}
			>
				Заказ оформлен успешно!
			</Snackbar>
		</ScrollView>
	);
};

export default CheckoutView;
