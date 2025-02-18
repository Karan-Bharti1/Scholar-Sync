import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Students from './pages/Students.jsx'
import Classes from './pages/Classes.jsx'
import School from './pages/School.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
import AddStudentForm from './pages/AddStudent.Form.jsx'
import DisplayStudent from './pages/DisplayStudent.jsx'
import EditStudent from './pages/EditStudent.jsx'
import Teachers from './pages/Teachers.jsx'
import ViewTeacher from './pages/ViewTeacher.jsx'
import AddTeacherForm from './pages/AddTeacherForm.jsx'
import EditTeacher from './pages/EditTeacher.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
 { path:"/students",
  element:<Students/>},
  {
    path:"/classes",
    element:<Classes/>
  },
  {
    path:"/school",
    element:<School/>
  },
  {path:"/addstudent",
element:<AddStudentForm/>},
{
  path:"/students/:studentId",
  element:<DisplayStudent/>
},{
  path:"/edit/students/:studentId",
  element:<EditStudent/>
},{
  path:"/teachers",
  element:<Teachers/>
},{
  path:"/teachers/:teacherId",
  element:<ViewTeacher/>
},{
  path:"/addteacher",
  element:<AddTeacherForm/>
},{
  path:"/editteacher/:id",
  element:<EditTeacher/>
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
