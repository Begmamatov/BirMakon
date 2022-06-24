import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const ScrollableMenu = () => {
	const [activeIndex, setIsActive] = useState(0);
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			style={styles.container}
			contentContainerStyle={{ alignItems: "center" }}
		>
			<TouchableOpacity
				style={
					activeIndex === 0
						? styles.activeBorder
						: styles.inactiveBorder
				}
				onPress={() => setIsActive(0)}
			>
				<Text
					style={activeIndex === 0 ? styles.active : styles.inactive}
				>
					Получить сегодня
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={
					activeIndex === 1
						? styles.activeBorder
						: styles.inactiveBorder
				}
				onPress={() => setIsActive(1)}
			>
				<Text
					style={activeIndex === 1 ? styles.active : styles.inactive}
				>
					распродажа
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={
					activeIndex === 2
						? styles.activeBorder
						: styles.inactiveBorder
				}
				onPress={() => setIsActive(2)}
			>
				<Text
					style={activeIndex === 2 ? styles.active : styles.inactive}
				>
					Свитшоты
				</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default ScrollableMenu;

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1.5,
		borderColor: COLORS.lightGray,
		height: 80,
	},

	activeBorder: {
		paddingVertical: 6,
		paddingHorizontal: 20,
		elevation: 5,
		backgroundColor: COLORS.menuBackground,
		borderRadius: 15,
		marginHorizontal: 10,
	},

	inactiveBorder: {
		paddingVertical: 6,
		paddingHorizontal: 20,
		elevation: 4,
		backgroundColor: COLORS.white,
		borderRadius: 15,
		marginHorizontal: 10,
	},

	active: {
		// alignSelf: "center",
		// position: "absolute",
		alignSelf: "center",
		fontSize: 15,
		color: COLORS.blue,
	},

	inactive: {
		alignSelf: "center",
		fontSize: 15,
		color: COLORS.defaultBlack,
	},
});
