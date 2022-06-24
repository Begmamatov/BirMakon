import requests from "@novomarkt/api/requests";
import { QuestionsResponse } from "@novomarkt/api/types";
import { PlayIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import React, { useEffect, useState } from "react";
import {
	LayoutAnimation,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";

const HandlingTextBox = () => {
	const [shouldShow, setShouldShow] = useState(true);
	const [questions, setQuestions] = useState<QuestionsResponse[]>();
	let effect = async () => {
		try {
			let res = await requests.frequentQuestions.getQuestions();
			setQuestions(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, []);
	return (
		<View style={styles.container}>
			{questions?.map((e) => {
				return (
					<View>
						<TouchableOpacity
							style={styles.row}
							onPress={() => {
								LayoutAnimation.configureNext(
									LayoutAnimation.Presets.easeInEaseOut
								);
								setShouldShow(!shouldShow);
							}}
						>
							<PlayIcon fill={COLORS.white} />
							<Text style={styles.text}>{e.question}</Text>
						</TouchableOpacity>
						<View>
							{!shouldShow ? (
								<Text style={styles.textBox}>{e.answer}</Text>
							) : null}
						</View>
					</View>
				);
			})}
		</View>
	);
};

export default HandlingTextBox;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
		marginVertical: 10,
	},

	row: {
		flexDirection: "row",
		alignItems: "center",
	},

	text: {
		color: COLORS.defaultBlack,
		fontSize: 14,
		marginLeft: 10,
	},

	textBox: {
		padding: 20,
		marginVertical: 20,
		borderRadius: 10,
		backgroundColor: COLORS.chatColor,
	},
});
