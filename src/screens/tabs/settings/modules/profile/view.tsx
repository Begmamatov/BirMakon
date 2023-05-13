import { appendUrl, assetUrl } from "@novomarkt/api/requests";
import {
	AddTextIcon,
	LocationIcon,
	PlusIcon,
} from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
	FlatList,
	Image,
	ScrollView,
	TouchableOpacity,
	View,
} from "react-native";
import CartSelectItem from "./components/cartItem/view";
import useProfileHook from "./hooks";
import { styles } from "./style";
import DefaultInput from "@novomarkt/components/general/DefaultInput";
import { useAppDispatch } from "@novomarkt/store/hooks";
import Spinner from "react-native-loading-spinner-overlay/lib";

export interface UserData {
	name: string;
	email: string;
	phone: string;
	dateOfBirth: string;
	isMale: boolean;
	gender: boolean;
}
const datPol = [
	{ id: 0, pol: "Муж." },
	{ id: 1, pol: "Жен." },
];
const ProfileView = () => {
	let {
		profileData,
		changePhoto,
		state,
		onStateChange,
		setActivePol,
		activePol,
		removAcountHandler,
		loading,
	} = useProfileHook();
	const [cartDanle, setCartDanle] = useState();
	console.log(cartDanle);

	return (
		<View style={styles.container}>
			<BackHeader style={styles.left} />
			<ScrollView style={styles.container2}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text style={styles.header}>Мои данные</Text>
				</View>
				<View style={styles.userData}>
					<View style={styles.userName}>
						<View style={styles.imageBox}>
							<Image
								source={{ uri: assetUrl + state?.photo }}
								style={styles.image}
							/>
							<TouchableOpacity style={styles.addImage} onPress={changePhoto}>
								<PlusIcon fill={COLORS.white} />
							</TouchableOpacity>
						</View>
						<View style={styles.userNameText}>
							<DefaultInput
								inputStyle={{
									width: "90%",
									borderBottomColor: COLORS.whiteGray,
									borderBottomWidth: 1,
									padding: 0,
									borderRadius: 5,
									paddingLeft: 10,
								}}
								containerStyle={{ width: "100%", position: "relative" }}
								value={state.name}
								onChange={onStateChange("name")}
							/>
						</View>
					</View>

					<View style={styles.userNameText}>
						<DefaultInput
							inputStyle={{
								width: "90%",
								borderBottomColor: COLORS.whiteGray,
								borderBottomWidth: 1,
								padding: 0,
								borderRadius: 5,
							}}
							title="Э-маил"
							containerStyle={{ width: "100%", position: "relative" }}
							value={state.email}
							onChange={onStateChange("email")}
						/>
					</View>

					<View style={styles.userNameText}>
						<DefaultInput
							inputStyle={{
								width: "90%",
								borderWidth: 0,
								padding: 0,
								borderRadius: 5,
							}}
							title="Телефон"
							containerStyle={{ width: "100%", position: "relative" }}
							value={state.phone}
							onChange={onStateChange("phone")}
						/>
					</View>

					<View style={styles.birthday}>
						<View style={{ width: "70%" }}>
							<DefaultInput
								inputStyle={{
									width: "90%",
									borderBottomColor: COLORS.whiteGray,
									borderBottomWidth: 1,
									padding: 0,
									borderRadius: 5,
								}}
								title="Дата рождения"
								containerStyle={{ width: "100%", position: "relative" }}
								value={!!state.birthday ? state.birthday : ""}
								onChange={onStateChange("birthday")}
							/>
						</View>
					</View>
					<View
						style={{
							flexDirection: "column",
							marginVertical: 10,

							width: "50%",
						}}
					>
						<Text>Пол</Text>

						<View
							style={{ flexDirection: "row", width: "100%", marginTop: 10 }}
						>
							<FlatList
								data={datPol}
								numColumns={2}
								renderItem={({ item }) => (
									<TouchableOpacity
										onPress={() => setActivePol(item.id)}
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginRight: 10,
										}}
									>
										<View
											style={[
												{
													width: 12,
													height: 12,
													borderWidth: 1,
													borderRadius: 50,
													justifyContent: "center",
													alignItems: "center",
													marginRight: 5,
												},
												{
													borderColor: activePol === item.id ? "red" : "black",
												},
											]}
										>
											<View
												style={{
													width: 7,
													height: 7,
													backgroundColor:
														activePol === item.id
															? COLORS.red
															: COLORS.textColor,
													borderRadius: 50,
												}}
											></View>
										</View>
										<Text>{item.pol}</Text>
									</TouchableOpacity>
								)}
							/>
						</View>
					</View>
				</View>
				<View style={styles.shadowBoxTwo}>
					<Text style={styles.bank}> Банковские карты </Text>
					<CartSelectItem setCartDanle={setCartDanle} />
				</View>
				<View style={styles.locate}>
					<Text style={styles.txt}>Адресa клиента</Text>
					<View style={styles.row}>
						<LocationIcon fill={COLORS.gray} />
						{profileData?.addresses?.map((e) => {
							<Text style={styles.moscow}>{e}</Text>;
						})}
						<Text style={styles.moscow}> {state.last_address}</Text>
					</View>
				</View>
				<View style={styles.delete}>
					<Text style={styles.txt}>Удаление личного кабинета</Text>
					<Text>Как только Ваш личный кабинет будет удален</Text>
					<TouchableOpacity onPress={removAcountHandler}>
						<Text style={styles.blueText}>Удаление личново кабинета</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.recover}>
					<Text style={styles.txt}>Восстановления пароля</Text>
					<Text style={styles.blueText}>
						Данные для восстановления пароля и sms
					</Text>
				</View>
			</ScrollView>
			<Spinner visible={loading} />
		</View>
	);
};

export default ProfileView;
