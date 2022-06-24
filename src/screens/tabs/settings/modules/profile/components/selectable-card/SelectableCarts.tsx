import requests from "@novomarkt/api/requests";
import { CardTypeItem } from "@novomarkt/api/types";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const SelectableCarts = ({
	activeIndex,
	setActiveIndex,
	cardTypes,
}: {
	activeIndex: number;
	setActiveIndex: (e: number) => void;
	cardTypes: CardTypeItem[];
}) => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			scrollEnabled={false}
			style={styles.container}
			contentContainerStyle={{ alignItems: "flex-start" }}
		>
			<View style={styles.row}>
				{cardTypes.map((e, i) => {
					return (
						<TouchableOpacity
							style={
								activeIndex === i
									? styles.activeBorder
									: styles.inactiveBorder
							}
							onPress={() => setActiveIndex(i)}
						>
							<Text
								style={
									activeIndex === i
										? styles.active
										: styles.inactive
								}
							>
								{e.name}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default SelectableCarts;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},

	row: {
		flexDirection: "row",
		alignSelf: "flex-start",
	},

	activeBorder: {
		paddingVertical: 6,
		paddingHorizontal: 15,
		elevation: 4,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.lighBlue,
		// backgroundColor: COLORS.menuBackground,
		borderRadius: 15,
		marginVertical: 5,
	},

	inactiveBorder: {
		paddingVertical: 6,
		paddingHorizontal: 15,
		elevation: 4,
		backgroundColor: COLORS.white,
		borderRadius: 15,
		marginVertical: 5,
	},

	active: {
		alignSelf: "center",
		fontSize: 15,
		color: COLORS.lighBlue,
	},

	inactive: {
		alignSelf: "center",
		fontSize: 15,
		color: COLORS.defaultBlack,
	},
});
