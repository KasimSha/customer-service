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
          <Nav.Link as={Link} to="/New-customer" className="text-dark ">
            New Customer
          </Nav.Link>

          <Nav.Link as={Link} to="/policy-list" className="text-dark ">
            Policy List
          </Nav.Link>

          <Nav.Link as={Link} to="/customer-list" className="text-dark ">
            CustomerList
          </Nav.Link>

          <Nav.Link as={Link} to="/payments" className="text-dark ">
            Payments
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
