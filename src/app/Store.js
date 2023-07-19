import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice"
import crudReducer from "./crudSlice";
export const Store = configureStore({
    reducer:{
        counterReducer,
        crudReducer,
    }
})