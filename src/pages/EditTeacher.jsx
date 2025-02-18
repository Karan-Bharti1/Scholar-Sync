import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchTeachers, updateTeacher } from "../features/teachers/teacherSlicer"
import TeacherForm from "../components/TeacherForm"

const EditTeacher=()=>{
    const [successMessage,setSuccessMessage]=useState("")
    const [teacher, setTeacher] = useState({
        teacherName: "",
        phoneNumber: "",
        gender: "",
        emailId: "",
        qualification: "",
        resultPercentage: ""
    });
    
    const {id}=useParams()
    const{ teachers}=useSelector(state=>state.teacherSlice)
  const {status}=useSelector(state=>state.teacherSlice)
    const dispatch=useDispatch()
    useEffect(()=>{
dispatch(fetchTeachers())
    },[dispatch])
    useEffect(()=>{
        const requiredTeacher=teachers?.find(teacher=>teacher._id===id)
        if(requiredTeacher){
            setTeacher({...requiredTeacher})
        }
    },[teachers,id])
    const handleChange=(event)=>{
        const {name,value,type}=event.target;
        setTeacher(prev=>({...prev,
            [name]:type=="number" ?parseFloat(value):value}))
    
    }
    console.log(teacher)
    const handleSubmit=(e)=>{
       e.preventDefault()
        dispatch(updateTeacher({id:id,data:teacher}))
        {status==="succeeded" && setSuccessMessage("Data Updated Successfully")}
setTimeout(()=>setSuccessMessage(""),1500)
    }
    return(<>
    <Header/>
    <main className="container">
        <h1 className="my-3">Edit Details</h1>
<form onSubmit={handleSubmit}>
    <TeacherForm teachersData={teacher} handleChange={handleChange}/>
</form>
<h2 className="text-danger my-3">{successMessage}</h2>
    </main>
    </>)
}
export default EditTeacher;