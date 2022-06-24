import { FilterIcon, GeoIcon, SearchIcon } from "@novomarkt/assets/icons/icons";
import Text from "@novomarkt/components/general/Text";
import BackHeader from "@novomarkt/components/navigation/BackHeader";
import { COLORS, GRADIENT_COLORS } from "@novomarkt/constants/colors";
import { STRINGS } from "@novomarkt/locales/strings";
import React, { useEffect, useRef, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import MapView, { Region } from "react-native-maps";
import { styles } from "./style";
import Geolocation from "@react-native-community/geolocation";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/core";
import { ROUTES } from "@novomarkt/constants/routes";

const CheckoutPoint = () => {
	const mapRef = useRef<MapView>(null);
	// const [userLocation, setUserLocation] = useState<Region>();

	useEffect(() => {
		// if (userLocation) mapRef.current?.animateToRegion(userLocation);
	}, []);

	let OnMyLocationPress = () => {
		Geolocation.getCurrentPosition((e) => {
			mapRef.current?.animateToRegion({
				latitudeDelta: 0.002,
				longitudeDelta: 0.002,
				...e.coords,
			});
		});
	};

	let navigation = useNavigation();

	return (
		<View style={styles.container}>
			<BackHeader name={STRINGS.pickUpPoints} style={styles.header} />
			<MapView
				ref={mapRef}
				style={styles.map}
				showsUserLocation
				showsMyLocationButton={false}
			></MapView>
			<TouchableOpacity
				style={styles.filter}
				onPress={() => navigation.navigate(ROUTES.FILTER)}
			>
				<LinearGradient
					start={{ x: 0, y: 0 }}
					end={{ x: 1.2, y: 1 }}
					colors={GRADIENT_COLORS}
					style={styles.filterInner}
				>
					<Text style={{ color: COLORS.white }}>Фильтры</Text>
					<FilterIcon fill={COLORS.white} style={styles.filterIcon} />
				</LinearGradient>
			</TouchableOpacity>
			<View style={styles.inputBox}>
				<SearchIcon fill={COLORS.blue} />
				<TextInput placeholder={"Улица,  метро"} style={styles.input} />
			</View>
			<TouchableOpacity style={styles.button} onPress={OnMyLocationPress}>
				<GeoIcon fill={COLORS.blue} />
			</TouchableOpacity>
		</View>
	);
};

export default CheckoutPoint;
