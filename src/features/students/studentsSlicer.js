import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { studentsGetUrl } from "../../urls";
export const fetchStudents=createAsyncThunk("students/fetchStudents",async()=>{
    const response=await axios.get(studentsGetUrl)
   
    return response.data
})
export const studentsSlicer=createSlice({
name:"students",
initialState:{
students:[],
status:"idle",
error:null
},
reducers:{},
extraReducers:(builder)=>{
    builder.addCase(fetchStudents.pending,(state)=>{
        state.status="loading"
    })
    builder.addCase(fetchStudents.fulfilled,(state,action)=>{
        state.status="succeeded"
        state.students=action.payload
    })
    builder.addCase(fetchStudents.rejected,(state,action)=>{
        state.status="error"
    state.error=action.payload.message
    })
}
})
export default studentsSlicer.reducer