// import { useRoute } from "@react-navigation/native";
// import React, { useEffect, useState } from "react";
// import {
// 	FlatList,
// 	StyleSheet,
// 	TextInput,
// 	TouchableOpacity,
// 	View,
// } from "react-native";
// import requests from "@novomarkt/api/requests";
// import { SaveIconMessage, TelegramIcon } from "@novomarkt/assets/icons/icons";
// import { COLORS } from "@novomarkt/constants/colors";
// import { STRINGS } from "@novomarkt/locales/strings";
// import ChatItemMe from "../components/ChatItemMe";

// import BackHeader from "@novomarkt/components/navigation/BackHeader";

// const ChatProducts = () => {
// 	const route = useRoute<any>();

// 	const { idProduct } = route?.params;

// 	const [sendingMsg, setSendingMsg] = useState("");
// 	const [messages, setMessages] = useState();
// 	console.log("sendingMsg", sendingMsg);

// 	const file = "";
// 	const [detailIdValue, setDetailIdValue] = useState<any>([]);
// 	console.log(JSON.stringify(detailIdValue, null, 2));

// 	const getDetailId = async () => {
// 		try {
// 			let res = await requests.products.getProductDetailID(idProduct);
// 			setDetailIdValue(res.data.data);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	const sendMessage = async () => {
// 		try {
// 			if (!!sendingMsg) {
// 				let res = await requests.chat.sendShopMessege(
// 					sendingMsg,
// 					file,
// 					idProduct
// 				);
// 				let data = await res.data.data;
// 				setMessages(data);
// 				setSendingMsg("");
// 			}
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// 	useEffect(() => {
// 		getDetailId();
// 	}, [idProduct]);

// 	return (
// 		<View style={styles.container}>
// 			<BackHeader name={detailIdValue?.shop?.name} />

// 			<FlatList
// 				style={styles.chat}
// 				data={messages}
// 				inverted
// 				ListHeaderComponent={<></>}
// 				showsVerticalScrollIndicator={false}
// 				renderItem={({ item, index }) =>
// 					item ? <ChatItemMe key={index} item={item} /> : null
// 				}
// 				keyExtractor={(item) => item.id}
// 			/>

// 			<View style={styles.send_cart}>
// 				<View style={styles.send_cart_item}>
// 					<SaveIconMessage fill={"#C8C8C8"} />
// 					<TextInput
// 						placeholder={STRINGS.yourMessage}
// 						style={styles.input}
// 						placeholderTextColor={"#C8C8C8"}
// 						onChangeText={(text) => setSendingMsg(text)}
// 						value={sendingMsg}
// 					/>
// 					<TouchableOpacity onPress={sendMessage}>
// 						<TelegramIcon
// 							hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
// 							fill={COLORS.gray}
// 							style={styles.tgicon}
// 						/>
// 					</TouchableOpacity>
// 				</View>
// 			</View>
// 		</View>
// 	);
// };

// export default ChatProducts;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: COLORS.white,
// 		paddingBottom: 80,
// 	},
// 	data_title: {
// 		textAlign: "center",
// 	},
// 	chat: {
// 		marginHorizontal: 15,
// 		position: "relative",
// 		marginTop: 20,
// 	},
// 	send_cart: {
// 		position: "absolute",
// 		height: 64,
// 		backgroundColor: COLORS.white,
// 		width: "100%",
// 		bottom: 10,
// 		paddingHorizontal: 20,
// 	},
// 	send_cart_item: {
// 		width: "100%",
// 		height: "100%",
// 		borderRadius: 10,
// 		borderColor: COLORS.white,
// 		alignItems: "center",
// 		flexDirection: "row",
// 		backgroundColor: COLORS.white,
// 		elevation: 5,
// 		shadowOpacity: 0.1,
// 		shadowRadius: 5,
// 		shadowOffset: {
// 			width: 0,
// 			height: 0,
// 		},
// 		paddingHorizontal: 19,
// 	},

// 	input: {
// 		width: "80%",
// 		marginLeft: 5,
// 		color: COLORS.defaultBlack,
// 	},

// 	tgicon: {
// 		marginLeft: 10,
// 		alignSelf: "center",
// 	},

// 	myMsg: {
// 		color: COLORS.white,
// 		backgroundColor: COLORS.lighBlue,
// 		padding: 10,
// 		borderTopLeftRadius: 8,
// 		borderTopRightRadius: 8,
// 		borderBottomLeftRadius: 8,
// 	},

// 	myBox: {
// 		marginTop: 20,
// 		alignItems: "flex-end",
// 		marginRight: 10,
// 	},
// });
import requests from "@novomarkt/api/requests";
import { SaveIconMessage, TelegramIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import { styles } from "../style";

const ChatProducts = () => {
	const [sendingMsg, setSendingMsg] = useState("");
	const [messages, setMessages] = useState();

	const route = useRoute<any>();
	const { idProduct, idShop } = route?.params;

	const file = "";

	const sendMessage = async () => {
		try {
			if (!!sendingMsg) {
				let res = await requests.chat.sendShopMessege(
					sendingMsg,
					file,
					idProduct
				);
				let data = await res.data.data;
				setMessages(data);
				setSendingMsg("");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<View style={styles.top}>
					<Text style={styles.topText}>Чат поддержки</Text>
				</View>
				<View style={styles.inner}>
					<FlatList
						data={messages}
						inverted
						showsVerticalScrollIndicator={false}
						renderItem={({ item, index }) =>
							item ? (
								<View key={index} style={[styles.myBox, {}]}>
									<Text style={styles.myMsg}>{item.message}</Text>
								</View>
							) : (
								<View style={styles.innerBox}>
									<Text style={styles.innerText}>{STRINGS.comment}</Text>
								</View>
							)
						}
					/>
				</View>
				<View style={styles.texting}>
					<View style={styles.textingBox}>
						<SaveIconMessage fill={COLORS.gray} />
						<TextInput
							placeholder={STRINGS.yourMessage}
							value={sendingMsg}
							style={styles.input}
							placeholderTextColor={COLORS.gray}
							onChangeText={(text) => setSendingMsg(text)}
						/>
					</View>
					<TelegramIcon
						hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
						fill={COLORS.gray}
						style={styles.tgicon}
						onPress={sendMessage}
					/>
				</View>
			</View>
		</View>
	);
};

export default ChatProducts;
