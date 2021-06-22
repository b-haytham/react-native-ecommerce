import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  PRODUCTS } from "../data";
import { Product } from "../data_types";

// Define a type for the slice state
interface UserState {
    loading: boolean;
    products: Product[] | [];
    error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
    loading: false,
    products: PRODUCTS,
    error: null,
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        
    },
});

export const {

} = productSlice.actions;

export default productSlice.reducer;
