import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/userSlice";
import productSlice from "../slice/productSlice";

export const store=configureStore({
    reducer :{
        userInfo:userSlice ,
        productInfo:productSlice,
    }
})