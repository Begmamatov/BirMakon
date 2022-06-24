import { appendUrl } from "@novomarkt/api/requests";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const PickupPoint = ({ items }) => {
	let navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.headerTxt}>{STRINGS.pickupPoint}*</Text>
			<DefaultInput
				inputStyle={{ width: WINDOW_WIDTH - 40, padding: 10 }}
				containerStyle={{ marginBottom: 0 }}
				placeholder={"Tashkent, Uzbekistan"}
			/>
			<View style={styles.box}>
				<Text style={styles.boxTxt}>
					Срок доставки будет расчитан после выбора пункт самовывоза
				</Text>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
					}}
				>
					{items.map((e) => {
						return (
							<View style={styles.boxNum}>
								<Image
									source={{ uri: appendUrl(e.product.photo) }}
									style={styles.boxImage}
								/>
								{e.amount && (
									<View style={styles.imageNum}>
										<Text style={styles.num}>{e.amount}</Text>
									</View>
								)}
							</View>
						);
					})}
				</View>
			</View>
		</View>
	);
};

export default PickupPoint;

const styles = StyleSheet.create({
	pickupContainer: {
		marginVertical: 10,
		marginHorizontal: 20,
	},

	headerTxt: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		fontWeight: "700",
		letterSpacing: 0.5,
	},

	button: {
		marginVertical: 10,
		backgroundColor: COLORS.menuBackground,
		paddingVertical: 10,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},

	buttonTxt: {
		fontSize: 16,
		color: COLORS.red,
	},

	box: {
		marginVertical: 20,
		padding: 15,
		backgroundColor: COLORS.white,
		borderRadius: 8,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},

	boxTxt: {
		fontSize: 13,
		color: COLORS.defaultBlack,
	},

	boxImage: {
		borderRadius: 8,
		width: 80,
		height: 80,
		marginTop: 5,
	},

	boxNum: {
		zIndex: 2,
		margin: 5,
		flexDirection: "row",
	},

	imageNum: {
		zIndex: 1,
		marginLeft: -10,
		width: 20,
		height: 20,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.lighBlue,
	},

	num: {
		fontSize: 12,
		color: COLORS.white,
	},
});
