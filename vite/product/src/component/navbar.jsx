import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';function BasicExample() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home">P.S Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Order
              </NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="addProduct">Add</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.4">
                Delete
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="update">
                Update
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
  );
}

export default BasicExample;