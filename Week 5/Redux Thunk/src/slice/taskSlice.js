import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";
const initialState={
    tasks:[],
    isloading:false,
    error:'',
}

export const getTaskFromServer=createAsyncThunk(
    'tasks/getTaskFromServer', //type
    async(_,{rejectWithValue})=>{  //function rejectwithvalue- thunk api 
        try {
            const response=await api.get('/tasks')
            return response.data

        } catch (error) {
            return rejectWithValue('no task found')
        }
        
    }
)

const taskSlice=createSlice({
    name:'tasks',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder
        //   pending 
        .addCase(getTaskFromServer.pending , (state,action)=>{
          state.isloading=true;
          state.errorr='';
          
        })
        // success 
        .addCase(getTaskFromServer.fulfilled,(state,action)=>{
            state.isloading=false;
            state.error='';
            state.task=action.payload
        
        })
        // error 
        .addCase(getTaskFromServer.rejected,(state,action)=>{
            state.isloading=false;
            state.error=action.payload
            state.tasks=[]
        })

    }
})
export default  taskSlice.reducer