import { ROUTES } from "@novomarkt/constants/routes";
import { useAppDispatch } from "@novomarkt/store/hooks";
import { selectUser, userLoggedOut } from "@novomarkt/store/slices/userSlice";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const useSettingsHook = () => {
	let navigation = useNavigation();
	const dispatch = useAppDispatch();
	let user = useSelector(selectUser);
	let onLogOut = () => {
		Alert.alert("Вы точно хотите выйти из аккаунта ?", "", [
			{
				text: "Cancel",
				// onPress: () => console.log("Cancel Pressed"),
				style: "cancel",
			},
			{
				text: "OK",
				onPress: () => {
					dispatch(userLoggedOut());
					navigation.navigate(ROUTES.LOGIN);
				},
			},
		]);
	};

	return { onLogOut };
};

export default useSettingsHook;
