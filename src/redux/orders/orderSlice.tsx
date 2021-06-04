import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Define a type for the slice state
interface UserState {
    loading: boolean;
    orderItems: [] | null;
    error: string | null;

}

// Define the initial state using that type
const initialState: UserState= {
    loading: false,
    orderItems: null, 
    error: null,
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        
    },
});

export const {  } =
    orderSlice.actions;

export default orderSlice.reducer;
