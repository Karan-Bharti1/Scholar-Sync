import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../students/studentsSlicer";
import { Link } from "react-router-dom";

const StudentView=()=>{
   const {students}=useSelector(state=>state.students)
  
   const dispatch=useDispatch()
   useEffect(()=>{
  dispatch(fetchStudents())
   },[])
   return(<>
{students.status==="loading" && <p>Loading...</p>}
        {students.error && <p>{error}</p>}
       { students.status!="loading" && <ul className="list-group">
        {students.map(student=><li className="list-group-item" key={student._id}><Link to={`/students/${student._id}`}>{student.name } (age: {student.age})</Link></li>)}
        </ul>}
   </>)
}
export default StudentView;