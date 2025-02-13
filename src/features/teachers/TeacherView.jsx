import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "./teacherSlicer";
import { Link } from "react-router-dom";

const TeacherView=()=>{

    const{ teachers}=useSelector(state=>state.teacherSlice)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchTeachers())
    },[dispatch])
    console.log(teachers)
    return(<ul className="list-group my-3">
    {Array.isArray(teachers) && teachers.map(teacher=>(
        <li key={teacher._id} className="list-group-item"><Link to={`/teachers/${teacher._id}`}>{teacher.teacherName}-{teacher.qualification}</Link></li>
    ))}
    </ul>)
}
export default TeacherView;