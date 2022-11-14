import React, { FC, ReactElement } from "react";
import {
	ListRenderItemInfo,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import Text from "@novomarkt/components/general/Text";
import {
	GroupIcon,
	HeartIcon,
	LeftArrow,
	LeftArrowIcon,
	UploadIcon,
} from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import { NewsItemProps } from "../../../components/NewsItem";
import { STRINGS } from "@novomarkt/locales/strings";
import { ROUTES } from "@novomarkt/constants/routes";

export interface BackHeaderLimitType {
	image?: string;
	content?: string;
	date?: string;
	name?: string;
	id?: Number;
}

const BackHeaderLimit: FC<BackHeaderLimitType> = ({ name, id }) => {
	let navigation = useNavigation();
	return (
		<View style={styles.row}>
			<TouchableOpacity onPress={navigation.goBack}>
				<LeftArrowIcon
					style={{ width: 120, height: 120 }}
					hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
				/>
			</TouchableOpacity>
			<Text style={styles.logoText}>{name ? name : ""}</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate(ROUTES.SHOPVIEW as never)}
			>
				<GroupIcon style={{ width: 120, height: 120 }} />
			</TouchableOpacity>
		</View>
	);
};

export default BackHeaderLimit;

const styles = StyleSheet.create({
	row: {
		paddingHorizontal: 20,
		paddingBottom: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderColor: COLORS.whiteGray,
		backgroundColor: COLORS.white,
		marginTop: 20,
	},
	heart: {
		marginRight: 20,
	},
	logoText: {
		color: COLORS.defaultBlack,
		fontWeight: "500",
		fontSize: 20,
	},
});
