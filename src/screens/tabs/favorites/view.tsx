import Text from "@novomarkt/components/general/Text";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useEffect } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import DefaultHeader from "./components/DefaultHeader";
import Products from "./components/Products";
import ProductsListFav from "./components/ProductsListFav";
import SelectableItems from "./components/SelectableItems";
import SelectableMenu from "./components/SelectableMenu";
import { useFavoritesHook } from "./hooks";
import { styles } from "./style";

[
	{
		amount: null,
		brand: {
			category: [Object],
			description: "Тестовое описание RU",
			id: 2,
			name: "Adidas",
			photo: "/uploads/brand/2/original/1648961558.png",
		},
		category: {
			description: "",
			id: 6,
			name: "Телефоны",
			photo: "/assets_files/images/no-photo.png",
		},
		category_full: "Телефоны",
		category_full_array: [[Object]],
		credit_label: "tekineeeee",
		currency: null,
		discount: 15,
		discount_big_count: null,
		discount_small_count: null,
		height: 123000,
		id: 164,
		isFavorite: true,
		length: 123000,
		name: "Nazvaniya tavar",
		photo: "/uploads/product/164/original/1657189077.jpg",
		price: 125000,
		price_old: 120000,
		price_opt: 101000,
		price_opt_small: 111000,
		rating: 0,
		shop: {
			contact_phone: "998915278547",
			contact_user: "Abdurakhmon",
			date: "2022-06-25 13:32:17",
			gallery: [Array],
			id: 15,
			name: "React Native",
			photo: "/uploads/shop/15/original/1657019804.png",
		},
		status: 1,
		unit: null,
		views: 0,
		weight: 100000,
		width: 123000,
	},
	{
		amount: null,
		brand: {
			category: [Object],
			description: "",
			id: 3,
			name: "Puma",
			photo: "/uploads/brand/3/original/1648783760.jpeg",
		},
		category: {
			description: "",
			id: 30,
			name: "Мужские",
			photo: "/assets_files/images/no-photo.png",
		},
		category_full: "Одежда/Рубашки/Мужские",
		category_full_array: [[Object], [Object], [Object]],
		credit_label: "кредит до 50 млн. сум",
		currency: null,
		discount: 5,
		discount_big_count: null,
		discount_small_count: null,
		height: 70,
		id: 205,
		isFavorite: true,
		length: 50,
		name: "Товар",
		photo: "/assets_files/images/no-photo.png",
		price: 168000,
		price_old: 200000,
		price_opt: 1000,
		price_opt_small: 1200,
		rating: 0,
		shop: {
			contact_phone: "",
			contact_user: "",
			date: "2022-06-24 11:41:44",
			gallery: [Array],
			id: 9,
			name: "test store",
			photo: "/assets_files/images/no-photo.png",
		},
		status: 1,
		unit: null,
		views: 3,
		weight: 500,
		width: 30,
	},
	{
		amount: null,
		brand: {
			category: [Object],
			description: "",
			id: 3,
			name: "Puma",
			photo: "/uploads/brand/3/original/1648783760.jpeg",
		},
		category: {
			description: "",
			id: 30,
			name: "Мужские",
			photo: "/assets_files/images/no-photo.png",
		},
		category_full: "Одежда/Рубашки/Мужские",
		category_full_array: [[Object], [Object], [Object]],
		credit_label: "кредит до 50 млн. сум",
		currency: {
			description: "",
			id: 41,
			name: "сум",
			photo: "/assets_files/images/no-photo.png",
		},
		discount: 5,
		discount_big_count: 10,
		discount_small_count: 5,
		height: 70,
		id: 226,
		isFavorite: true,
		length: 50,
		name: "Товар",
		photo: "/assets_files/images/no-photo.png",
		price: 168000,
		price_old: 200000,
		price_opt: 1000,
		price_opt_small: 1200,
		rating: 0,
		shop: {
			contact_phone: "",
			contact_user: "",
			date: "2022-06-24 11:41:44",
			gallery: [Array],
			id: 9,
			name: "test store",
			photo: "/assets_files/images/no-photo.png",
		},
		status: 1,
		unit: {
			description: "",
			id: 39,
			name: "Литр",
			photo: "/assets_files/images/no-photo.png",
		},
		views: 0,
		weight: 500,
		width: 30,
	},
];

const FavoriteView = () => {
	let { favorites, toggleModal, isModalVisible, modalText, getFavs } =
		useFavoritesHook();

	useEffect(() => {
		getFavs();
	}, []);

	if (favorites?.length == 0) {
		return (
			<View style={styles.empty}>
				<DefaultHeader name={STRINGS.favorites} />
				<View style={styles.emptyBox}>
					<Text style={styles.emptyText}>{STRINGS.favoritesIsEmpty}</Text>
				</View>
			</View>
		);
	}

	console.log("favorites", favorites);

	return (
		<>
			<DefaultHeader name={STRINGS.favorites} />
			<ScrollView style={styles.container}>
				{/* <SelectableMenu /> */}
				<SelectableItems onPress={toggleModal} headerText={modalText} />
				{favorites?.map((item) => (
					<Products item={item} />
				))}

				<Text style={styles.text}>{STRINGS.advertBlock}</Text>
				<ProductsListFav />
				<Modal
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
				</Modal>
			</ScrollView>
		</>
	);
};

export default FavoriteView;
