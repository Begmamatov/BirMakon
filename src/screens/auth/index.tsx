import { ROUTES } from "@novomarkt/constants/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import ShopView from "../tabs/settings/modules/messages/components/shopView";
import { ForgotPassScreen } from "./forgot-password";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";
import { ResedSmsScreen } from "./resedSms";
import { VerificationScreen } from "./verification";

let Stack = createNativeStackNavigator();

let AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
			<Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
			<Stack.Screen name={ROUTES.VERIFICATION} component={VerificationScreen} />
			<Stack.Screen name={ROUTES.RESEDSMS} component={ResedSmsScreen} />
			<Stack.Screen name={ROUTES.FORGOTPASSWORD} component={ForgotPassScreen} />
			{/* <Stack.Screen name={ROUTES.SHOPVIEW} component={ShopView} /> */}
		</Stack.Navigator>
	);
};

export default AuthStack;
