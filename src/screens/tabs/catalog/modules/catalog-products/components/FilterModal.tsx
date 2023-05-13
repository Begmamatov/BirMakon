import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "@novomarkt/constants/colors";
import { NewTopArrowIcon } from "@novomarkt/assets/icons/icons";

type Props = {
	onPress: () => any;
	children: React.ReactNode;
	active: boolean;
	title: string;
	activeBorder?: boolean;
};

const FilterModal = (props: Props) => {
	return (
		<View
			style={[styles.box, { borderBottomWidth: props.activeBorder ? 1 : 0 }]}
		>
			<TouchableOpacity onPress={props.onPress} style={styles.box_active}>
				<Text style={styles.active_title}>{props.title}</Text>
				<View style={styles.icon_box}>
					<NewTopArrowIcon rotateValue={props.active ? "0deg" : "180deg"} />
				</View>
			</TouchableOpacity>
			<View>{props.children}</View>
		</View>
	);
};

export default FilterModal;

const styles = StyleSheet.create({
	box: {
		marginLeft: 15,
		marginRight: 15,
		borderBottomColor: "#71717119",
		paddingBottom: 5,
		paddingTop: 5,
		backgroundColor: COLORS.white,
	},
	box_active: {
		marginTop: 14,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		zIndex: 4,
	},
	active_title: {
		fontSize: 16,
		lineHeight: 40,
		fontWeight: "500",
		color: COLORS.black,
	},
	icon_box: {
		width: 40,
		height: 20,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});
