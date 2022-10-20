import requests from "@novomarkt/api/requests";
import AllButton from "@novomarkt/components/general/AllButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
	Dimensions,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import Modal from "react-native-modal";
import BrandItem from "./BrandItem";

const BrandsList = () => {
	let navigation: any = useNavigation();
	const [brands, setBrands] = useState([]);
	let effect = async () => {
		try {
			let res = await requests.brands.getAllBrands();
			setBrands(res.data.data);
		} catch (error) {}
	};
	useEffect(() => {
		effect();
	}, []);

	const [allModalVisible, setAllModalVisible] = useState(false);

	const toggleAllModalVisible = () => {
		setAllModalVisible(!allModalVisible);
	};
	return (
		<View style={styles.container}>
			<View style={styles.allButtonsView}>
				<TouchableOpacity>
					<Text style={styles.title}>{STRINGS.brands}</Text>
				</TouchableOpacity>

				<Modal
					isVisible={allModalVisible}
					testID={"modal"}
					swipeDirection={["right", "left", "down"]}
					swipeThreshold={Dimensions.get("window").width / 2}
					onSwipeComplete={() => {
						setAllModalVisible(false);
					}}
					style={styles.modalStyle}
				>
					<View style={styles.modalInView}>
						<TouchableOpacity onPress={toggleAllModalVisible}>
							<Text style={styles.brandsText}>{STRINGS.brands}</Text>
						</TouchableOpacity>
						<View style={styles.view}>
							<FlatList
								data={brands}
								renderItem={({ item: { id, name } }: any) => (
									<TouchableOpacity
										onPress={() => {
											navigation.navigate(ROUTES.CATALOG_PRODUCTS, {
												id,
												name,
												type: "brand",
											});
											toggleAllModalVisible();
										}}
									>
										<Text style={styles.brandsName}>{name}</Text>
									</TouchableOpacity>
								)}
							/>
						</View>
					</View>
				</Modal>
				<AllButton onPress={toggleAllModalVisible} />
			</View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={brands}
				renderItem={(props) => <BrandItem {...props} />}
				style={styles.container}
				contentContainerStyle={styles.contentContainerStyle}
			/>
		</View>
	);
};

export default BrandsList;

const styles = StyleSheet.create({
	title: {
		color: COLORS.defaultBlack,
		fontSize: 19,
		marginLeft: 16,
		fontWeight: "700",
		letterSpacing: 0.5,
	},
	container: { marginBottom: 20 },
	contentContainerStyle: {
		paddingLeft: 12,
	},
	allButtonsView: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 15,
	},
	modalStyle: {
		justifyContent: "center",
		margin: 0,
	},
	modalInView: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingHorizontal: 20,
		alignItems: "flex-start",
		paddingVertical: 50,
	},
	brandsText: {
		color: COLORS.defaultBlack,
		fontWeight: "600",
		fontSize: 18,
	},
	view: {
		marginTop: 20,
	},
	brandsName: {
		color: COLORS.defaultBlack,
		fontSize: 16,
		marginTop: 15,
	},
});
