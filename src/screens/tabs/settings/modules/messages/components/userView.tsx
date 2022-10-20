import requests from "@novomarkt/api/requests";
import { SaveIconMessage, TelegramIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useRef, useState } from "react";
import {
	FlatList,
	LayoutAnimation,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { styles } from "../style";

const userView = () => {
	const [sendingMsg, setSendingMsg] = useState("");
	const [messages, setMessages] = useState([
		{ content: STRINGS.myMessages, myMsg: false },
	]);

	const sendMessage = async () => {
		if (sendingMsg.length == 0) {
			return;
		} else {
			setSendingMsg("");
			setMessages([...messages, { content: sendingMsg, myMsg: true }]);
		}

		ref.current?.scrollToEnd();
	};

	const ref = useRef<FlatList<any>>(null);

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<View style={styles.top}>
					<Text style={styles.topText}>Чат поддержки</Text>
				</View>
				<View style={styles.inner}>
					<FlatList
						ref={ref}
						data={messages}
						renderItem={({ item, index }) =>
							item.myMsg ? (
								<View key={index} style={styles.myBox}>
									<Text style={styles.myMsg}>{item.content}</Text>
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

export default userView;
