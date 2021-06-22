import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CURRENT_USER } from "../data";
import { Order, ShippingAddress, User } from "../data_types";

// Define a type for the slice state
interface UserState {
    loading: boolean;
    current_user: User | null;
    error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
    loading: false,
    current_user: CURRENT_USER,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction<Order>) {
            state.current_user!.orders = [
                action.payload,
                ...state.current_user!.orders,
            ];
        },
        addShippingAddress(state, action: PayloadAction<ShippingAddress>) {
            state.current_user!.shipping_addresses = [
                action.payload,
                ...state.current_user!.shipping_addresses,
            ];
        },
        removeShippingAddress(state, action: PayloadAction<number>) {
            state.current_user!.shipping_addresses =
                state.current_user!.shipping_addresses.filter(
                    (s) => s.id !== action.payload
                );
        },
        editShippingAddress(state, action: PayloadAction<ShippingAddress>) {
          let shipp = state.current_user!.shipping_addresses.find(s => s.id === action.payload.id)
          if(shipp) {
            shipp.address = action.payload.address
            shipp.city = action.payload.city
            shipp.country = action.payload.country
            shipp.full_name = action.payload.full_name
            shipp.state = action.payload.state
          }
        },
    },
});

export const {
  addOrder,
  addShippingAddress,
  editShippingAddress, 
  removeShippingAddress
} = userSlice.actions;

export default userSlice.reducer;
