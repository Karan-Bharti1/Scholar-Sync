import { configureStore } from "@reduxjs/toolkit"
import {studentsSlicer} from "./features/students/studentsSlicer"
import {schoolSlice }from "./features/school/schoolSlice"


export default configureStore({
    reducer:{
        students:studentsSlicer.reducer,
        schoolSlice:schoolSlice.reducer
    }
})