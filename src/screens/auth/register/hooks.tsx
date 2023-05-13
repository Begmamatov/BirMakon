import requests from "@novomarkt/api/requests";
import { RegisterResponseErrors } from "@novomarkt/api/types";
import { ROUTES } from "@novomarkt/constants/routes";
import { useAppDispatch } from "@novomarkt/store/hooks";
import { userLoggedIn } from "@novomarkt/store/slices/userSlice";
import { validatePhoneNumber } from "@novomarkt/utils/validation";
import { useNavigation } from "@react-navigation/native";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Alert } from "react-native";

export interface RegisterState {
	name: string;
	phone: string;
	password: string;
}

const useRegisterHook = () => {
	let navigation = useNavigation();

	const [state, setState] = useState<RegisterState>({
		name: "",
		password: "",
		phone: "",
	});
	const [confirmPassword, setConfirmPassword] = useState("");

	const [loading, setLoading] = useState<boolean>(false);

	const [errTxt, setErrTxt] = useState("");

	let dispatch = useAppDispatch();

	const onRegister = async () => {
		//validate phone matches +998 ** *** ** **
		if (validatePhoneNumber(state.phone)) {
			//confirm password
			if (state.password === confirmPassword) {
				//send data to remote
				try {
					setLoading(true);
					let res = await requests.auth.register(state);
					console.log(res);

					//@ts-ignore
					navigation.navigate(ROUTES.VERIFICATION as never, {
						phone: state.phone,
						token: res.data.data.token,
						state,
					});
					dispatch(userLoggedIn(res));
				} catch (error) {
					Alert.alert("xato", `${error}`);
					let err = error as AxiosError<RegisterResponseErrors>;
					if (axios.isAxiosError(err)) {
						let errText = err.response?.data.errors.phone.join(", ");
						setErrTxt(errText || "");
					} else {
					}
				} finally {
					setLoading(false);
				}
			} else {
				Alert.alert("Пароли не совпадают");
			}
		} else {
			console.log("INCORRECT PHONE NUMBER");
		}
	};

	let onStateChange = (key: string) => (value: string) => {
		setState({ ...state, [key]: value });
	};

	return {
		confirmPassword,
		onRegister,
		setConfirmPassword,
		onStateChange,
		state,
		loading,
		errTxt,
	};
};

export default useRegisterHook;
