import { COLORS } from "@novomarkt/constants/colors";
import React from "react";
import {
	StyleSheet,
	View,
	Text,
	ViewStyle,
	StyleProp,
	TouchableOpacity,
	GestureResponderEvent,
	ScrollView,
	Image,
} from "react-native";

export interface BlueButtonProps {
	onPress?: (event: GestureResponderEvent) => void;
}

const Mypayments = ({ onPress }: BlueButtonProps) => {
	return (
		<View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.container}>
					<View style={styles.title}>
						<Text style={styles.titleText}>ID заказа</Text>
						<Text style={styles.titleText}>Дата платежа</Text>
						<Text style={styles.titleText}>Сумма заказа</Text>
						<Text style={styles.titleText}> Способ оплаты</Text>
						<Text style={styles.titleText}>Статус платежа</Text>
					</View>
					<View style={styles.sectionView}>
						<View style={styles.row}>
							<Text style={styles.text1}> №45</Text>
							<Text style={styles.text2}>23.09.21</Text>
							<Text style={styles.text3}>2000 Сум</Text>
							<View
								style={{
									marginHorizontal: 60,
									paddingHorizontal: 30,
								}}
							>
								<Image
									style={{
										width: 70,
										height: 20,
										justifyContent: "center",
									}}
									source={require("../../../../../../assets/images/visa.png")}
								/>
							</View>
							<Text style={styles.text3}>Исполнен</Text>
						</View>
					</View>
					<View style={styles.sectionView}>
						<View style={styles.row}>
							<Text style={styles.text1}> №45</Text>
							<Text style={styles.text2}>23.09.21</Text>
							<Text style={styles.text3}>2000 Сум</Text>
							<View
								style={{
									marginHorizontal: 60,
									paddingHorizontal: 30,
								}}
							>
								<Image
									style={{
										width: 70,
										height: 20,
										justifyContent: "center",
									}}
									source={require("../../../../../../assets/images/visa.png")}
								/>
							</View>
							<Text style={styles.text3}>Не Исполнен</Text>
						</View>
					</View>
					<View style={styles.sectionView}>
						<View style={styles.row}>
							<Text style={styles.text1}> №45</Text>
							<Text style={styles.text2}>23.09.21</Text>
							<Text style={styles.text3}>2000 Сум</Text>
							<View
								style={{
									marginHorizontal: 60,
									paddingHorizontal: 30,
								}}
							>
								<Image
									style={{
										width: 70,
										height: 20,
										justifyContent: "center",
									}}
									source={require("../../../../../../assets/images/visa.png")}
								/>
							</View>
							<Text style={styles.text3}>Исполнен</Text>
						</View>
					</View>
					<View style={styles.sectionView}>
						<View style={styles.row}>
							<Text style={styles.text1}> №45</Text>
							<Text style={styles.text2}>23.09.21</Text>
							<Text style={styles.text3}>2000 Сум</Text>
							<View
								style={{
									marginHorizontal: 60,
									paddingHorizontal: 30,
								}}
							>
								<Image
									style={{
										width: 70,
										height: 20,
										justifyContent: "center",
									}}
									source={require("../../../../../../assets/images/visa.png")}
								/>
							</View>
							<Text style={styles.text3}>Не Исполнен</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Mypayments;
const styles = StyleSheet.create({
	container: {
		// marginHorizontal: 25,
		marginVertical: 10,
		marginLeft: 25,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		backgroundColor: "white",
	},
	title: {
		backgroundColor: COLORS.lightgray,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 15,
	},
	titleText: {
		fontSize: 18,
		fontWeight: "500",
		paddingHorizontal: 20,
	},
	sectionView: {
		flexDirection: "row",
		marginHorizontal: 10,
	},
	row: {
		paddingVertical: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	text1: {
		fontWeight: "400",
		fontSize: 16,
		paddingHorizontal: 20,
	},
	text2: {
		fontWeight: "400",
		fontSize: 16,
		paddingHorizontal: 70,
	},
	text3: {
		fontWeight: "400",
		fontSize: 16,
		paddingLeft: 30,
	},
});
