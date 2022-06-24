import { LoginResponse, RegisterResponse } from "@novomarkt/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

export type InitialState = LoginResponse;

let initialState: InitialState = {
	balance: 0,
	date: "",
	device_id: "",
	id: -1,
	name: "",
	phone: "",
	photo: "",
	token: "",
	email: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userLoggedIn: (state, action: PayloadAction<LoginResponse>) => {
			return action.payload;
		},
		userLoggedOut: () => {
			return initialState;
		},
		userRegistered: (state, acion: PayloadAction<RegisterResponse>) => {
			return acion.payload;
		},
	},
});

export const { userLoggedIn, userLoggedOut, userRegistered } =
	userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
