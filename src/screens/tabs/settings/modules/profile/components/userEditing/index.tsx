import requests, { appendUrl } from "@novomarkt/api/requests";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
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
import { useDispatch } from "react-redux";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";

export const UserEditingForm = () => {
	const dispatch = useDispatch();
	const data = useRoute();
	const userData = data.params;
	const [date, setDate] = useState(new Date(userData?.birthday));
	const [open, setOpen] = useState(false);
	const [state, setState] = useState<LoginResponse>({
		gender: 1,
		name: "",
		phone: "",
		photo: "",
		birthday: "",
		email: "",
	});
	const [openDate, setOpenDate] = useState(false);
	const [value, setValue] = useState(userData?.gender);
	const [items, setItems] = useState([
		{ label: "Мужчина", value: 1 },
		{ label: "Женщина", value: 2 },
	]);
	const [image, setImage] = useState<string | undefined>("");
	let dateNow = new window.Date();

	const changePhoto = () => {
		launchImageLibrary({ mediaType: "photo" }, ({ assets }) => {
			if (assets) {
				setImage(assets[0].uri);
			}
		});
	};

	let onStateChange = (key: string) => (value: string) => {
		setState({ ...state, [key]: value });
	};

	let onUpdateProfile = () => {
		try {
			// dispatch(toggleLoading);
			let res = requests.profile.editProfile(state);
			// dispatch(toggleLoading);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.container}>
			<BackHeader />
			<View style={styles.userImg}>
				<Image
					source={{
						uri: !image ? appendUrl(userData?.photo) : image?.toString(),
					}}
					style={{ width: 100, height: 100, borderRadius: 100 }}
				/>
				<TouchableOpacity
					style={styles.changeTxt}
					onPress={changePhoto}
					hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
				>
					<Text style={{ color: COLORS.blue }}>Изменить фото профиля</Text>
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
						defaultValue={userData?.name}
						onChangeText={onStateChange("name")}
						// onChange={onStateChange("name")}d
					/>
					<TextInput
						style={styles.input}
						value={userData?.email}
						onChangeText={onStateChange("email")}
					/>
					<TextInput
						style={styles.input}
						value={userData?.phone}
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
					<TouchableOpacity onPress={onUpdateProfile}>
						<Text>Save</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
