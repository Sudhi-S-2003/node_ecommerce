import Navbar from './component/navbar.jsx';
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';

// import Fetchall from './component/fetchall.jsx'
// import AddProduct from './component/addproduct.jsx'

function App() {
  return (
    <>
  <Navbar/>
  <Container>

 <Outlet/>
 </Container>
  </>
  );

}

export default App
