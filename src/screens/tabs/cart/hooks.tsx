import requests from "@novomarkt/api/requests";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import { loadCart } from "@novomarkt/store/slices/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useCartScreenHooks = () => {
	const dispatch = useDispatch();
	const onClearCart = async () => {
		try {
			dispatch(toggleLoading());
			let res = await requests.products.clearCart();
			let cartGet = await requests.products.getCarts();
			dispatch(loadCart(cartGet.data.data));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(toggleLoading());
		}
	};

	return { onClearCart };
};
