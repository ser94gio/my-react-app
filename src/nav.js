import Container from 'react-bootstrap/Container';
import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <>
          <Navbar fixed="top" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <img
                      src="./logo.png"
                      width="35"
                      height="35"  
                      alt="Logo"
                      className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/my-react-app">Home</Nav.Link>
                    <Nav.Link as={Link} to="/my-react-app/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/my-react-app/Experience">Experience</Nav.Link>
                </Nav>
            </Container>
          </Navbar>
        <Outlet />
    </>
  );
}