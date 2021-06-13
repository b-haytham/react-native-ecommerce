import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "../data";
import { Product, SIZES } from "../data_types";

export interface BagItem {
    product: Product;
    quantity: number;
    size: string;
    color: string;
}

// Define a type for the slice state
interface UserState {
    loading: boolean;
    bagItems: BagItem[] | null;
    error: string | null;
    total: number;
    products_in_bag: number[];
}

// Define the initial state using that type
const initialState: UserState = {
    loading: false,
    bagItems: [
        {
            product: PRODUCTS[0],
            quantity: 1,
            size: SIZES.M,
            color: "Black",
        },
        {
            product: PRODUCTS[5],
            quantity: 1,
            size: SIZES.M,
            color: "Red",
        },
    ],
    products_in_bag: [PRODUCTS[0].id, PRODUCTS[5].id],
    total: PRODUCTS[0].price + PRODUCTS[5].price,
    error: null,
};

export const bagSlice = createSlice({
    name: "bag",
    initialState,
    reducers: {
        addToBag(state, action: PayloadAction<BagItem>) {
            const p = state.bagItems?.find(
                (p) => p.product.id === action.payload.product.id
            );
            if (!p) {
                state.bagItems?.push({
                    product: action.payload.product,
                    quantity: 1,
                    size: action.payload.size,
                    color: action.payload.color,
                });
                state.total = +(
                    state.total + action.payload.product.price
                ).toFixed(2);
                state.products_in_bag.push(action.payload.product.id);
            }
        },
        removeFromBag(state, action: PayloadAction<number>) {
            const item = state.bagItems?.find(
                (p) => p.product.id === action.payload
            );
            if (item) {
                state.total = +(
                    state.total -
                    item.product.price * item.quantity
                ).toFixed(2);
                state.bagItems = state.bagItems!.filter(
                    (s) => s.product.id !== action.payload
                );
                state.products_in_bag = state.products_in_bag.filter(
                    (p) => p !== action.payload
                );
            }
        },
        incrementQuantity(state, action: PayloadAction<number>) {
            let item = state.bagItems?.find(
                (s) => s.product.id === action.payload
            );
            if (item) {
                item.quantity = item.quantity + 1;
                state.total = +(state.total + item.product.price).toFixed(2);
            }
        },
        decrementQuantity(state, action: PayloadAction<number>) {
            let item = state.bagItems?.find(
                (s) => s.product.id === action.payload
            );
            if (item && item.quantity > 1) {
                item.quantity = item.quantity - 1;
                state.total = +(state.total - item.product.price).toFixed(2);
            }
        },
        emptyBag(state) {
            state.bagItems = [];
            state.products_in_bag = [];
            state.total = 0
        },
    },
});

export const {
    addToBag,
    decrementQuantity,
    incrementQuantity,
    removeFromBag,
    emptyBag,
} = bagSlice.actions;

export default bagSlice.reducer;
