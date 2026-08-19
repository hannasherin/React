import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";
const initialState = {
    tasks: [],
    isloading: false,
    error: '',
}

export const getTaskFromServer = createAsyncThunk(
    'tasks/getTaskFromServer', //type
    async (_, { rejectWithValue }) => {  //function rejectwithvalue- thunk api 
        try {
            const response = await api.get('/tasks')
            return response.data

        } catch (error) {
            return rejectWithValue('no task found')
        }

    }
)

// delete
export const deleteTask = createAsyncThunk(
    " tasks/deleteTask",
    async (id, { rejectWithValue }) => {
        try {
            await api.delete(`/tasks/${id}`)
            return id
        } catch (error) {
            return rejectWithValue('No task Found')
        }
    }
)


//post

export const addTaskToServer = createAsyncThunk(
    "  task/addTaskToServer",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await api.post('/tasks', formData)
            return response.data
        } catch (error) {
            return rejectWithValue({ error: 'no task created' })
        }
    }
)

// put 
export const updataTask = createAsyncThunk(
    "  task/updataTask",
    async (task, { rejectWithValue }) => {
        try {
            const response = await api.put(`/tasks/${task.id}`, task)
            return response.data
        } catch (error) {
            return rejectWithValue({ error: 'no task created' })
        }
    }
)



const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //   pending 
            .addCase(getTaskFromServer.pending, (state, action) => {
                state.isloading = true;
                state.errorr = '';

            })
            // success 
            .addCase(getTaskFromServer.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = '';
                state.tasks = action.payload

            })
            // error 
            .addCase(getTaskFromServer.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.payload
                state.tasks = []
            })

            // ==============Delete Task ==========
            .addCase(deleteTask.pending, (state, action) => {
                state.isloading = true
            })

            .addCase(deleteTask.fulfilled, (state, action) => {
                state.isloading = false

                state.tasks = state.tasks.filter((task) => task.id !== action.payload)
            })

            .addCase(deleteTask.rejected, () => {
                state.isloading = false
                state.error = action.payload

            })
            //    ========create Task=====

            .addCase(addTaskToServer.pending, (state, action) => {
                state.isloading = true

            })

            .addCase(addTaskToServer.fulfilled, (state, action) => {
                state.isloading = false
                state.tasks.push(action.payload)
            })

            .addCase(addTaskToServer.rejected, (state, action) => {
                state.isloading = false
                state.error = action.payload.error
            })

            // =============update task=======

            .addCase(updataTask.pending, (state, action) => {
                state.isloading = true
                state.error = ''

            })

            .addCase(updataTask.fulfilled, (state, action) => {
                state.isloading = false
                state.tasks = state.tasks.map((item) =>
                    item.id === action.payload.id ? action.payload : item)
            })

            .addCase(updataTask.rejected, (state, action) => {
                state.isloading = false
                state.error=action.payload?.error || 'No  Task Update'

            })

    }
})
export default taskSlice.reducer