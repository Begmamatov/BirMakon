import requests from "@novomarkt/api/requests";
import { ROUTES } from "@novomarkt/constants/routes";
import { useAppDispatch } from "@novomarkt/store/hooks";
import { userLoggedIn } from "@novomarkt/store/slices/userSlice";
import { validatePhoneNumber } from "@novomarkt/utils/validation";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

let timer = -1;

export interface resedSmsProps {
	code?: string;
	phone?: string;
}

const useResedSmsHook = () => {
	const route = useRoute();

	let dispatch = useAppDispatch();

	let navigation = useNavigation<any>();

	const [timeLeft, setTimeLeft] = useState(15);

	const [loading, setLoading] = useState<boolean>(false);

	const [state, setState] = useState<resedSmsProps>({
		code: "",
		// @ts-ignore
		phone: route.params?.state ? route.params.state : "",
	});

	const startTimer = () => {
		timer = setTimeout(() => {
			if (timeLeft <= 0) {
				clearTimeout(timer);
				return false;
			}
			setTimeLeft(timeLeft - 1);
		}, 1500);
		return timer;
	};

	useEffect(() => {
		startTimer();
		return () => clearTimeout(timer);
	});

	let resendCode = async () => {
		setTimeLeft(10);
		// @ts-ignore
		if (validatePhoneNumber(state.phone)) {
			try {
				let res = await requests.auth.forgetPassword(state);
				dispatch(userLoggedIn(res));
			} catch (error) {
				console.log(error);
			}
		}
	};

	let onVerificate = async () => {
		//validate phone matches +998 ** *** ** **
		if (validatePhoneNumber(state.phone as string)) {
			//send data to remote
			try {
				setLoading(true);
				let res = await requests.auth.resedSms(state);
				const data = res.data.data;

				console.log("data bu:", data);
				!!data &&
					Alert.alert(
						"Ogoxlatirish",
						`Mufoqiyatli kodingiz ${data.password} ga uzgardi!`
					);

				!!data &&
					navigation.navigate(ROUTES.LOGIN as never, { data: res.data });

				dispatch(userLoggedIn(res.data.date));
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
	};
	let onChangePhoneNumber = () => navigation.goBack();

	let onStateChange = (code: string) => {
		setState({ ...state, code: code });
	};

	return {
		timeLeft,
		onChangePhoneNumber,
		onVerificate,
		state,
		onStateChange,
		loading,
		resendCode,
	};
};

export default useResedSmsHook;
