import Navbar from './component/navbar.jsx';
// import { Outlet } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AddProduct from './component/addproduct.jsx'
import Fetchall from './component/fetchall.jsx'
import Update from './component/update.jsx'
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route path='/' element={<Fetchall/>}/>
      <Route path='addProduct' element={<AddProduct/>}/>
      <Route path="update/:id" element={<Update/>} />  
        </Route>
  )
)
function App() {
  return (
    <>
      <RouterProvider router={router}/>
  </>
  );

}

export default App
