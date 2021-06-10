import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar className="bg-info" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/" className="text-dark mb-2">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/create-Customer" className="text-dark ">
            New Customer
          </Nav.Link>

          <Nav.Link as={Link} to="/Customer-list" className="text-dark ">
            Customer List
          </Nav.Link>

          <Nav.Link as={Link} to="/policy-list" className="text-dark ">
            Policy List
          </Nav.Link>

          <Nav.Link as={Link} to="/payments" className="text-dark ">
            Payments
          </Nav.Link>

          <Nav.Link as={Link} to="/payment-list" className="text-dark ">
            Payment history
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
