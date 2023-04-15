import requests, { appendUrl } from "@novomarkt/api/requests";
import {
	DeliveryMethodResponse,
	OrderSend,
	PaymentMethodResponse,
} from "@novomarkt/api/types";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { loadCart } from "@novomarkt/store/slices/cartSlice";

import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
	Alert,
	Image,
	Keyboard,
	KeyboardAvoidingView,
	LayoutAnimation,
	Modal,
	Platform,
	ScrollView,
	Switch,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { Snackbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { styles } from "./style";
import OrderModal from "./OrderModal/OrderModal";
import PickupPoint from "../components/PickupPoint";

const CheckoutView = () => {
	const route = useRoute();
	const item: any = route.params;
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const [activeIndex, setIsActive] = useState(0);

	const [delivery, setDelivery] = useState<DeliveryMethodResponse[]>();
	const [payment, setPayment] = useState<PaymentMethodResponse[]>();
	const [isEnabled, setIsEnabled] = useState(false);
	const [shouldShow, setShouldShow] = useState(true);
	const [visibleSnackbar, setVisibleSnackbar] = useState(false);
	const [openOrderModal, setOpenOrderModal] = useState(false);
	const [orderValyu, setOrderValyu] = useState();
	const [user, setUser] = useState<any>({
		phone: "",
		email: "",
		name: "",
		lastName: "",
		address: "",
	});
	const [state, setState] = useState<OrderSend>({
		address: "",
		comment: "",
		delivery_id: 1,
		email: "",
		lastName: "",
		name: "",
		payment_id: 0,
		phone: "",
		// additionalPhone: "",
		receiver: 0,
	});
	console.log(JSON.stringify(state, null, 2));

	const [isLoading, setIsLoading] = useState(false);
	const disabled = state.payment_id > 0 ? false : true;

	const toggleSwitch = () => {
		// user to state
		if (isEnabled) {
			setState({
				...state,
				name: user.name,
				lastName: user.lastName,
				email: user.email,
				phone: user.phone,
				address: user.address,
			});
		} else {
			setState({
				...state,
				name: "",
				lastName: "",
				email: "",
				phone: "",
				address: "",
			});
		}
		setIsEnabled((previousState) => !previousState);
	};

	const toggleSnackbar = () => setVisibleSnackbar(!visibleSnackbar);

	const effect = async () => {
		try {
			let res = await requests.products.deliveryMethods();
			let res2 = await requests.products.getProductPayment();
			let res3 = await requests.profile.getProfile();
			let res3Data = res3?.data?.data;
			console.log(JSON.stringify(res3, null, 2));

			setUser({
				...user,
				phone: res3Data?.phone,
				email: res3Data?.email,
				name: res3Data?.name,
				lastName: res3Data?.lastName || "",
				address: res3Data?.last_address,
			});
			setState({
				...state,
				name: res3Data?.name,
				lastName: res3Data?.lastName || "",
				email: res3Data?.email,
				phone: res3Data?.phone,
				address: res3Data?.last_address,
			});
			setDelivery(res.data.data);
			setPayment(res2.data.data as any);
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

	const sendProduct = async () => {
		if (state.address.length > 0) {
			await sendOrder();
		} else {
			return Alert.alert(`Ошибка `, "Вы не ввели свой адрес");
		}
	};
	const sendOrder = async () => {
		try {
			setIsLoading(true);
			let res = await requests.order.sendOrder(state);
			let ClearRes = await requests.products.clearCart();
			let cartGet = await requests.products.getCarts();
			dispatch(loadCart(cartGet.data.data));
			toggleSnackbar();
			setOrderValyu(res.data.data);
			setOpenOrderModal((prev) => !prev);
			setTimeout(() => {
				navigation.goBack();
			}, 1500);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};
	const onClose = () => {
		navigation.goBack();
	};

	return (
		<>
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
				<KeyboardAvoidingView
					style={styles.container}
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					keyboardVerticalOffset={Platform.OS === "ios" ? -500 : 0}
				>
					<>
						<BackHeader name={STRINGS.checkout} style={styles.backHeader} />

						<View style={styles.deliveryContainer}>
							<Text style={styles.headerTxt}>{STRINGS.deliveryChoose}</Text>
							{delivery?.map((item, index) => {
								return (
									<TouchableOpacity
										style={
											activeIndex === item.id ? styles.activeBox : styles.box
										}
										onPress={() => {
											setIsActive(item.id),
												setState({ ...state, delivery_id: item.id });
										}}
										key={index}
									>
										<View
											style={
												activeIndex === item.id
													? styles.activeBorder
													: styles.border
											}
										>
											<View
												style={
													activeIndex === item.id
														? styles.activeDot
														: styles.dot
												}
											></View>
										</View>
										<View style={styles.textBox}>
											<Text style={styles.text}>{item?.name}</Text>
											{/* {item?.description ? (
												<Text style={styles.comment}>{item?.description}</Text>
											) : null} */}
										</View>
									</TouchableOpacity>
								);
							})}
						</View>

						<View style={styles.pickupContainer}>
							<View style={styles.pickupBox}>
								<Text style={styles.boxTxt}>
									Срок доставки будет расчитан после
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
												{e.amount ? (
													<View style={styles.imageNum}>
														<Text style={styles.num}>{e?.amount}</Text>
													</View>
												) : null}
											</View>
										);
									})}
								</ScrollView>
							</View>
						</View>
						<View style={styles.recipientContainer}>
							<Text style={styles.recipHeaderTxt}>{STRINGS.recipient}</Text>
							<View style={styles.recipBox}>
								<View style={styles.switch}>
									<Text style={styles.notMe}>{STRINGS.itsNotMe}</Text>
									<Switch
										hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
										trackColor={{ false: "#767577", true: COLORS.darkBlue4 }}
										thumbColor={isEnabled ? COLORS.red : COLORS.white}
										ios_backgroundColor="#3e3e3e"
										onValueChange={toggleSwitch}
										value={isEnabled}
									/>
								</View>
								<PickupPoint
									onStateChange={onStateChange}
									typePayment={payment as any}
								/>
								<TextInput
									placeholder={STRINGS.inputName}
									style={styles.input}
									onChangeText={onStateChange("name")}
									placeholderTextColor={COLORS.gray}
									value={state.name}
								/>
								<TextInput
									placeholder={STRINGS.inputLastName}
									style={styles.input}
									onChangeText={onStateChange("lastName")}
									placeholderTextColor={COLORS.gray}
									value={state.lastName}
								/>
								<TextInput
									placeholder={STRINGS.email}
									style={styles.input}
									keyboardType={"email-address"}
									onChangeText={onStateChange("email")}
									placeholderTextColor={COLORS.gray}
									value={state.email}
								/>
								<TextInput
									placeholder={STRINGS.address}
									style={styles.input}
									keyboardType={"email-address"}
									onChangeText={onStateChange("address")}
									placeholderTextColor={COLORS.gray}
									value={state.address}
								/>
								<TextInput
									placeholder={STRINGS.phoneNumber}
									style={styles.input}
									keyboardType={"phone-pad"}
									onChangeText={onStateChange("phone")}
									placeholderTextColor={COLORS.gray}
									value={state.phone}
									onFocus={() => {
										if (state.phone === "") {
											onStateChange("phone")("+998");
										}
									}}
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
										placeholder={STRINGS.phoneNumber}
										style={styles.input}
										keyboardType={"phone-pad"}
										onChangeText={onStateChange("phone")}
										placeholderTextColor={COLORS.gray}
										value={state.phone}
										onFocus={() => {
											if (state.phone === "") {
												onStateChange("phone")("+998");
											}
										}}
									/>
								) : null}
							</View>
							<DefaultButton
								containerStyle={styles.recipButton}
								text={STRINGS.addOrder}
								onPress={sendProduct}
								loading={isLoading}
								disabled={disabled}
							/>
						</View>
						<Snackbar
							visible={visibleSnackbar}
							onDismiss={toggleSnackbar}
							duration={4000}
						>
							Заказ оформлен успешно!
						</Snackbar>
					</>
				</KeyboardAvoidingView>
			</ScrollView>
			<Modal
				animationType="slide"
				transparent={true}
				visible={openOrderModal}
				onRequestClose={() => {}}
			>
				<TouchableOpacity
					onPress={() => {
						setOpenOrderModal(false), onClose();
					}}
					style={{
						flex: 1,
						backgroundColor: "rgba(0,0,0,0.5)",
						justifyContent: "center",
						alignItems: "center",
						paddingHorizontal: 10,
					}}
				>
					<OrderModal
						orderValyu={orderValyu}
						setOpenOrderModal={setOpenOrderModal}
						onClose={onClose}
					/>
				</TouchableOpacity>
			</Modal>
		</>
	);
};

export default CheckoutView;
