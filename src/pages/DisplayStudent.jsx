import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../features/students/studentsSlicer";
import { Link } from "react-router-dom";
const DisplayStudent=()=>{
   
    const {studentId}=useParams()
    const students=useSelector(state=>state.students)
    console.log(students)
    const dispatch=useDispatch()

    useEffect(()=>{
dispatch(fetchStudents())
    },[dispatch])
    const requiredStudent=students.status==="succeeded"&& students.students?.find(student=>student._id===studentId)
   
    return(<>
    <Header/>
<main className="container">
    <h1 className="my-3">Student Details</h1>
<div className="card border-0">
 {students.status==="succeeded"&&  ( <> <p className="fs-4">Name: {requiredStudent?.name}</p>
    <p className="fs-4">Age: {requiredStudent?.age}</p>
    <p className="fs-4">Gender: {requiredStudent?.gender}</p>
    <p className="fs-4">Grade: {requiredStudent?.grade}</p>
    <p className="fs-4">Marks: <span className={requiredStudent.marks==null?"text-danger":""}> {requiredStudent?.marks===null?"Edit to add marks":requiredStudent?.marks}</span></p>
   <p className="fs-4">Attendance: <span className={requiredStudent.attendance==null?"text-danger":""}> {requiredStudent?.attendance===null?"Edit to add Attendance":requiredStudent?.attendance}</span></p>
   <div>
   <Link className="btn btn-warning" to={`/edit/students/${requiredStudent._id}`}> Edit Student</Link>
   <button className="btn btn-danger mx-3">Delete</button></div> 
    </>)}
</div>
</main>
    </>)
}
export default DisplayStudent;