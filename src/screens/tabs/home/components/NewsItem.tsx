import { appendUrl } from "@novomarkt/api/requests";
import { NewsItemResponse } from "@novomarkt/api/types";
import DefaultButton from "@novomarkt/components/general/DefaultButton";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { ROUTES } from "@novomarkt/constants/routes";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React, { ReactElement } from "react";
import {
	Image,
	ListRenderItemInfo,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";

export interface NewsItemProps {
	image: string;
	content: string;
	date: string;
	id: number;
}

const NewsItem = ({
	item,
}: ListRenderItemInfo<NewsItemResponse>): ReactElement => {
	let { date, photo, description_mini, id, name, views } = item;
	let navigation = useNavigation();
	let [day] = date.split(" ");

	return (
		<View style={styles.container}>
			<Image source={{ uri: appendUrl(photo) }} style={styles.image} />
			<View style={styles.content}>
				<Text style={styles.text}>{name}</Text>
				<Text style={styles.dateStyle}>{day}</Text>
				<View style={styles.row}>
					<DefaultButton
						onPress={() =>
							navigation.navigate(ROUTES.NEWS_DETAILS, { item, id })
						}
						textStyle={styles.buttonText}
						containerStyle={styles.buttonContainer}
						text={STRINGS.detailed}
					/>
					{/* <View style={{ alignItems: "flex-end" }}>
						<Text style={styles.dateStyle}>{day}</Text>
					</View> */}
				</View>
			</View>
		</View>
	);
};

export default NewsItem;

const styles = StyleSheet.create({
	text: {
		fontSize: 12,
		color: COLORS.defaultBlack,
		height: 65,
	},
	dateStyle: {
		color: COLORS.red,
		fontSize: 12,
		alignSelf: "flex-end",
		marginTop: 10,
	},
	buttonContainer: {
		marginTop: 0,
		marginHorizontal: 0,
		padding: 0,
		width: "100%",
	},
	buttonText: {
		fontSize: 12,
	},
	row: {
		marginVertical: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	container: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
		elevation: 2,
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		width: WINDOW_WIDTH / 2 - 20,
		margin: 4,
		marginRight: 10,
	},
	image: {
		width: WINDOW_WIDTH / 2 - 20,
		height: 100,
		borderRadius: 8,
	},
	content: {
		padding: 8,
	},
});
