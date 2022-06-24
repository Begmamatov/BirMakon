import requests from "@novomarkt/api/requests";
import { DeliveryMethodResponse } from "@novomarkt/api/types";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const SelectableDelivery = () => {
	const [activeIndex, setIsActive] = useState(0);
	const [delivery, setDelivery] = useState<DeliveryMethodResponse[]>();

	const effect = async () => {
		try {
			let res = await requests.products.deliveryMethods();
			setDelivery(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		effect();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.headerTxt}>{STRINGS.deliveryChoose}</Text>
			{delivery?.map((item, i) => {
				return (
					<>
						<TouchableOpacity
							style={activeIndex == i ? styles.activeBox : styles.box}
							onPress={() => setIsActive(i)}
						>
							<View
								style={activeIndex === i ? styles.activeBorder : styles.border}
							>
								<View
									style={activeIndex === i ? styles.activeDot : styles.dot}
								></View>
							</View>
							<View style={styles.textBox}>
								<Text style={styles.text}>{item.name}</Text>
								<Text style={styles.comment}>{item.description}</Text>
							</View>
						</TouchableOpacity>
					</>
				);
			})}
		</View>
	);
};

export default SelectableDelivery;

const styles = StyleSheet.create({
	deliveryContainer: {
		marginHorizontal: 20,
	},

	headerTxt: {
		fontSize: 19,
		color: COLORS.defaultBlack,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	activeBox: {
		marginVertical: 10,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: COLORS.red,
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		backgroundColor: COLORS.white,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},

	box: {
		marginVertical: 10,
		borderWidth: 1,
		borderColor: COLORS.white,
		borderRadius: 8,
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: COLORS.white,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		padding: 10,
	},

	border: {
		borderWidth: 1,
		borderColor: COLORS.whiteGray,
		width: 12,
		height: 12,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},

	activeBorder: {
		borderWidth: 1,
		borderColor: COLORS.red,
		width: 12,
		height: 12,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},

	dot: {
		width: 6,
		height: 6,
		borderRadius: 10,
		backgroundColor: COLORS.white,
	},

	activeDot: {
		width: 6,
		height: 6,
		borderRadius: 10,
		backgroundColor: COLORS.red,
	},

	textBox: {
		marginHorizontal: 10,
	},

	text: {
		fontSize: 16,
		color: COLORS.defaultBlack,
	},

	comment: {
		fontSize: 12,
	},
});
