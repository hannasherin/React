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
      deleteUser:(state,action)=>{
          state.users=state.users.filter((item,index)=>index !== action.payload)
      }
   }
})
 export const {setUsers , deleteUser}=userSlice.actions;
 export default userSlice.reducer;
