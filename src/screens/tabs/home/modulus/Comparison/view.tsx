import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { LeftArrowIcon } from "@novomarkt/assets/icons/icons";
import { styles } from "./styles";

const Comparison = ({ item }: { item: any }) => {
	let productSize = ["35", "36", "37", "38", "39", "40"];

	let navigation = useNavigation();
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<TouchableOpacity style={styles.button} onPress={navigation.goBack}>
					<LeftArrowIcon
						style={styles.icon}
						hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
					/>
					<Text style={styles.text}>Comparison</Text>
				</TouchableOpacity>
				<ScrollView
					style={styles.scrol_container}
					showsHorizontalScrollIndicator={false}
				>
					<View style={[styles.content]}>
						<View style={styles.box_1}>
							<View style={styles.box_1_container}>
								<View style={styles.image_container_doc}>
									<View
										style={{
											width: 150,
											height: 140,
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "center",
											borderRadius: 8,
											backgroundColor: "#f3efef9c",
										}}
									>
										<Image
											source={{
												uri: "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5823.png",
											}}
											style={{ resizeMode: "contain", width: 70, height: 65 }}
										/>
									</View>
									<Text
										style={{
											fontSize: 16,
											fontWeight: "600",
											marginTop: 6,
											marginBottom: 10,
										}}
									>
										Lorem Ipsum
									</Text>
									<View style={styles.all_value}>
										<View style={styles.all_value_doc}>
											<Text style={styles.all_value_text}>4.3</Text>
										</View>
										<Text
											style={{ marginLeft: 3, fontSize: 12, fontWeight: "400" }}
										>
											Общая оценка
										</Text>
									</View>
									<View style={styles.otpravet_value}>
										<Text style={styles.otpravet_value_text}>
											название магазина
										</Text>
										<LeftArrowIcon
											style={{}}
											hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
										/>
									</View>
									<Text
										style={{
											marginTop: 20,
											marginBottom: 15,
											fontSize: 16,
											fontWeight: "500",
										}}
									>
										Описания
									</Text>
									<Text
										style={{
											fontSize: 12,
											fontWeight: "400",
											lineHeight: 14,
											color: "#313131",
										}}
									>
										Lorem Ipsum is simply dummy text of the and typesetting
										industry. Lor em Ipsum has been the industry's standard dum
										my text ever since the 1500s, when an unknown printer took a
										galley
									</Text>
								</View>
								<View style={styles.sizes}>
									<Text>Размер</Text>
									<View style={styles.size}>
										{productSize.map((item: string) => {
											return (
												<View style={styles.size_box}>
													<Text>{item}</Text>
												</View>
											);
										})}
									</View>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default Comparison;
