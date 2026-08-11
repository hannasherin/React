import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../slice/cartslice";



export const store=configureStore({
    reducer:{
        cartInfo:cartslice
    }
})