import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "../data";
import { Order, OrderStatus } from "../data_types";

// Define a type for the slice state
interface UserState {
    loading: boolean;
    orderItems: Order[];
    error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
    loading: false,
    orderItems: [
        {
            id: 0,
            status: OrderStatus.PENDING,
            user: 1,
            order_items: [
                {
                    product: PRODUCTS[0],
                    quantity: 2,
                    color: 'Black',
                    size: 'L'
                },
            ],
            total_amount: +(PRODUCTS[0].price * 2 + 7).toFixed(2),
            tracking_number: "IW5481321694",
            date: "2020-04-18",
        },
        {
            id: 1,
            status: OrderStatus.SUCCESS,
            user: 1,
            order_items: [
                {
                    product: PRODUCTS[1],
                    quantity: 1,
                    color: 'Black',
                    size: 'L'
                },
                {
                    product: PRODUCTS[6],
                    quantity: 2,
                    color: 'Black',
                    size: 'L'
                },
            ],
            total_amount: +(PRODUCTS[1].price + PRODUCTS[6].price * 2 + 7).toFixed(2),
            tracking_number: "IW5481321888",
            date: "2021-02-19",
        },
        {
            id: 2,
            status: OrderStatus.CANCELLED,
            user: 1,
            order_items: [
                {
                    product: PRODUCTS[3],
                    quantity: 1,
                    color: 'Black',
                    size: 'L'
                },
                {
                    product: PRODUCTS[4],
                    quantity: 1,
                    color: 'Black',
                    size: 'L'
                },
                {
                    product: PRODUCTS[8],
                    quantity: 1,
                    color: 'Black',
                    size: 'L'
                },
            ],
            total_amount:
                +(PRODUCTS[3].price + PRODUCTS[4].price + PRODUCTS[8].price + 7).toFixed(2),
            tracking_number: "IW5481321264",
            date: "2021-08-22",
        },
    ],
    error: null,
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction<Order>) {
            state.orderItems.push(action.payload)
        }
    },
});

export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer;
