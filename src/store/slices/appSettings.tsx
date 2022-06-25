import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

export interface QueryProps {
	query: string;
}

interface InitialState {
	query: string;
	loading: boolean;
}

let initialState: InitialState = {
	query: "",
	loading: false,
};
//  PayloadAction<QueryProps>
const appSettingsSlice = createSlice({
	name: "appSettings",
	initialState,
	reducers: {
		setQuery: (state: any, { payload }: any) => {
			state = { ...state, query: payload };
			return state;
		},

		clearQuery: () => initialState,

		toggleLoading: (state: any) => {
			return { ...state, loading: !state.loading };
		},
	},
});

export const { setQuery, clearQuery, toggleLoading } = appSettingsSlice.actions;

export const selectQuery = (state: RootState) => state.appSettings.query;

export const selectAppSettings = (state: RootState) => state.appSettings;

export default appSettingsSlice.reducer;
