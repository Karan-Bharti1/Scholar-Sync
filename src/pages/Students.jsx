import Header from "../components/Header"
import StudentView from "../features/students/StudentView"

const Students=()=>{
    return(<>
    <Header/>
    <main className="container">
    <h1>Student View</h1>
    <StudentView/>
    </main>
    </>)
}
export default Students