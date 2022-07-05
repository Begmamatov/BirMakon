import requests from "@novomarkt/api/requests";
import { STRINGS } from "@novomarkt/locales/strings";
import {
	favoriteArraySelector,
	loadFavorite,
} from "@novomarkt/store/slices/favoriteSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFavoritesSortHook = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [modalText, setModalText] = useState(STRINGS.recentlyAdded);
	const dispatch = useDispatch();

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const getFavs = async () => {
		try {
			let res = await requests.favorites.getFavorites();
			dispatch(loadFavorite(res.data.data));
		} catch (error) {
			console.log(error);
		}
	};

	return {
		toggleModal,
		isModalVisible,
		modalText,
	};
};
