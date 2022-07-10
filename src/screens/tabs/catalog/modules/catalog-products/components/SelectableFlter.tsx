import { BottomArrow, FilterIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import Modal from "react-native-modal";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useCatalogSortHook } from "./hooks";

const SelectableFlter = ({ id, setProducts }) => {
	const { isModalVisible, toggleModal, products, setState, getSort, state } =
		useCatalogSortHook();

	const handlePress = (sort: string) => {
		toggleModal;
		setState({ ...state, sort, id });
		getSort();
		setProducts(products);
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.row} onPress={toggleModal}>
				<Text style={styles.text}>Популярные</Text>
				<BottomArrow fill={COLORS.red} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.row}>
				<Text style={styles.text}>Фильтры</Text>
				<FilterIcon fill={COLORS.red} />
			</TouchableOpacity>
			<Modal
				style={styles.view}
				isVisible={isModalVisible}
				onSwipeComplete={toggleModal}
				onBackdropPress={toggleModal}
				swipeDirection={["up", "left", "right", "down"]}
			>
				<View style={styles.modal}>
					<TouchableOpacity onPress={() => handlePress("recently")}>
						<Text style={styles.modalText}>{STRINGS.recentlyAdded}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handlePress("new")}>
						<Text style={styles.modalText}>{STRINGS.popular}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handlePress("price_up")}>
						<Text style={styles.modalText}>{STRINGS.firstCheap}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handlePress("price_down")}>
						<Text style={styles.modalText}>{STRINGS.firsExpensive}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handlePress("popular")}>
						<Text style={styles.modalText}>{STRINGS.newAdded}</Text>
					</TouchableOpacity>
				</View>
			</Modal>
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
	view: {
		justifyContent: "flex-end",
		margin: 0,
	},

	modal: {
		padding: 20,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		backgroundColor: COLORS.white,
	},

	modalText: {
		fontSize: 16,
		marginVertical: 15,
		color: COLORS.defaultBlack,
	},

	empty: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	emptyBox: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	emptyText: {
		fontSize: 22,
	},
});
