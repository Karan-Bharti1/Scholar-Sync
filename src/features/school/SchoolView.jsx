import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsData, fetchTeachersData } from "./schoolSlice";


const SchoolView=()=>{
    const {students,teachers}=useSelector(state=>state.schoolSlice)
    const dispatch=useDispatch()
  useEffect(()=>{
dispatch(fetchStudentsData())
dispatch(fetchTeachersData())
  },[])
 console.log(students)
return(<>

{ students.length>0 && teachers.length>0&&
(<>
<p className="fs-3">Total Students: {students.length}</p>
<p className="fs-3">Average Attendance: {(students.reduce((acc,curr)=>acc+curr.attendance,0)/students.length).toFixed(2)}</p>
<p className="fs-3">Average Marks: {(students.reduce((acc,curr)=>acc+curr.marks,0)/students.length).toFixed(2)}</p>
<p className="fs-3">Average Attendance:{students.reduce((acc,curr)=>curr.marks>acc.marks?curr=acc:curr,0).name}</p>
<hr/>
<p className="fs-3">Total Teachers: {teachers.length}</p>
<p className="fs-3">Average Result: {(teachers.reduce((acc,curr)=>acc+curr.resultPercentage,0)/teachers.length).toFixed(2)}</p>
<p className="fs-3">Top Result: {teachers.reduce((acc,curr)=>curr.resultPercentage>acc.resultPercentage?curr=acc:curr,0).teacherName}</p>


</>)}
</>)
}
export default SchoolView;