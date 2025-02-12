import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { teachersGetUrl } from "../../urls";
export const fetchTeachers=createAsyncThunk("teachers/fetchTeachers",async()=>{
const response=await axios.get(teachersGetUrl)
return response.data
})
 export const teacherSlice=createSlice({
    name:"Teachers",
    initialState:{
        teachers:[],
        status:'idle',
        error:null,
    },
    
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchTeachers.pending,(state,action)=>{
            state.status="loading"
        })
        builder.addCase(fetchTeachers.fulfilled,(state,action)=>{
            state.status="succeeded"
            state.teachers=action.payload
        })
        builder.addCase(fetchTeachers.rejected,(state,action)=>{
            state.status="error"
            state.error=action.payload.message
        })
    }
})
export default teacherSlice.reducer