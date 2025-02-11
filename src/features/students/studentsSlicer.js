import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { studentsGetUrl, studentsPostUrl } from "../../urls";
export const fetchStudents=createAsyncThunk("students/fetchStudents",async()=>{
    const response=await axios.get(studentsGetUrl)
    return response.data
})
export const addSudent=createAsyncThunk("students/addStudent",async(studentData)=>{
const response=await axios.post(studentsPostUrl,studentData,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    }
})


return response.data
})

export const updateStudentDataAsync=createAsyncThunk("students/updateStudents",async({id,updatedData})=>{
    const response=await axios.put(`${studentsPostUrl}/${id}`,updatedData,{
        headers:{
            'Content-Type':'application/json'
        }
    })
   
    return response.data
})
export const deleteStudentData=createAsyncThunk("students/deleteStudent",async(id)=>{
    const response=await axios.delete(`${studentsPostUrl}/${id}`)
    console.log(response)
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
    builder.addCase(addSudent.pending,(state,action)=>{
        state.status="loading"
    })
    builder.addCase(addSudent.fulfilled,(state,action)=>{
        state.status="succeeded"
        state.students.push(action.payload)
    })
    builder.addCase(addSudent.rejected,(state,action)=>{
        state.status="rejected"
        state.students=action.payload.message
    })
    builder.addCase(updateStudentDataAsync.pending,(state,action)=>{
        state.status="loading"
    })
    builder.addCase(updateStudentDataAsync.fulfilled,(state,action)=>{
        state.status="succeeded"
        const index = state.students.findIndex((student) => student.id === action.payload.id);
        if (index !== -1) {
            state.students[index] = action.payload; 
          }
    })
    builder.addCase(updateStudentDataAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload.message;
      })
      .addCase(deleteStudentData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteStudentData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.students = state.students.filter((student) => student.id !== action.payload);
      })
      .addCase(deleteStudentData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
}
})
export default studentsSlicer.reducer