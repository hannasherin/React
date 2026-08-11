import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[],
}

export const userSlice=createSlice({  //it contain object
   name:'users', //it must be a unique name
   initialState: initialState,
   reducers:{
     setUsers:(state,action)=>{
     state.users=[...state.users,action.payload]
        },
    
   }
})
 export const {setUsers}=userSlice.actions;
 export default userSlice.reducer;
