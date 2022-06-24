import {
	Checked,
	MarkedStar,
	NotMarkedStar,
} from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { ProductItemProps } from "@novomarkt/screens/tabs/home/components/ProductItem";
import React from "react";
import { ListRenderItemInfo, StyleSheet, View } from "react-native";

interface Props {
	review: string;
}

const CommentItem = ({
	item: { name, image, shopName, price },
}: ListRenderItemInfo<ProductItemProps>) => {
	return (
		<View style={styles.container}>
			<View style={styles.boxes}>
				<View style={styles.nameRow}>
					<Text style={styles.name}>{STRINGS.name}</Text>
					<View style={styles.stars}>
						<MarkedStar fill={COLORS.blue} />
						<MarkedStar fill={COLORS.blue} />
						<MarkedStar fill={COLORS.blue} />
						<NotMarkedStar fill={COLORS.whiteGray} />
						<NotMarkedStar fill={COLORS.whiteGray} />
					</View>
				</View>
				<Text style={styles.comment}>{STRINGS.comment}</Text>
				<View style={styles.row}>
					<Text>{STRINGS.date}</Text>
					<View style={styles.row}>
						<Checked fill={COLORS.blue} style={styles.icon} />
						<Text>Я купил товар</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default CommentItem;

const styles = StyleSheet.create({
	containerComment: {
		flex: 1,
		backgroundColor: COLORS.white,
	},

	boxes: {
		marginHorizontal: 20,
		marginVertical: 10,
		elevation: 5,
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		backgroundColor: COLORS.white,
		borderRadius: 8,
		padding: 15,
	},

	nameRow: {
		flexDirection: "row",
	},

	name: {
		color: COLORS.defaultBlack,
		fontSize: 16,
	},

	stars: {
		marginLeft: 30,
		alignSelf: "center",
		flexDirection: "row",
	},

	comment: {
		marginVertical: 10,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	icon: {
		marginRight: 5,
	},
});
