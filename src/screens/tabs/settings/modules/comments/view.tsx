import {
    ArrowBottomMarked
} from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import { productsData } from "@novomarkt/screens/tabs/home/components/ProductsList";
import React from "react";
import { FlatList, View } from "react-native";
import CommentItem from "./components/CommentItem";
import { styles } from "./style";

const CommentView = () => {
	return (
		<View style={styles.container}>
			<BackHeader name={STRINGS.comments} style={styles.header} />
            <View style={styles.rowHeader}>
				<Text style={styles.txt}>Сортировать по:</Text>
				<Text style={styles.blueText}>Дате</Text>
				<ArrowBottomMarked fill={COLORS.blue} style={styles.arrow} />
				<Text style={styles.blueText2}>Оценке</Text>
			</View>
			<FlatList
				data={productsData}
				renderItem={CommentItem}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default CommentView;
