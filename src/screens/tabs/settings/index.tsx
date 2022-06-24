import { ROUTES } from "@novomarkt/constants/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SettingsController from "./controller";
import ChatsView from "./modules/chats/view";
import CommentView from "./modules/comments/view";
import ContactsView from "./modules/contacts/view";
import MessageView from "./modules/messages/view";
import OrderView from "./modules/orders/view";
import { UserEditingForm } from "./modules/profile/components/userEditing";
import ProfileView from "./modules/profile/view";
import QuestionsView from "./modules/questions/view";

let Stack = createNativeStackNavigator();

export let SettingsStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen component={SettingsController} name={ROUTES.SETTINGS} />
			<Stack.Screen component={ProfileView} name={ROUTES.PROFILE} />
			<Stack.Screen component={OrderView} name={ROUTES.ORDER} />
			<Stack.Screen component={CommentView} name={ROUTES.COMMENT} />
			<Stack.Screen component={MessageView} name={ROUTES.MESSAGE} />
			<Stack.Screen component={QuestionsView} name={ROUTES.QUESTIONS} />
			<Stack.Screen component={ContactsView} name={ROUTES.CONTACTS} />
			<Stack.Screen component={ChatsView} name={ROUTES.CHATS} />
			<Stack.Screen component={UserEditingForm} name={ROUTES.USER_EDITING} />
		</Stack.Navigator>
	);
};
