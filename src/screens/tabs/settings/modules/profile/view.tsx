import { appendUrl } from "@novomarkt/api/requests";
import { LocationIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import CartSelectItem from "./components/cartItem/view";
import useProfileHook from "./hooks";
import { styles } from "./style";

export interface UserData {
	name: string;
	email: string;
	phone: string;
	dateOfBirth: string;
	isMale: boolean;
	gender: boolean;
}

const ProfileView = () => {
	const navigation = useNavigation();
	let { onTextChange, profileData, setProfileData, onFieldSubmit } =
		useProfileHook();

	return (
		<>
			<BackHeader style={styles.left} />
			<ScrollView style={styles.container}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text style={styles.header}>Мои данные</Text>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate(ROUTES.USER_EDITING, profileData)
						}
						style={{ marginTop: 20, marginHorizontal: 20 }}
						hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
					>
						<Text style={{ color: COLORS.blue }}>Редактировать</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.userData}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Image
							source={{ uri: appendUrl(profileData?.photo) }}
							style={{ width: 80, height: 80 }}
						/>
					</View>
					<View
						style={{
							flexDirection: "column",
							marginVertical: 10,
						}}
					>
						<Text>Имя</Text>
						<Text
							style={{
								color: COLORS.defaultBlack,
								marginVertical: 5,
							}}
						>
							{profileData?.name}
						</Text>
					</View>
					<View
						style={{
							flexDirection: "column",
							marginVertical: 10,
						}}
					>
						<Text>Э-маил</Text>
						<Text
							style={{
								color: COLORS.defaultBlack,
								marginVertical: 5,
							}}
						>
							{profileData?.email ? profileData?.email : "Не указано"}
						</Text>
					</View>
					<View
						style={{
							flexDirection: "column",
							marginVertical: 10,
						}}
					>
						<Text>Телефон</Text>
						<Text
							style={{
								color: COLORS.defaultBlack,
								marginVertical: 5,
							}}
						>
							{profileData?.phone}
						</Text>
					</View>
					<View
						style={{
							flexDirection: "column",
							marginVertical: 10,
						}}
					>
						<Text>Дата рождения</Text>
						<Text
							style={{
								color: COLORS.defaultBlack,
								marginVertical: 5,
							}}
						>
							{profileData?.birthday}
						</Text>
					</View>
					<View
						style={{
							flexDirection: "column",
							marginVertical: 10,
						}}
					>
						<Text>Пол</Text>
						<Text
							style={{
								color: COLORS.defaultBlack,
								marginVertical: 5,
							}}
						>
							{profileData?.gender === 1 ? "Мужчина" : "Женшина"}
						</Text>
					</View>
				</View>
				<View style={styles.shadowBoxTwo}>
					<Text style={styles.bank}> Банковские карты </Text>
					<CartSelectItem />
				</View>
				<View style={styles.locate}>
					<Text style={styles.txt}>Адресa клиента</Text>
					<View style={styles.row}>
						<LocationIcon fill={COLORS.gray} />
						{profileData?.addresses?.map((e) => {
							<Text style={styles.moscow}>{e}</Text>;
						})}
					</View>
				</View>
				<View style={styles.delete}>
					<Text style={styles.txt}>Удаление личного кабинета</Text>
					<Text>Как только Ваш личный кабинет будет удален</Text>
					<Text style={styles.blueText}>Удаление личново кабинета</Text>
				</View>
				<View style={styles.recover}>
					<Text style={styles.txt}>Восстановления пароля</Text>
					<Text style={styles.blueText}>
						Данные для восстановления пароля и sms
					</Text>
				</View>
			</ScrollView>
		</>
	);
};

export default ProfileView;
