import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { fetchStudents } from "../features/students/studentsSlicer";

const Classes=()=>{
    const dispatch=useDispatch()
    const state=useSelector(state=>state.students)
  const[genderFilter,setGenderFilter]=useState("")
  const [sortData,setSortData]=useState("")
    useEffect(()=>{dispatch(fetchStudents())},[dispatch])
    const [studentData,setStudentData]=useState([])
    useEffect(()=>{
        if(state.students.length>0){
            setStudentData(state.students)
        }
    },[state])
    console.log(studentData)
    const filteredData=studentData.filter(student=>{
        const matchesFilter=genderFilter==="All"||genderFilter===""||student.gender===genderFilter
        return matchesFilter
    })
    if(sortData==="name"){
        filteredData.sort((a,b)=>a.name.localeCompare(b.name))
    }
    else if(sortData==="marks"){
        filteredData.sort((a,b)=>b.marks-a.marks)
    }
    else if(sortData==="attendance"){
        filteredData.sort((a,b)=>b.attendance-a.attendance)
    }
    const displayData=filteredData?.map((student)=>(
        <li key={student._id}>
            {student.name}-{student.gender}-Marks: {student.marks===null?"Please Update Marks":student.marks}-Attendance: {student.attendance===null?"Please Update attendance":student.attendance}
        </li>
    ))
    return(<>
    <Header/>

    <main className="container">
    <h2 className="my-3">Class View</h2>
    <label htmlFor="genderFilter"><strong>Filter by Gender: </strong></label>{"  "}
    <select id="genderFilter" onChange={e=>setGenderFilter(e.target.value)}>
        <option value="">---Select---</option>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select><br/><br/>
    <label><strong>Sort By:</strong></label>{" "}
    <select onChange={e=>setSortData(e.target.value)}>
        <option value="">--Select--</option>
        <option value="name">Name</option>
        <option value="marks">Marks</option>
        <option value="attendance">Attendance</option>
    </select>
<hr/>
<ul>
    {displayData}
</ul>
    </main>
    </>)
}
export default Classes;