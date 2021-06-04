import { combineReducers } from "redux";
import bagSlice from "./bag/bagSlice";
import favouriteSlice from "./favourite/favouriteSlice";
import orderSlice  from "./orders/orderSlice";
import  productSlice from "./products/productSlice";
import userSlice  from "./user/userSlice";

const rootReducer = combineReducers({
    user: userSlice,
    products: productSlice,
    bag: bagSlice,
    favourite: favouriteSlice,
    orders: orderSlice
})

export default rootReducer