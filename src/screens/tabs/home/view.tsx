import SearchHeader from "@novomarkt/components/navigation/SearchHeader";
import { WINDOW_WIDTH } from "@novomarkt/constants/sizes";
import { STRINGS } from "@novomarkt/locales/strings";
import React from "react";
import { ScrollView, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import BrandsList from "./components/BrandsList";
import CarouselItem from "./components/CarouselItem";
import CategoriesList from "./components/CategoriesList";
import NewsList from "./components/NewsList";
import ProductsList from "./components/ProductsList";
import RedItem from "./components/RedItem";
import ShopsList from "./components/ShopsList";
import { useHomeScreenHooks } from "./hooks";
import { styles } from "./style";

const HomeView = () => {
	let { setActiveSlide, activeSlide, slide } = useHomeScreenHooks();

	return (
		<>
			<SearchHeader />
			<ScrollView style={styles.scroll}>
				<View style={styles.container}>
					<Carousel
						onSnapToItem={(index) => setActiveSlide(index)}
						itemWidth={WINDOW_WIDTH}
						windowSize={WINDOW_WIDTH}
						sliderWidth={WINDOW_WIDTH}
						itemHeight={200}
						sliderHeight={200}
						data={slide}
						renderItem={CarouselItem}
						pagingEnabled
					/>
					<Pagination activeDotIndex={activeSlide} dotsLength={slide.length} />
				</View>
				<BrandsList />
				<ShopsList />
				<ProductsList />
				<ProductsList title={STRINGS.productsOnSale} />
				<NewsList />
				<ProductsList title={STRINGS.recentlyWatched} />
				<RedItem />
				<RedItem />
			</ScrollView>
		</>
	);
};

export default HomeView;
