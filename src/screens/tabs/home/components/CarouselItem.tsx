import { appendUrl } from "@novomarkt/api/requests";
import { SliderTypes } from "@novomarkt/api/types";
import { COLORS } from "@novomarkt/constants/colors";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import React, { JSXElementConstructor, ReactElement } from "react";
import { Image, StyleSheet, View } from "react-native";
import { AdditionalParallaxProps } from "react-native-snap-carousel";

export type CarouselItemProps = { item: string; index: number };

const CarouselItem = (
	{ item }: { item: SliderTypes; index: number },
	parallaxProps?: AdditionalParallaxProps
): ReactElement<any, string | JSXElementConstructor<any>> | null => {
	return (
		<View>
			<Image source={{ uri: appendUrl(item.photo) }} style={styles.image} />
		</View>
	);
};

export default CarouselItem;

const styles = StyleSheet.create({
	image: {
		width: WINDOW_WIDTH - 32,
		height: 200,
		borderRadius: 8,
		marginHorizontal: 16,
	},
	dot: {
		width: 20,
		height: 20,
		borderRadius: 20,
		backgroundColor: COLORS.lightGray,
	},
});
