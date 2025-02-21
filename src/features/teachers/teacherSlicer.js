import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { teachersGetUrl } from "../../urls";
export const fetchTeachers=createAsyncThunk("teachers/fetchTeachers",async()=>{
const response=await axios.get(teachersGetUrl)
return response.data
})
export const   deleteTeacher=createAsyncThunk("teachers/deleteTeacher",async(id)=>{
    const response=await axios.delete(`${teachersGetUrl}/${id}`)
    
    return response.data
})
export const addNewTeacher=createAsyncThunk("teachers/addTeachers",async(data)=>{
    const response=await axios.post(teachersGetUrl,data,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
    })
    return response.data
})
export const updateTeacher=createAsyncThunk("teachers/updateTeachers",async({id,data})=>{
    const response=await axios.put(`${teachersGetUrl}/${id}`,data,{
        headers:{
            'Content-Type':'application/json'
        }
    })
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
        builder.addCase(addNewTeacher.pending,(state,action)=>{
            state.status="loading"
        })
        builder.addCase(addNewTeacher.fulfilled,(state,action)=>{
            state.status="succeeded"
            const index=state.teachers.findIndex(teacher=>teacher._id===action.payload._id)
            if(index!==-1){
 state.teachers[index]=action.payload
            }
        })
        builder.addCase(addNewTeacher.rejected,(state,action)=>{
            state.status="error"
            state.error=action.payload.message
        })
        builder.addCase(updateTeacher.pending,(state,action)=>{
            state.status="loading"
        
        })
builder.addCase(updateTeacher.fulfilled,(state,action)=>{
    state.status="succeeded"
    const index = state.teachers.findIndex((teacher) => teacher._id === action.payload.updatedData._id);
   console.log(index)
    if (index !== -1) {
        state.teachers[index] = action.payload.updatedData; 
      }
})
        builder.addCase(updateTeacher.rejected,(state,action)=>{
            state.status="error"
            state.error=action.payload
        })
    }
})
export default teacherSlice.reducer