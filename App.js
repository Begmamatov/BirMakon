import { COLORS } from "@novomarkt/constants/colors";
import AppRouter from "@novomarkt/routes/AppRouter";
import { persistor, store } from "@novomarkt/store/configureStore";
import { toggleLoading } from "@novomarkt/store/slices/appSettings";
import AnimatedLottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { Platform, StyleSheet, UIManager, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

if (Platform.OS === "android") {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
}

const App = () => {
	useEffect(() => {
		if (store.getState().appSettings.loading) {
			store.dispatch(toggleLoading());
		}
	}, []);
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AppRouter />
				</PersistGate>
			</Provider>
		</SafeAreaProvider>
	);
};

export default App;

const styles = StyleSheet.create({
	animation: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: COLORS.white,
	},
});
