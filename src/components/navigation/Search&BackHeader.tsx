import {
	DeliveryIcon,
	LeftArrow,
	SearchIcon,
} from "@novomarkt/assets/icons/icons";
import { COLORS } from "@novomarkt/constants/colors";
import { REGULAR_FONT_FAMILY } from "@novomarkt/constants/fonts";
import { ROUTES } from "@novomarkt/constants/routes";
import { STRINGS } from "@novomarkt/locales/strings";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
	Platform,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

interface SearchProps {
	autoFocus?: boolean;
	onChange?: (valyu: string) => void;
}

const SearchBackHeader = ({ autoFocus, onChange }: SearchProps) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.goBack()}
				hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
			>
				<LeftArrow />
			</TouchableOpacity>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder={STRINGS.searching}
					placeholderTextColor={COLORS.whiteGray}
					autoFocus={autoFocus}
					autoCorrect={false}
					onChangeText={onChange}
					onFocus={() => {
						navigation.navigate(ROUTES.SEARCH as never);
					}}
				/>
				<SearchIcon fill={COLORS.whiteGray} />
			</View>
			<DeliveryIcon fill={COLORS.whiteGray} />
		</View>
	);
};

export default SearchBackHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 15,
	},
	inputContainer: {
		flex: 1,
		borderRadius: 8,
		marginVertical: 10,
		marginLeft: 16,
		marginRight: 10,
		paddingHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: COLORS.lightGray,
		color: COLORS.whiteGray,
	},
	input: {
		paddingVertical: Platform.OS == "android" ? 10 : 12,
		fontFamily: REGULAR_FONT_FAMILY,
		width: "90%",
	},
});
