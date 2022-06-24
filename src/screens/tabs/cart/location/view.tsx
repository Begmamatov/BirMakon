import DefaultInput from "@novomarkt/components/general/DefaultInput";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import React from "react";
import { ScrollView, TextInput, TextInputBase, View } from "react-native";
import DefaultHeader from "../../favorites/components/DefaultHeader";
import { styles } from "./style";

const Location = () => {
	return (
		<ScrollView style={styles.container}>
			<BackHeader name="Ваш регион" style={styles.header} />
			<TextInput
				placeholder="Ваш регион"
				style={styles.input}
				placeholderTextColor={COLORS.gray}
			/>
		</ScrollView>
	);
};

export default Location;
