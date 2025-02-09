import { Link } from "react-router-dom"
import Header from "../components/Header"
import StudentView from "../features/students/StudentView"

const Students=()=>{
    return(<>
    <Header/>
    <main className="container">
    <h1>Student View</h1>
    <Link className="btn btn-warning my-3" to="/addstudent">Add Student</Link>
    <StudentView/>
    </main>
    </>)
}
export default Students