import {Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import styled from "styled-components";

import { AccountBox } from "../accountBox";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Navigation = () => {
    return (
        <>
        <Navbar bg="light" expand={false}>
  <Container fluid>
  
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Username Holder</Offcanvas.Title>
        <br>
        </br>
        <Offcanvas.Title id="offcanvasNavbarLabel">Email Holder</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <div>
        <AppContainer>
          <AccountBox />
        </AppContainer>
        </div>
          <Nav.Link href="#action2">Other Items</Nav.Link>
          
        </Nav>
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </>
    )
}

export default Navigation;