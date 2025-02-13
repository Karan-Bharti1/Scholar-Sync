import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { teachersGetUrl } from "../../urls";
export const fetchTeachers=createAsyncThunk("teachers/fetchTeachers",async()=>{
const response=await axios.get(teachersGetUrl)
return response.data
})
export const   deleteTeacher=createAsyncThunk("teachers/deleteTeacher",async(id)=>{
    const response=await axios.delete(`${teachersGetUrl}/${id}`)
    console.log(response.data)
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
        builder.addCase(deleteTeacher.pending,(state,action)=>{
            state.status="loading"
        })
        builder.addCase(deleteTeacher.fulfilled,(state,action)=>{
            state.status="succeeded"
            state.teachers=state.teachers.filter(teacher=>teacher._id===action.payload.id)
        })
        builder.addCase(deleteTeacher.rejected,(state,action)=>{
            state.status="error"
            state.error=action.payload.message
        })
    }
})
export default teacherSlice.reducer