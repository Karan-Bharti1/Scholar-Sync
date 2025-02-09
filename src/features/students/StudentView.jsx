import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../students/studentsSlicer";

const StudentView=()=>{
   const {students}=useSelector(state=>state)
  
   const dispatch=useDispatch()
   useEffect(()=>{
  dispatch(fetchStudents())
   },[])
   return(<>
{students.status==="loading" && <p>Loading...</p>}
        {students.error && <p>{error}</p>}
       { students.status!="loading" && <ul className="list-group">
        {students.students.map(student=><li className="list-group-item" key={student._id}>{student.name } (age: {student.age})</li>)}
        </ul>}
   </>)
}
export default StudentView;