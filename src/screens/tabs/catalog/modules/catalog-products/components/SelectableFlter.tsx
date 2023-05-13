import { BottomArrow, FilterIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import Modal from "react-native-modal";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import requests from "@novomarkt/api/requests";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import FilterSwitch from "./FilterSwitch";

const SelectableFlter = (props: any) => {
	let { id, setProducts, categoryId2, setNewValyu } = props;
	const [isModalVisible, setModalVisible] = useState(false);
	const [isModalFiler, setModalFiler] = useState(false);
	const [title, setTitle] = useState("Популярные");

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	const filterModal = () => {
		setModalFiler(!isModalFiler);
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
	const defaultPdoduct = async () => {
		let sort = "popular";
		try {
			let res = await requests.sort.getSort({ sort, id });
			setProducts(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	const [catalogType, setCatalogType] = useState<any>([]);
	const getFilterId = async () => {
		try {
			let res = await requests.filter.catalogFilter(categoryId2);
			setCatalogType(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		defaultPdoduct();
	}, [id]);
	useEffect(() => {
		getFilterId();
	}, []);

	const [filter, setFilter] = useState<any>();
	const [priceMin, setPriceMin] = useState(0);
	const [priceMax, setPriceMax] = useState(priceMin);

	const handleFilter = (id?: any, value?: any, type?: any) => {
		setFilter(({ prevState }: any) => {
			return {
				...prevState,
				[`filter[${id}]`]: id,
			};
		});
	};

	const OnChangeHandlerMine = (e: any) => {
		let newFilter = {
			...filter,
			price_min: e,
		};
		setPriceMin(e);
		setFilter(newFilter);
	};
	const OnChangeHandlerMax = (e: any) => {
		let newFilter = {
			...filter,
			price_max: e,
		};
		setPriceMax(e);
		setFilter(newFilter);
	};

	let categoryId = categoryId2;
	const subMendHandler = async () => {
		try {
			let res = await requests.filter.productFilter(
				true,
				priceMin,
				priceMax,
				categoryId
			);
			setNewValyu(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};
	const submetAndClosed = async () => {
		await subMendHandler();
	};
	let btnDisebled = true;
	if (priceMin && priceMax) {
		btnDisebled = false;
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.row} onPress={toggleModal}>
				<Text style={styles.text}>{title ? title : "Сортировка"}</Text>
				<BottomArrow fill={COLORS.red} style={{ width: 120, height: 120 }} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.row} onPress={filterModal}>
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
			<Modal
				style={styles.view}
				isVisible={isModalFiler}
				onSwipeComplete={filterModal}
				onBackdropPress={filterModal}
				swipeDirection={["up", "left", "right", "down"]}
			>
				<View style={styles.modal}>
					<DefaultInput title="От" onChange={OnChangeHandlerMine} />
					<DefaultInput title="До" onChange={OnChangeHandlerMax} />
					<FlatList
						data={catalogType}
						renderItem={({ item }) => (
							<FilterSwitch
								input={item}
								handleFilter={handleFilter}
								priceMin={priceMin}
								priceMax={priceMax}
							/>
						)}
						style={{ marginBottom: 30 }}
					/>
					<View
						style={{
							width: "100%",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<View style={{ width: "100%" }}>
							<DefaultButton
								text="Фильтр"
								onPress={() => {
									submetAndClosed(), filterModal();
								}}
								disabled={btnDisebled}
							/>
						</View>
					</View>
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
