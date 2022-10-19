import {configureStore} from "@reduxjs/toolkit";
import dateReducer from "./counterSlice"

export const store = configureStore({
    reducer:{
        date: dateReducer,
    }
})