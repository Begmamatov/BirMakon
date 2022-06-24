import React from "react";
import { styles } from "./style";
import { View } from "react-native";
import { STRINGS } from "@novomarkt/locales/strings";
import FilterHeader from "../components/FilterHeader";
import PriceChoosing from "../components/PriceChoosing";
import SwitchComponent from "../components/SwitchComponent";
import ChooseBrands from "../components/ChooseBrands";
import DefaultButton from "@novomarkt/components/general/DefaultButton";

const FilterView = () => {
	return (
		<View style={styles.container}>
			<FilterHeader />
			<PriceChoosing />
			<SwitchComponent text={STRINGS.price} />
			<SwitchComponent text={STRINGS.getToday} />
			<SwitchComponent text={STRINGS.moreCashback} />
			<ChooseBrands />
			<DefaultButton
				containerStyle={styles.button}
				text="Показать 1 товар"
			/>
		</View>
	);
};

export default FilterView;
