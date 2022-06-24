import { BottomArrow, FilterIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

const SelectableFlter = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.row}>
				<Text style={styles.text}>Популярные</Text>
				<BottomArrow fill={COLORS.red} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.row}>
				<Text style={styles.text}>Фильтры</Text>
				<FilterIcon fill={COLORS.red} />
			</TouchableOpacity>
			{/* <Modal
				style={styles.view}
				isVisible={isModalVisible}
				onSwipeComplete={toggleModal}
				onBackdropPress={toggleModal}
				swipeDirection={["up", "left", "right", "down"]}
			>
				<View style={styles.modal}>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>{STRINGS.recentlyAdded}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>{STRINGS.popular}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>{STRINGS.firstCheap}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>{STRINGS.firsExpensive}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={toggleModal}>
						<Text style={styles.modalText}>{STRINGS.newAdded}</Text>
					</TouchableOpacity>
				</View>
			</Modal> */}
		</View>
	);
};

export default SelectableFlter;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 8,
		borderBottomWidth: 1.5,
		borderColor: COLORS.lightGray,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	text: {
		color: COLORS.red,
		marginRight: 5,
		fontSize: 16,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
	},
});
