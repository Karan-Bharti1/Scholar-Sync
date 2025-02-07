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
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
