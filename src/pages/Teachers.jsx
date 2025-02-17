import { Link } from "react-router-dom";
import Header from "../components/Header"
import TeacherView from "../features/teachers/TeacherView"

const Teachers=()=>{
    return(<>
    <Header/>
    <main className="container">
        <h1 className="my-3">Teachers View</h1>
        <Link to="/addteacher" className="btn btn-warning">Add Teacher</Link>
    <TeacherView/>
    </main>
    
    </>)
}
 export  default Teachers;