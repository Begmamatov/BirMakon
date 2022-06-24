import requests from "@novomarkt/api/requests";
import {
	FavoriteItemResponse,
	ProductItemResponse,
} from "@novomarkt/api/types";
import { STRINGS } from "@novomarkt/locales/strings";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import {
	favoriteArraySelector,
	loadFavorite,
} from "@novomarkt/store/slices/favoriteSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFavoritesHook = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [modalText, setModalText] = useState(STRINGS.recentlyAdded);
	const dispatch = useDispatch();
	let fav = useSelector(favoriteArraySelector);

	let favoritesArray = useSelector(favoriteArraySelector);

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
		favorites: favoritesArray,
		toggleModal,
		isModalVisible,
		modalText,
		getFavs,
	};
};
