import { useState } from "react";
import { useAppDispatch } from "@novomarkt/store/hooks";
import { validatePhoneNumber } from "@novomarkt/utils/validation";
import requests from "@novomarkt/api/requests";
import { userLoggedIn } from "@novomarkt/store/slices/userSlice";
import { AxiosError } from "axios";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@novomarkt/constants/routes";

export interface OnResedProps {
	phone?: string;
}

export const ResendHook = () => {
	const [state, setState] = useState<OnResedProps>({
		phone: "",
	});
	const [error, setError] = useState("");

	let [loading, setLoading] = useState<boolean>(false);

	let dispatch = useAppDispatch();

	let navigition = useNavigation<any>();

	const OnPress = async () => {
		// @ts-ignore
		if (validatePhoneNumber(state.phone)) {
			try {
				setLoading(true);
				let res = await requests.auth.forgetPassword(state);
				console.log("res++++", res);
				setLoading(false);
				dispatch(userLoggedIn(res));
				navigition.navigate(ROUTES.RESEDSMS as never, { state: state.phone });
			} catch (error) {
				//Check if server error
				console.log(error);
				const err = error as AxiosError<{
					errors: Record<keyof OnResedProps, string>;
				}>;
				if (err.response) {
					// @ts-ignore
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
			setError("Заполните поля");
			setTimeout(() => {
				setError("");
			}, 3000);
		}
	};
	const onChange = (phone: string) => {
		setState({ ...state, phone: phone });
	};
	return {
		onChange,
		OnPress,
		error,
		loading,
		state,
	};
};
