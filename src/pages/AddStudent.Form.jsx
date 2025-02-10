import { useState } from "react";
import Header from "../components/Header";
import StudentForm from "../components/StudentForm";
import { useDispatch } from "react-redux";
import { addSudent } from "../features/students/studentsSlicer";


const AddStudentForm=()=>{
    const [successMessage,setSuccessMessage]=useState("")
    const dispatch=useDispatch()
    const [studentName,setStudentName]=useState({
        name:"",
        age:"",
        grade:"",
        gender:"",
        marks:"",
        attendance:""
    })
    const handleChange=(event)=>{
const {name,value}=event.target;
setStudentName(prev=>
    ({...prev,
    [name]:name==="age"?parseFloat(value):value
})
)
    }
    const handleSubmit=(event)=>{
event.preventDefault()
dispatch(addSudent(studentName))
setSuccessMessage("Data Updated Successfully")
setTimeout(()=>setSuccessMessage(""),1500)
    }
return(<>
<Header/>
<main className="container">
    <h2 className="my-3">Add Student</h2>
    <form onSubmit={handleSubmit}>
    <StudentForm studentName={studentName} handleChange={handleChange} editChange={false}/>
    <button className="btn btn-danger">Add</button>
    </form>
    <h2 className="text-danger my-3">{successMessage}</h2>
</main>
</>)
}
export default AddStudentForm;