import { ProductItemResponse } from "@novomarkt/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

export interface FavoriteItemProps {
	data: ProductItemResponse;
	count: number;
}
export interface FavoriteItemProps {
	data: ProductItemResponse;
	count: number;
}

interface InitialState {
	[key: string]: ProductItemResponse;
	// items: [];
}

let initialState: InitialState = {};

const favoriteSlice = createSlice({
	name: "favorite",
	initialState,
	reducers: {
		addToFavorite: (state, { payload }: PayloadAction<ProductItemResponse>) => {
			state[payload.id?.toString() || ""] = payload;
			return state;
		},
		removeFromFavorite: (state, action: PayloadAction<string>) => {
			let st = Object.keys(state).reduce((p, c) => {
				if (c === action.payload) return p;
				return { ...p, [c]: state[c] };
			}, {});
			return st;
		},

		loadFavorite: (state, action: PayloadAction<ProductItemResponse[]>) => {
			let obj = action.payload.reduce((previous, current) => {
				if (!previous) {
					return { [current.id]: current };
				}
				return { ...previous, [current.id]: current };
			}, {});
			return obj;
		},
	},
});

export const favoriteSelector = (state: RootState) => state.favorite;

export const favoriteArraySelector = (state: RootState) =>
	Object.keys(state.favorite).map((e) => {
		return state.favorite[e];
	});

export const favoriteTotalSelector = (state: RootState) => {
	let keys = Object.keys(state.favorite);
	let count = keys.length;
	return { count };
};

export const { loadFavorite, addToFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
