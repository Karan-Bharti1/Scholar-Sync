import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStudents } from "../students/studentsSlicer";

const SchoolView=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
   dispatch(fetchStudents())
    },[])
return(<>

</>)
}
export default SchoolView;