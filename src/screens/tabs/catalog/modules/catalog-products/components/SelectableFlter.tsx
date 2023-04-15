import { BottomArrow, FilterIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import Modal from "react-native-modal";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import requests from "@novomarkt/api/requests";

type Props = {
	id: number;
	setProducts: (products: any) => void;
};

const SelectableFlter = ({ id, setProducts }: Props) => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [title, setTitle] = useState("");

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const handlePress = (sort: string, sortName: string) => {
		setTitle(sortName);
		const getSorting = async () => {
			try {
				let res = await requests.sort.getSort({ sort, id });
				setProducts(res.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		getSorting();
		toggleModal();
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.row} onPress={toggleModal}>
				<Text style={styles.text}>{title ? title : "Сортировка"}</Text>
				<BottomArrow fill={COLORS.red} style={{ width: 120, height: 120 }} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.row}>
				<Text style={styles.text}>Фильтры</Text>
				<FilterIcon fill={COLORS.red} style={{ width: 120, height: 120 }} />
			</TouchableOpacity>
			<Modal
				style={styles.view}
				isVisible={isModalVisible}
				onSwipeComplete={toggleModal}
				onBackdropPress={toggleModal}
				swipeDirection={["up", "left", "right", "down"]}
			>
				<View style={styles.modal}>
					<TouchableOpacity
						onPress={() => handlePress("recently", STRINGS.recentlyAdded)}
					>
						<Text style={styles.modalText}>{STRINGS.recentlyAdded}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handlePress("popular", STRINGS.popular)}
					>
						<Text style={styles.modalText}>{STRINGS.popular}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handlePress("new", STRINGS.newAdded)}
					>
						<Text style={styles.modalText}>{STRINGS.newAdded}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handlePress("price_up", STRINGS.firsExpensive)}
					>
						<Text style={styles.modalText}>{STRINGS.firsExpensive}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handlePress("price_down", STRINGS.firstCheap)}
					>
						<Text style={styles.modalText}>{STRINGS.firstCheap}</Text>
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
