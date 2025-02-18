import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { studentsGetUrl, teachersGetUrl } from "../../urls";
export const fetchStudentsData=createAsyncThunk("school/fetchTeachers",async()=>{
    const response=await axios.get(studentsGetUrl)
    return response.data
})
export const fetchTeachersData=createAsyncThunk("school/fetchTStudents",async()=>{
    const response=await axios.get(teachersGetUrl)
    return response.data
})
export const schoolSlice=createSlice({
name:'school',
initialState:{
    teachers:[],
    students:[],
    status:'idle',
error:null
},
reducers:{},
extraReducers:builder=>{
    builder.addCase(fetchTeachersData.pending,(state,action)=>{
        state.status="loading"
    })
    builder.addCase(fetchTeachersData.fulfilled,(state,action)=>{
        state.status="succeeded"
        state.teachers=action.payload
    })
    builder.addCase(fetchTeachersData.rejected,(state,action)=>{
        state.status="error"
        state.error=action.payload.message
    })
    builder.addCase(fetchStudentsData.pending,(state,action)=>{
        state.status="loading"
    })
    builder.addCase(fetchStudentsData.fulfilled,(state,action)=>{
        state.status="succeeded"
       
        state.students=action.payload
    })
    builder.addCase(fetchStudentsData.rejected,(state,action)=>{
        state.status="error"
        state.error=action.payload.message
    })
}
})
export default schoolSlice.reducer