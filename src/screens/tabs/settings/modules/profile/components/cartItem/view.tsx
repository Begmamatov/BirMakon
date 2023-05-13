import React, { useEffect, useMemo, useState } from "react";
import {
	Alert,
	FlatList,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	TextInput,
	Touchable,
	TouchableOpacity,
	View,
} from "react-native";
import CheckerCC from "card-validator";
import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import CreditCard from "react-native-credit-card-v2";
import { PlusIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import Modal from "react-native-modal";
import SelectableCarts from "../selectable-card/SelectableCarts";
import { STRINGS } from "@novomarkt/locales/strings";
import { applyMiddleware } from "redux";
import requests from "@novomarkt/api/requests";
import { CardTypeItem } from "@novomarkt/api/types";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import { CardBox } from "../cardBox/cardBox";
import DefaultInput from "@novomarkt/components/general/DefaultInput";

export const Assets = {
	card: {
		mastercard: "https://kapital24.uz/upload/iblock/a3e/Mastercard_Gold.png",
		visa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/1048px-Old_Visa_Logo.svg.png",
		unionpay:
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.ipakyulibank.uz%2Fnews%2F2021-10-06-money-transfers-from-the-russian-federation-to-uzbekistan-via-unionpay-debit-cards&psig=AOvVaw3GhL-z9imhVUxp-qrwQxXY&ust=1644165293606000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMD5qpb_6PUCFQAAAAAdAAAAABAD",
	},
};

let cardImages = [
	{
		uri: "https://anhor.uz/wp-content/uploads/2020/11/8579.jpg",
	},
	{
		uri: "https://kapital24.uz/upload/iblock/512/KB_humo.jpg",
	},
	{
		uri: "https://www.visa.co.jp/dam/VCOM/blogs/visa-blue-gradient-800x450.jpg",
	},
];

type CardType = keyof typeof Assets["card"];

export type CardDetailType = {
	cvv?: number | string;
	cardNumber?: number | string;
	expiryMonth?: number | string;
	expiryYear?: number | string;
	expiry?: string;
	phone?: string;
};

type ExampleProps = {
	cardDetail?: CardDetailType;
	setCartDanle?: any;
};

const CartSelectItem = (props: ExampleProps) => {
	const [cardTypes, setCardTypes] = useState<CardTypeItem[]>([]);
	const [isModalVisible, setModalVisible] = useState(false);
	const [isModalVisible2, setModalVisible2] = useState(false);
	const [cardDetail, setCardDetail] = useState<CardDetailType>();
	const [activeIndex, setActiveIndex] = useState(0);
	const [loading, setLoading] = useState(false);
	const [cartDanleItem, setCartDanleItem] = useState<any>();
	const [smsCode, setSmsCode] = useState("");

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	const cartDanleHandler = () => {
		setModalVisible2(!isModalVisible2);
	};

	const effect = async () => {
		try {
			const res = await requests.profile.getCardTypes();
			setCardTypes(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, []);

	const cardType: CardType = useMemo(() => {
		if (cardDetail?.cardNumber) {
			const numberValidation = CheckerCC.number(cardDetail?.cardNumber);
			return numberValidation.card?.type;
		}
		return "" as any;
	}, [cardDetail]);

	let cartDataSroke: any = cardDetail?.expiry;
	if (cartDataSroke?.length >= 2) {
		cartDataSroke =
			cartDataSroke.substr(0, 2) + "/" + (cartDataSroke.substr(2, 4) + "");
	}

	const cartDanleData = {
		card_number: cardDetail?.cardNumber as string,
		card_expire: cartDataSroke as string,
		card_phone_number: cardDetail?.phone as string,
	};
	console.log(JSON.stringify(cartDanleData, null, 2));

	const onSubmit = async () => {
		try {
			setLoading(true);
			const res = await requests.profile.addCard({
				card_number: cardDetail?.cardNumber as string,
				card_expire: cartDataSroke as string,
				card_phone_number: cardDetail?.phone as string,
			});

			setCartDanleItem(res.data.data);
			if (!!res.data) {
				cartDanleHandler();
			}

			setModalVisible(false);
		} catch (error) {
			Alert.alert("ОШИБКА", `${error}`);
		} finally {
			setLoading(false);
		}
	};
	const [codeTrue, setCodeTrue] = useState();

	const codeGet = async () => {
		try {
			let res = await requests.profile.codeCart({
				card_id: cartDanleItem.id,
				code: smsCode,
			});
			setCodeTrue(res.data);
			cartDanleHandler();
		} catch (error) {}
	};

	return (
		<View
			style={{
				width: "100%",
			}}
		>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={80}
			>
				<View style={{ width: "100%" }}>
					<CardBox codeTrue={codeTrue} setCartDanle={props.setCartDanle} />
				</View>
				<TouchableOpacity style={styles.border} onPress={toggleModal}>
					<View style={styles.round}>
						<PlusIcon stroke={COLORS.red} fill={COLORS.red} />
					</View>
					<Text style={styles.blueText}>Добавить карту</Text>
				</TouchableOpacity>

				<Modal
					style={styles.modal}
					isVisible={isModalVisible}
					onSwipeComplete={toggleModal}
					onBackdropPress={toggleModal}
				>
					<View style={styles.modalView}>
						<CreditCard
							clickable={false}
							bgColor={COLORS.lightGray}
							mainContainerStyle={{
								borderRadius: 10,
								shadowColor: "#000",
								shadowOffset: {
									width: 0,
									height: 4,
								},
								shadowOpacity: 0.3,
								shadowRadius: 4.65,

								elevation: 8,
							}}
							frontImageStyle={{
								borderRadius: 10,
							}}
							frontImageBgStyle={{
								borderRadius: 10,
							}}
							backImageStyle={{
								borderRadius: 10,
							}}
							backImageBgStyle={{
								borderRadius: 10,
							}}
							number={cardDetail?.cardNumber}
							type={cardType}
							expiry={cardDetail?.expiry}
							showExpiryAfterLabel={true}
							imageFront={cardImages[activeIndex]}
						/>
						<SelectableCarts
							cardTypes={cardTypes}
							activeIndex={activeIndex}
							setActiveIndex={setActiveIndex}
						/>
						<View style={styles.modalItems}>
							<Text style={styles.modalTitle}>{STRINGS.cardNumber}</Text>
							<TextInput
								value={cardDetail?.cardNumber as string}
								onChangeText={(e) => {
									setCardDetail({ ...cardDetail, cardNumber: e });
								}}
								placeholder="Card Number"
								style={styles.modalInput}
								keyboardType="number-pad"
							/>
							<Text style={styles.modalTitle}>{STRINGS.ExpirationMonth}</Text>
							<TextInput
								value={cardDetail?.expiry as string}
								onChangeText={(e) => {
									setCardDetail({ ...cardDetail, expiry: e });
								}}
								placeholder="Expiration month"
								style={styles.modalInput}
								keyboardType="number-pad"
							/>
							<Text style={styles.modalTitle}>{STRINGS.phone}</Text>
							<TextInput
								value={cardDetail?.phone as string}
								onChangeText={(e) => {
									setCardDetail({ ...cardDetail, phone: e });
								}}
								placeholder={"Номер телефона"}
								style={styles.modalInput}
								keyboardType="number-pad"
							/>
							<DefaultButton
								onPress={onSubmit}
								text={STRINGS.save}
								loading={loading}
							/>
						</View>
					</View>
				</Modal>
				<Modal
					style={styles.modal}
					isVisible={isModalVisible2}
					onSwipeComplete={cartDanleHandler}
					onBackdropPress={cartDanleHandler}
				>
					<View style={styles.modalView}>
						{cartDanleItem ? (
							<>
								<DefaultInput onChange={setSmsCode} value={smsCode} />
								<DefaultButton text="Добавить карту" onPress={codeGet} />
							</>
						) : null}
					</View>
				</Modal>
			</KeyboardAvoidingView>
		</View>
	);
};

export default CartSelectItem;

const styles = StyleSheet.create({
	cardBox: {
		width: WINDOW_WIDTH - 80,
		borderWidth: 1,
		marginRight: 15,
	},

	cardBoxImg: {
		width: "100%",
		height: "100%",
	},

	border: {
		borderRadius: 8,
		borderWidth: 2,
		borderColor: COLORS.red,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 119,
	},

	blueText: {
		color: COLORS.red,
		fontSize: 14,
		marginTop: 10,
	},

	round: {
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 2,
		borderRadius: 30,
		borderColor: COLORS.red,
	},

	modal: {
		marginHorizontal: 10,
	},

	modalView: {
		padding: 20,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.white,
	},

	modalItems: {
		margin: 0,
		alignSelf: "flex-start",
		width: "100%",
	},

	modalTitle: {
		marginVertical: 7,
		color: COLORS.defaultBlack,
	},

	modalInput: {
		borderRadius: 10,
		paddingVertical: 13,
		backgroundColor: COLORS.lightGray,
		paddingLeft: 10,
		paddingRight: 5,
	},
});

{
	/*  */
}
