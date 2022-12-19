import { LeftArrow } from "@novomarkt/assets/icons/icons";
import SearchHeader from "@novomarkt/components/navigation/SearchHeader";
import ProductItem from "@novomarkt/screens/tabs/home/components/ProductItem";
import React from "react";
import { FlatList, View } from "react-native";
import SearchBackHeader from "../navigation/Search&BackHeader";
import { useSearchHook } from "./hooks";
import { styles } from "./styles";

const Search = () => {
	let { result, onStateChange } = useSearchHook();

	return (
		<View style={styles.container}>
			<SearchBackHeader autoFocus={true} onChange={onStateChange("text")} />
			<FlatList
				numColumns={2}
				data={result}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				renderItem={(props) => <ProductItem {...props} />}
				style={styles.container2}
			/>
		</View>
	);
};

export default Search;
