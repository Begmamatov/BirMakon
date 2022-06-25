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

	return (
		<>
			<DefaultHeader name={STRINGS.favorites} />
			<ScrollView style={styles.container}>
				{/* <SelectableMenu /> */}
				<SelectableItems onPress={toggleModal} headerText={modalText} />
				{favorites?.map((e) => {
					return (
						<Products
							brand={e.brand}
							name={e.name}
							photo={e.photo}
							price={e.price}
							id={e.id}
							price_old={e.price_old}
							category={e.category}
							views={e.views}
							rating={e.rating}
							discount={e.discount}
							isFavorite={e.isFavorite}
							credit_label={e.credit_label}
							shop={e.shop}
							getProducts={getFavs}
						/>
					);
				})}

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
