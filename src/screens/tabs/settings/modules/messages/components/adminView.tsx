import requests from "@novomarkt/api/requests";
import { SaveIconMessage, TelegramIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { fill } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import { styles } from "../style";

const AdminView = () => {
	const [sendingMsg, setSendingMsg] = useState("");
	const [messages, setMessages] = useState();
	const file = "";

	const sendMessage = async () => {
		let res = await requests.chat.sendAdminMessege(sendingMsg, file);
		setMessages(res.data.data);
		setSendingMsg("");
	};

	useEffect(() => {
		sendMessage();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<View style={styles.top}>
					<Text style={styles.topText}>Чат поддержки</Text>
				</View>
				<View style={styles.inner}>
					<FlatList
						data={messages}
						renderItem={({ item, index }) => (
							<View key={index} style={styles.myBox}>
								<Text style={styles.myMsg}>{item.message}</Text>
							</View>
						)}
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

export default AdminView;
