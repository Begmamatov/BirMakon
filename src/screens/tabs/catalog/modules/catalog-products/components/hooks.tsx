import requests from "@novomarkt/api/requests";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCatalogSortHook = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [products, setProducts] = useState([]);
	const [state, setState] = useState({
		sort: "",
		brand: "",
	} as any);

	const dispatch = useDispatch();

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const getSort = async () => {
		try {
			let res = await requests.sort.getSort(state);
			setProducts(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		state,
		products,
		toggleModal,
		isModalVisible,
		setState,
		getSort,
	};
};
