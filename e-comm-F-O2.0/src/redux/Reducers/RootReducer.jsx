import { combineReducers } from "@reduxjs/toolkit";
import { bestsellerData } from "./Reducer";
import { signupUserData } from "./UserReducer";

export default combineReducers({
    bestsellerData,
    signupUserData
})