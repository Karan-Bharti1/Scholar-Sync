import { configureStore } from "@reduxjs/toolkit"
import {studentsSlicer} from "./features/students/studentsSlicer"
import {schoolSlice }from "./features/school/schoolSlice"
import { teacherSlice } from "./features/teachers/teacherSlicer"


export default configureStore({
    reducer:{
        students:studentsSlicer.reducer,
        schoolSlice:schoolSlice.reducer,
        teacherSlice:teacherSlice.reducer
    }
})