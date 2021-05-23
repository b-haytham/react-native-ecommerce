import { combineReducers } from "redux";
import userSlice  from "./user/userSlice";

const rootReducer = combineReducers({
    user: userSlice
})

export default rootReducer