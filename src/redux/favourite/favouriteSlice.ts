import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "../data";
import { Product, SIZES } from "../data_types";


export interface FavouriteItem {
    product: Product;
    size: SIZES;
    color: string;
}
// Define a type for the slice state
interface UserState {
    loading: boolean;
    favourites: FavouriteItem[] ;
    products_in_favourite: number []
    error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
    loading: false,
    favourites: [
        {
            product: PRODUCTS[0],
            size: SIZES.XL,
            color: 'Black'
        },
        {
            product: PRODUCTS[9],
            size: SIZES.XL,
            color: 'Black'
        },
    ],
    products_in_favourite: [PRODUCTS[0].id, PRODUCTS[9].id],
    error:null,
    
};

export const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addToFavourite(state, action:PayloadAction<FavouriteItem>){
            const favourite = state.favourites.find(f => f.product.id === action.payload.product.id) 
            if(!favourite) {
                state.favourites.push(action.payload)
                state.products_in_favourite.push(action.payload.product.id)
            }
        },
        removeFromFavourite(state, action:PayloadAction<number>){
            state.favourites = state.favourites.filter(f => f.product.id !== action.payload)
            state.products_in_favourite = state.products_in_favourite.filter(f => f !== action.payload)
        },
    },
});

export const {
    addToFavourite,
    removeFromFavourite
} = favouriteSlice.actions;

export default favouriteSlice.reducer;
