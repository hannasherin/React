import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartitem:[],
}
export const cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        setCart:(state,action)=>{
            const productexist=state.cartitem.find((item)=>item.id === action.payload.id)

            if(!productexist){
                state.cartitem.push(action.payload)
            }
        }
    }
})
export const {setCart}=cartslice.actions;
export default cartslice.reducer;