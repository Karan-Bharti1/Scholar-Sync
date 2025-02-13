import { Link, useParams } from "react-router-dom"
import Header from "../components/Header"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTeachers } from "../features/teachers/teacherSlicer"

const ViewTeacher=()=>{
    const dispatch=useDispatch()
    const {teacherId}=useParams()
   
    useEffect(()=>{
        dispatch(fetchTeachers())
    },[dispatch])
    const teachers=useSelector(state=>state.teacherSlice)
    const requiredTeacher=teachers.status==="succeeded" && teachers.teachers.find(teacher=>teacher._id===teacherId)
    console.log(requiredTeacher)
    return(<>
    <Header/>
    <main className="container">
        <h1 className="my-3">Teacher's Details</h1>

<h2>{requiredTeacher.teacherName}</h2>
<hr/>
<p className="fs-4"><strong>Contact: </strong>{requiredTeacher.phoneNumber}</p>
<hr/>
<p className="fs-4"><strong>Email Id: </strong>{requiredTeacher.emailId}</p>
<hr/>

<p className="fs-4"><strong>Gender: </strong>{requiredTeacher.gender}</p>
<hr/>
<p className="fs-4"><strong>Qualification: </strong>{requiredTeacher.qualification}</p>
<hr/>
<p className="fs-4"><strong>Result Percentage: </strong>{requiredTeacher.resultPercentage}</p>
<hr/>
<Link className="btn btn-warning">Edit Details</Link> <button className="btn btn-danger mx-3">Delete</button>
    </main>
    </>)}
    export default ViewTeacher;