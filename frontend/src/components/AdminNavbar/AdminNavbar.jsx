import React from "react";
import {
  Container,
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
const AdminNavbar = () => {
  return (
    <div>
      <Container fluid>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Username</NavLink>
            </NavItem>
            <NavItem>
              <Button color="primary" className="ml-3">
                Logout
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default AdminNavbar;
