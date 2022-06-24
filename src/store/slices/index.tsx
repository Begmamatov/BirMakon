import { combineReducers } from "redux";
import appSettingsReducer from "./appSettings";
import cartReducer from "./cartSlice";
import favoriteSlice from "./favoriteSlice";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
	appSettings: appSettingsReducer,
	favorite: favoriteSlice,
});
