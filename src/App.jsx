import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/Header'
import { imgUrl } from "./urls"

function App() {


  return (
    <>
    <Header/>
  <main className="container">
    <img id="img-home" src={imgUrl} className="img-fluid"/>
    <section className="text-center my-3">
    <h1>Welcome to School Student Management App</h1>
        <p className="fs-5">Manage student records efficiently with our easy-to-use platform.</p>
        </section>
        <div className="my-4">
            <h2 className="text-center"> Features</h2>
            <ul className="list-group my-3">
                <li className="list-group-item">📚 Student Enrollment & Records</li>
                <li className="list-group-item">📊 Performance Tracking</li>
                <li className="list-group-item">📅 Attendance Management</li>
                <li className="list-group-item">📨 Communication with Parents</li>
                <li className="list-group-item">📜 Report Generation</li>
            </ul>
        </div>
  </main>
    </>
  )
}

export default App
