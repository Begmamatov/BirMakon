import requests from "@novomarkt/api/requests";
import { loadCart } from "@novomarkt/store/slices/cartSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const useCartScreenHooks = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const onClearCart = async () => {
		try {
			setLoading(true);
			let res = await requests.products.clearCart();
			let cartGet = await requests.products.getCarts();
			dispatch(loadCart(cartGet.data.data));
			setLoading(false);
		} catch (error) {
			console.log(error);
		} finally {
		}
	};

	return { onClearCart, loading };
};
