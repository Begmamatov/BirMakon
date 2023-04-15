import requests from "@novomarkt/api/requests";
import { CardItem } from "@novomarkt/api/types";
import { TrashIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import React, { useEffect, useState } from "react";
import {
	Alert,
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { useDispatch } from "react-redux";

let humoCard = "https://kapital24.uz/upload/iblock/512/KB_humo.jpg";

export const CardBox = () => {
	const [card, setCard] = useState<CardItem[]>();
	const [isModalVisible, setModalVisible] = useState(false);
	const [removeCard, setRemoveCard] = useState<CardItem[]>();
	const dispatch = useDispatch();

	const effect = async () => {
		try {
			const res = await requests.profile.getCards();
			setCard(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, []);

	let onDeleteCard = (id: number) => {
		Alert.alert("Вы действительно хотите удалить карту?", "", [
			{
				text: "Нет",
				style: "cancel",
			},
			{
				text: "Да",
				onPress: async () => {
					dispatch(toggleLoading());
					try {
						const res = await requests.profile.removeCard({
							card_id: id,
						});
						effect();
					} catch (error) {
						console.log(error);
					} finally {
						dispatch(toggleLoading());
					}
				},
			},
		]);
	};

	return (
		<View style={{ flexDirection: "row" }}>
			{card?.map((e) => {
				let i = e.card_expire.substring(0, 2);
				let a = e.card_expire.substring(2, 4);
				let expiryDate = i + "/" + a;
				return (
					<ImageBackground
						source={{ uri: humoCard }}
						style={styles.container}
						imageStyle={{
							width: "100%",
							height: "100%",
							borderRadius: 10,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Text style={styles.cardNumber}>{e?.card_number}</Text>
							<TouchableOpacity
								hitSlop={{
									left: 20,
									right: 20,
									top: 20,
									bottom: 20,
								}}
								onPress={() => onDeleteCard(e.id)}
							>
								<TrashIcon
									fill={COLORS.white}
									style={{ marginHorizontal: 10 }}
								/>
							</TouchableOpacity>
						</View>
						<Text style={styles.cardExpiry}>{expiryDate}</Text>
						<Text style={styles.cardName}>{e?.card_phone_number}</Text>
					</ImageBackground>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginRight: 15,
		width: WINDOW_WIDTH - 100,
		borderRadius: 10,
		justifyContent: "center",
	},

	cardNumber: {
		color: COLORS.white,
		marginHorizontal: 10,
		fontSize: 18,
	},

	cardExpiry: {
		alignSelf: "flex-start",
		marginVertical: 15,
		marginHorizontal: 10,
		color: COLORS.white,
	},

	cardName: {
		fontSize: 18,
		color: COLORS.white,
		marginHorizontal: 10,
	},

	modal: {
		marginHorizontal: 20,
	},

	modalView: {
		padding: 10,
		borderRadius: 10,
		backgroundColor: COLORS.white,
	},
});
