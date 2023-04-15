import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import requests from "@novomarkt/api/requests";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@novomarkt/constants/routes";
import { COLORS } from "@novomarkt/constants/colors";
import DefaultButton from "@novomarkt/components/general/DefaultButton";

const OrderModal = ({ orderValyu, onClose }: any) => {
	let order_id = orderValyu?.id;
	console.log("order_id-======", order_id);

	const [octoValyu, setOctoValyu] = useState<any>();
	const orderSendHandler = async () => {
		try {
			let res = await requests.order.octoSendOrder(order_id);
			setOctoValyu(res.data);
			console.log("res ishladi-------", JSON.stringify(res.data, null, 2));
		} catch (error) {
			console.log("====================================");
			console.log(error);
			console.log("====================================");
		}
	};
	useEffect(() => {
		orderSendHandler();
	}, [order_id]);
	const navigation = useNavigation();
	console.log("octoValyu-=======", octoValyu);

	let url = octoValyu?.octo_pay_url;
	const OnsedLinkgin = () => {
		// onClose();
		navigation.navigate(ROUTES.WebView as never, url as never);
	};

	return (
		<View
			style={{
				backgroundColor: COLORS.white,
				width: "90%",
				height: 200,
				borderRadius: 10,
				paddingTop: 10,
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text
				style={{ textAlign: "center", marginBottom: 30, color: COLORS.black }}
			>
				Нажмите чтобы оплатить оплату
			</Text>
			<View style={{ width: "80%" }}>
				<DefaultButton
					text={"оплатить оплату"}
					textStyle={{ color: COLORS.white }}
					onPress={OnsedLinkgin}
				/>
			</View>
		</View>
	);
};

export default OrderModal;
