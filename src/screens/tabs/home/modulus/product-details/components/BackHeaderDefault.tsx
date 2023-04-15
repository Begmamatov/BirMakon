import requests from "@novomarkt/api/requests";
import { ProductItemResponse } from "@novomarkt/api/types";
import {
	HeartIconBorder,
	HeartIconRed,
	LeftArrow,
	UploadIcon,
} from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { useAppSelector } from "@novomarkt/store/hooks";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import {
	favoriteSelector,
	loadFavorite,
} from "@novomarkt/store/slices/favoriteSlice";
import { useNavigation, useRoute } from "@react-navigation/core";
import React, { ReactElement } from "react";
import {
	ListRenderItemInfo,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { useDispatch } from "react-redux";

const BackHeaderDefault = ({ }): ReactElement => {
	let {
		params: { item, id }
	} = useRoute<any>()
	let navigation = useNavigation();
	const dispatch = useDispatch();
	const favorite = useAppSelector(favoriteSelector);
	let isInFavorite = !!favorite[id];

	const onAddFavorite = async () => {
		try {
			let res = await requests.favorites.addFavorite({
				product_id: id,
			});
			let r = await requests.favorites.getFavorites();
			dispatch(loadFavorite(r.data.data));
		} catch (error) {
			console.log(error);
		} finally {
		}
	};

	return (
		<View style={styles.row}>
			<TouchableOpacity
				onPress={() => navigation.goBack()}
				hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
			>
				<LeftArrow />
			</TouchableOpacity>
			<View style={styles.upload}>
				<TouchableOpacity
					onPress={onAddFavorite}
					style={styles.heart}
					hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
				>
					{isInFavorite ? (
						<HeartIconRed fill={COLORS.red} />
					) : (
						<HeartIconBorder fill={COLORS.red} stroke={COLORS.red} />
					)}
				</TouchableOpacity>
				<UploadIcon fill={COLORS.red} />
			</View>
		</View>
	);
};

export default BackHeaderDefault;

const styles = StyleSheet.create({
	row: {
		// marginHorizontal: 20,
		paddingHorizontal: 20,
		paddingBottom: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottomWidth: 0.5,
		borderColor: COLORS.whiteGray,
		backgroundColor: COLORS.white,
		marginTop: 20,
	},

	upload: {
		flexDirection: "row",
	},

	heart: {
		marginRight: 20,
	},
});
