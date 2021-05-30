import { combineReducers } from "redux";
import bagSlice from "./bag/bagSlice";
import favouriteSlice from "./favourite/favouriteSlice";
import  productSlice from "./products/productSlice";
import userSlice  from "./user/userSlice";

const rootReducer = combineReducers({
    user: userSlice,
    products: productSlice,
    bag: bagSlice,
    favourite: favouriteSlice
})

export default rootReducer