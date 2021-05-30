import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "../data";
import { Product } from "../data_types";

interface BagItem {
    product: Product;
    quantity: number;
}

// Define a type for the slice state
interface UserState {
    loading: boolean;
    bagItems: BagItem[] | null;
    error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
    loading: false,
    bagItems: [
        {
            product: PRODUCTS[0],
            quantity: 1,
        },
        {
            product: PRODUCTS[5],
            quantity: 1,
        },
    ],
    error: null,
};

export const bagSlice = createSlice({
    name: "bag",
    initialState,
    reducers: {
        addToBag(state, action: PayloadAction<Product>) {
            state.bagItems?.push({product: action.payload, quantity: 1})
        },
        removeFromBag(state, action: PayloadAction<number>) {
            state.bagItems = state.bagItems!.filter(s=> s.product.id !== action.payload)
        },
        incrementQuantity(state, action: PayloadAction<number>) {
            let item = state.bagItems?.find(s => s.product.id === action.payload)
            if(item) {
                item.quantity = item.quantity + 1
            } 
        },
        decrementQuantity(state, action:PayloadAction<number>){
            let item = state.bagItems?.find(s => s.product.id === action.payload)
            if(item && item.quantity > 1) {
                item.quantity = item.quantity - 1
            }
        }
    },
});

export const {
    addToBag,
    decrementQuantity,
    incrementQuantity,
    removeFromBag
} = bagSlice.actions;

export default bagSlice.reducer;
