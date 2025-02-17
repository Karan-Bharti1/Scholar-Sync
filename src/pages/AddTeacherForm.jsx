import { useState } from "react"
import Header from "../components/Header";

const AddTeacherForm=()=>{
const [teachersData,setTeachersData]=useState({
    teacherName:"",
    phoneNumber:"",
    gender:"",
    emailId:"",
    qualification:"",
    resultPercentage:""
})
return(<>
<Header/>
<main className="container">
<h1>Teachers Data</h1>
<form>
    <label>Name</label>
</form>
</main>
</>)

}
export default AddTeacherForm;