import { useState } from "react"
import Header from "../components/Header";
import TeacherForm from "../components/TeacherForm";
import { useDispatch, useSelector } from "react-redux";
import { addNewTeacher } from "../features/teachers/teacherSlicer";

const AddTeacherForm=()=>{
const [teachersData,setTeachersData]=useState({
    teacherName:"",
    phoneNumber:"",
    gender:"",
    emailId:"",
    qualification:"",
    resultPercentage:""
})
const [message,setMessage]=useState({visible:false,message:"Data Added Successfully"})
const state=useSelector(state=>state.teacherSlice.status)
console.log(state)
const handleChange=(event)=>{
    const {name,value}=event.target;
    setTeachersData(prev=>({...prev,
        [name]:name==="resultPercentage"?parseFloat(value):value}))

}
const dispatch=useDispatch()
const handleSubmit=e=>{
    e.preventDefault()

dispatch(addNewTeacher(teachersData))
setTeachersData({  teacherName:"",
phoneNumber:"",
gender:"",
emailId:"",
qualification:"",
resultPercentage:""})
 setMessage(prev=>({...prev,visible:true}))
setTimeout(()=>{
    setMessage(prev=>({...prev,visible:false}))
},1500)

}
return(<>
<Header/>
<main className="container">
<h1 className="my-3">Teachers Data</h1>
<form onSubmit={handleSubmit}>
   <TeacherForm teachersData={teachersData} handleChange={handleChange}/>
</form>
{message.visible && <h2>{message.message}</h2>}
</main>
</>)

}
export default AddTeacherForm;