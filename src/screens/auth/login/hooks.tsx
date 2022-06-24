import requests from "@novomarkt/api/requests";
import { ROUTES } from "@novomarkt/constants/routes";
import { useAppDispatch } from "@novomarkt/store/hooks";
import { userLoggedIn } from "@novomarkt/store/slices/userSlice";
import { validatePhoneNumber } from "@novomarkt/utils/validation";
import { useNavigation } from "@react-navigation/native";
import axios, { AxiosError } from "axios";
import { useState } from "react";

export interface LoginState {
	phone?: string;
	password?: string;
	code?: string;
}

const useLoginHook = () => {
	let navigation = useNavigation();
	//TODO remove initial value
	const [state, setState] = useState<LoginState>({
		password: "",
		phone: "",
	});
	const [error, setError] = useState("");
	let [loading, setLoading] = useState<boolean>(false);
	let dispatch = useAppDispatch();
	let onLogin = async () => {
		//validate phone matches +998 ** *** ** **
		if (validatePhoneNumber(state.phone)) {
			//send data to remote
			try {
				setLoading(true);
				let res = await requests.auth.login(state);
				// let res = await axios.get("http://qwerty.uz");
				//write these data to redux and AsyncStorage
				dispatch(userLoggedIn(res.data));
			} catch (error) {
				//Check if server error
				console.log(error);
				const err = error as AxiosError<{
					errors: Record<keyof LoginState, string>;
				}>;
				if (err.response) {
					let vals = Object.values(err.response.data.errors).join(",");
					setError(vals);
				} else {
					setError("Something went wrong");
					setTimeout(() => {
						setError("");
					}, 3000);
				}
			} finally {
				setLoading(false);
			}
		} else {
			//TODO warn that data is incorrect
			setError("Заполните поля");
			setTimeout(() => {
				setError("");
			}, 3000);
		}
	};

	let onForgotPassNavigation = () => navigation.navigate(ROUTES.FORGOTPASSWORD);

	let onLoginNavigation = () => navigation.navigate(ROUTES.REGISTER);

	let onStateChange = (key: string) => (value: string) => {
		setState({ ...state, [key]: value });
	};

	return {
		onLogin,
		onStateChange,
		state,
		loading,
		onLoginNavigation,
		onForgotPassNavigation,
		error,
	};
};

export default useLoginHook;
