import { ROUTES } from "@novomarkt/constants/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { ForgotPassScreen } from "./forgot-password";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";
import { VerificationScreen } from "./verification";

let Stack = createNativeStackNavigator();

let AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
			<Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
			<Stack.Screen
				name={ROUTES.VERIFICATION}
				component={VerificationScreen}
			/>
			<Stack.Screen
				name={ROUTES.FORGOTPASSWORD}
				component={ForgotPassScreen}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;
