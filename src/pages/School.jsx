import Header from "../components/Header"
import SchoolView from "../features/school/SchoolView"

const School=()=>{
    return(<>
    <Header/>
    <main className="container">
    <h2 className="my-3">School View</h2>  
    <SchoolView/>
    </main>
   
    </>)
}
export default School