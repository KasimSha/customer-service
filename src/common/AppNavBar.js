import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="warning" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/" className="text-dark mb-2">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/create-Customer" className="text-dark ">
            New Customer
          </Nav.Link>
          <Nav.Link as={Link} to="/list-Customer" className="text-dark ">
            Customer Profile
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
