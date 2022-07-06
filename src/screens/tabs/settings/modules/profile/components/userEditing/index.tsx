import requests, { appendUrl } from "@novomarkt/api/requests";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
	ActivityIndicator,
	Image,
	Platform,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { styles } from "./styles";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-date-picker";
import { LoginResponse } from "@novomarkt/api/types";
import { STRINGS } from "@novomarkt/locales/strings";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import { ROUTES } from "@novomarkt/constants/routes";
import useProfileHook from "../../hooks";

export const UserEditingForm = () => {
	const navigation = useNavigation();
	const data = useRoute();
	const userData = data.params;
	const [date, setDate] = useState(new Date(userData?.birthday));
	const [open, setOpen] = useState(false);
	const [state, setState] = useState<LoginResponse>({
		gender: userData?.gender,
		name: userData?.name,
		phone: userData?.phone,
		photo: userData?.photo,
		birthday: userData?.birthday,
		email: userData?.email,
	});
	const [openDate, setOpenDate] = useState(false);
	const [value, setValue] = useState(userData?.gender);
	const [items, setItems] = useState([
		{ label: "Мужчина", value: 1 },
		{ label: "Женщина", value: 2 },
	]);
	const [image, setImage] = useState<object | undefined>({});
	const [animation, setAnimation] = useState(false);
	let dateNow = new window.Date();
	const { fetchData, profileData } = useProfileHook();

	const changePhoto = () => {
		launchImageLibrary({ mediaType: "photo" }, ({ assets }) => {
			if (assets) {
				const img = {
					uri: assets[0].uri,
					type: assets[0].type,
					name: assets[0].fileName,
				};
				setImage(img);
			}
		});
		setState({ ...state, photo: image });
	};

	let onStateChange = (key: string) => (value: string) => {
		setState({ ...state, [key]: value });
	};

	let onUpdateProfile = async () => {
		try {
			setAnimation(true);
			let res = await requests.profile.editProfile(state);
			setAnimation(false);
			navigation.goBack();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.container}>
			<BackHeader style={styles.back} />
			<View style={styles.userImg}>
				<Image
					source={{
						uri: !image.uri ? appendUrl(userData?.photo) : image?.uri,
					}}
					style={{ width: 100, height: 100, borderRadius: 100 }}
				/>
				<TouchableOpacity
					style={styles.changeTxt}
					onPress={changePhoto}
					hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
				>
					<Text style={{ color: COLORS.red }}>Изменить фото профиля</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flexDirection: "row", marginVertical: 10 }}>
				<View style={{ flexDirection: "column" }}>
					<Text style={styles.inputLabel}>Имя</Text>
					<Text style={styles.inputLabel}>Э-маил</Text>
					<Text style={styles.inputLabel}>Телефон</Text>
					<Text style={styles.inputLabel}>Дата рождения</Text>
					<Text style={styles.inputLabel}>Пол</Text>
				</View>
				<View
					style={{
						flexDirection: "column",
						flex: 1,
						paddingHorizontal: 10,
					}}
				>
					<TextInput
						style={styles.input}
						// value={userData?.name || ""}
						defaultValue={state?.name}
						onChangeText={onStateChange("name")}
						// onChange={onStateChange("name")}d
					/>
					<TextInput
						style={styles.input}
						value={state?.email}
						onChangeText={onStateChange("email")}
					/>
					<TextInput
						style={styles.input}
						value={state?.phone}
						onChangeText={onStateChange}
					/>
					<TouchableOpacity
						style={[
							styles.input,
							{ paddingVertical: Platform.OS === "android" ? 10 : 0 },
						]}
						onPress={() => setOpenDate(true)}
					>
						<TextInput
							style={{ flex: 1, padding: 0 }}
							onPressIn={() => setOpenDate(true)}
							value={date.toISOString().split("T")[0]}
							editable={false}
							selectTextOnFocus={false}
							onChangeText={onStateChange}
						/>
						<DatePicker
							modal
							mode="date"
							open={openDate}
							date={date}
							maximumDate={dateNow}
							onConfirm={(date) => {
								setOpenDate(false);
								setDate(date);
							}}
							onCancel={() => {
								setOpenDate(false);
							}}
						/>
					</TouchableOpacity>
					<DropDownPicker
						open={open}
						value={value}
						items={items}
						setOpen={setOpen}
						setValue={setValue}
						setItems={setItems}
						style={styles.sexPicker}
						containerStyle={{ margin: 0, padding: 0 }}
						dropDownContainerStyle={{ margin: 0, padding: 0 }}
						badgeStyle={{ margin: 0 }}
						onChangeValue={onStateChange}
					/>
				</View>
			</View>
			<DefaultButton
				containerStyle={{ marginHorizontal: 0, marginTop: 90 }}
				onPress={() => {
					onUpdateProfile();
				}}
			>
				{animation ? (
					<ActivityIndicator
						size="small"
						color={COLORS.red}
						animating={animation}
					/>
				) : (
					<Text style={styles.buttonTxt}>{STRINGS.save}</Text>
				)}
			</DefaultButton>
		</View>
	);
};
