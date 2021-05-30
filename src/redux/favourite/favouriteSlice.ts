import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "../data";
import { Product } from "../data_types";



// Define a type for the slice state
interface UserState {
    loading: boolean;
    favourites: Product[] | null;
    error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
    loading: false,
    favourites: PRODUCTS.slice(0, 3),
    error: null,
};

export const favouriteSlice = createSlice({
    name: "bag",
    initialState,
    reducers: {
        addToFavourite(state, action:PayloadAction<Product>){
            state.favourites?.push(action.payload)
        },
        removeFromFavourite(state, action:PayloadAction<number>){
            state.favourites = state.favourites!.filter(f => f.id !== action.payload)
        },
    },
});

export const {
    addToFavourite,
    removeFromFavourite
} = favouriteSlice.actions;

export default favouriteSlice.reducer;
