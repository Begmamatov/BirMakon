import requests, { appendUrl } from "@novomarkt/api/requests";
import { LeftArrowIcon } from "@novomarkt/assets/icons/icons";
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
	Image,
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
				<Text style={styles.title}>{STRINGS.brands}</Text>

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
			<Modal
				isVisible={allModalVisible}
				testID={"modal"}
				swipeDirection={["right", "left", "down"]}
				swipeThreshold={Dimensions.get("window").width / 2}
				onSwipeComplete={() => {
					toggleAllModalVisible;
				}}
				style={styles.modalStyle}
				onSwipeCancel={() => {
					toggleAllModalVisible;
				}}
			>
				<View style={styles.modalInView}>
					<TouchableOpacity
						onPress={toggleAllModalVisible}
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<LeftArrowIcon />
						<Text style={styles.brandsText}>{STRINGS.brands}</Text>
					</TouchableOpacity>
					<View style={styles.view}>
						<FlatList
							data={brands}
							renderItem={({ item: { id, name, photo } }: any) => (
								<TouchableOpacity
									style={styles.item_container}
									onPress={() => {
										navigation.navigate(ROUTES.CATALOG_PRODUCTS, {
											id,
											name,
											type: "brand",
										});
										toggleAllModalVisible();
									}}
								>
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										<View style={styles.imageContainer}>
											<Image
												source={{ uri: appendUrl(photo) }}
												style={styles.image}
											/>
										</View>
										<Text style={styles.brandsName}>{name}</Text>
									</View>
								</TouchableOpacity>
							)}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default BrandsList;

const styles = StyleSheet.create({
	imageContainer: {
		backgroundColor: COLORS.white,
		marginTop: 10,
		borderRadius: 8,
		width: 80,
		height: 50,
		marginRight: 12,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 50,
		height: 30,
		padding: 12,
	},
	item_container: {
		borderBottomWidth: 1,
		borderColor: "#999999",
	},
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
		marginLeft: 10,
	},
	view: {
		marginTop: 20,
		width: "100%",
	},
	brandsName: {
		color: COLORS.defaultBlack,
		fontSize: 16,
	},
});
