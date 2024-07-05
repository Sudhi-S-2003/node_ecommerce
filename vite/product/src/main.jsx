import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import AddProduct from './component/addproduct.jsx'
import Fetchall from './component/fetchall.jsx'


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Fetchall/>}/>
      <Route path='addProduct' element={<AddProduct/>}/>
      </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <RouterProvider router={router}/>

   </React.StrictMode>, 
 
 

)
