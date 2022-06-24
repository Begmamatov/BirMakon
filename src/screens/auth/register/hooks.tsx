import requests from "@novomarkt/api/requests";
import { RegisterResponseErrors } from "@novomarkt/api/types";
import { ROUTES } from "@novomarkt/constants/routes";
import { useAppDispatch } from "@novomarkt/store/hooks";
import { userLoggedIn } from "@novomarkt/store/slices/userSlice";
import { validatePhoneNumber } from "@novomarkt/utils/validation";
import { useNavigation } from "@react-navigation/native";
import axios, { AxiosError } from "axios";
import React, { useState } from "react";

export interface RegisterState {
	name: string;
	phone: string;
	password: string;
}

const useRegisterHook = () => {
	let navigation = useNavigation();
	//TODO remove initial value
	const [state, setState] = useState<RegisterState>({
		name: "",
		password: "",
		phone: "",
	});

	const [loading, setLoading] = useState<boolean>(false);

	const [errTxt, setErrTxt] = useState("");

	let dispatch = useAppDispatch();

	const onRegister = async () => {
		//validate phone matches +998 ** *** ** **
		if (validatePhoneNumber(state.phone)) {
			//send data to remote
			try {
				setLoading(true);
				let res = await requests.auth.register(state);
				// let res = await axios.get("http://qwerty.uz");
				//write these data to redux and AsyncStorage
				//@ts-ignore
				navigation.navigate(ROUTES.VERIFICATION, {
					phone: state.phone,
					token: res.data.data.token,
				});
			} catch (error) {
				let err = error as AxiosError<RegisterResponseErrors>;
				if (axios.isAxiosError(err)) {
					// Access to config, request, and response
					// err.response?.data.errors[0].phone;
					let errText = err.response?.data.errors.phone.join(", ");
					// console.log(errText);
					setErrTxt(errText || "");
				} else {
					// Just a stock error
				}
			} finally {
				setLoading(false);
			}
		} else {
			//TODO warn that data is incorrect
			// console.log("INCORRECT PHONE NUMBER");
		}
	};

	let onRegisterNavigation = () => navigation.navigate(ROUTES.VERIFICATION);

	let onStateChange = (key: string) => (value: string) => {
		setState({ ...state, [key]: value });
	};

	return {
		onRegister,
		onStateChange,
		state,
		loading,
		onRegisterNavigation,
		errTxt,
	};
};

export default useRegisterHook;
