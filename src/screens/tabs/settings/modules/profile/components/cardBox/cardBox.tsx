import requests from "@novomarkt/api/requests";
import { CardItem } from "@novomarkt/api/types";
import { TrashIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import React, { useEffect, useState } from "react";
import {
	Alert,
	Image,
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";

let humoCard = "https://kapital24.uz/upload/iblock/512/KB_humo.jpg";

export const CardBox = ({ codeTrue, setCartDanle }: any) => {
	const [card, setCard] = useState<CardItem[]>();

	const effect = async () => {
		try {
			const res = await requests.profile.getCards();
			setCard(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, [codeTrue]);

	let onDeleteCard = (id: number) => {
		Alert.alert("Вы действительно хотите удалить карту?", "", [
			{
				text: "Нет",
				style: "cancel",
			},
			{
				text: "Да",
				onPress: async () => {
					try {
						const res = await requests.profile.removeCard({
							card_id: id,
						});
						effect();
					} catch (error) {
						console.log(error);
					} finally {
					}
				},
			},
		]);
	};

	const [cartActive, setCartActive] = useState(false);
	const onActiveHandler = (id: number) => {
		setCartActive((a) => !a);
		if (cartActive) {
			setCartDanle(null);
		} else {
			setCartDanle(id);
		}
	};
	return (
		<View
			style={{
				flexDirection: "column",
				width: "100%",
				marginVertical: 10,
				position: "relative",
			}}
		>
			{card?.map((e, index) => {
				let expiryDate = e.card_expire;
				return (
					<TouchableOpacity onPress={() => onActiveHandler(e.id)} key={index}>
						<ImageBackground
							source={{ uri: humoCard }}
							style={styles.container}
							imageStyle={{
								width: "100%",
								height: "110%",
								borderRadius: 10,
							}}
						>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
									margin: 5,
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
							<View
								style={{
									position: "relative",
									width: "100%",
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Text style={styles.cardName}>{e?.card_phone_number}</Text>
								<View
									style={{
										width: 20,
										height: 20,
										borderWidth: 2,
										marginRight: 10,
										borderColor: COLORS.white,
										padding: 1,
									}}
								>
									{cartActive === true ? (
										<Image
											source={require("@novomarkt/assets/images/tick-mark-icon.png")}
											style={{ width: "100%", height: "100%" }}
										/>
									) : null}
								</View>
							</View>
						</ImageBackground>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: WINDOW_WIDTH - 100,
		borderRadius: 10,
		justifyContent: "center",

		position: "relative",
		marginVertical: 10,
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
