import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchStudents, updateStudentDataAsync } from "../features/students/studentsSlicer";
import StudentForm from "../components/StudentForm";
import { Link } from "react-router-dom";
const EditStudent=()=>{
    const [successMessage,setSuccessMessage]=useState("")
const {studentId}=useParams()
const students=useSelector(state=>state.students)
console.log(students)
const [studentData,setStudentData]=useState({
    name:"",
    age:"",
    grade:"",
    gender:"",
    marks:"",
    attendance:""
})
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(fetchStudents())
        },[dispatch])
        useEffect(() => {
            const displayStudent = students.students?.find(student => student._id === studentId);
            if (displayStudent) {
                setStudentData({...displayStudent});
            }
        }, [students, studentId]);
        const handleChange = (event) => {
            const { name, value, type } = event.target;
        
            setStudentData(prev => ({
                ...prev,
                [name]: type === "number" ? parseFloat(value) : value
            }));
        };
        const handleSubmit=(event)=>{
event.preventDefault()
dispatch(updateStudentDataAsync({id:studentId,updatedData:studentData}))
{students.status==="succeeded" && setSuccessMessage("Data Updated Successfully")}
setTimeout(()=>setSuccessMessage(""),1500)
        }

    return(<>
    <Header/>
    <main className="container">
        <h1 className="py-3">Edit Student Info</h1>
        <form onSubmit={handleSubmit}>
<StudentForm studentName={studentData} handleChange={handleChange} editChange={true}/>
<button className="btn btn-danger my-3">Update Data</button>
</form>
<h2 className="text-danger my-3">{successMessage}</h2>
<Link to={`/students/${studentId}` } className="btn btn-warning">Back To Info</Link>
    </main>
    </>)
}
export default EditStudent;