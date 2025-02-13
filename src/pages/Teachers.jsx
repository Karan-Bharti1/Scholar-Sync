import Header from "../components/Header"
import TeacherView from "../features/teachers/TeacherView"

const Teachers=()=>{
    return(<>
    <Header/>
    <main className="container">
        <h1 className="my-3">Teachers View</h1>
    <TeacherView/>
    </main>
    
    </>)
}
 export  default Teachers;