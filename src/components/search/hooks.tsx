import requests from "@novomarkt/api/requests";
import { ProductItemResponse } from "@novomarkt/api/types";
import { selectQuery } from "@novomarkt/store/slices/appSettings";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import _, { debounce } from "lodash";

export const useSearchHook = () => {
	let [result, setResult] = useState<ProductItemResponse[]>([]);
	const [state, setState] = useState({
		text: "",
	});
	// const query = useSelector(selectQuery);

	const searchWithQuery = async () => {
		try {
			let res = await requests.products.searchProducts(state.text);
			setResult(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	let onStateChange = (key: string) => (value: string) => {
		setState({ ...state, [key]: value });
	};

	useEffect(() => {
		searchWithQuery();
		debounce(() => searchWithQuery(), 500);
	}, []);

	return { result, onStateChange };
};
