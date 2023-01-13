import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { STRINGS } from "@novomarkt/locales/strings";
import DefaultHeader from "@novomarkt/screens/tabs/favorites/components/DefaultHeader";
import Products from "@novomarkt/screens/tabs/favorites/components/Products";
import SelectableItems from "@novomarkt/screens/tabs/favorites/components/SelectableItems";
import SelectableMenu from "@novomarkt/screens/tabs/favorites/components/SelectableMenu";
import React, { useEffect } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { useFavoritesSettingsHook } from "./hooks";
import { styles } from "./style";

const FavoritesSettings = () => {
	let { favorites, toggleModal, isModalVisible, modalText, getFavs } =
		useFavoritesSettingsHook();

	useEffect(() => {
		getFavs();
	}, []);

	if (favorites?.length == 0) {
		return (
			<View style={styles.empty}>
				<BackHeader name={STRINGS.favorites} style={styles.header} />
				<View style={styles.emptyBox}>
					<Text style={styles.emptyText}>{STRINGS.favoritesIsEmpty}</Text>
				</View>
			</View>
		);
	}

	return (
		<ScrollView style={styles.container}>
			<BackHeader name={STRINGS.favorites} style={styles.header} />

			<SelectableItems onPress={toggleModal} headerText={modalText} />
			{favorites?.map((item) => (
				<Products item={item} />
			))}
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
	);
};

export default FavoritesSettings;
