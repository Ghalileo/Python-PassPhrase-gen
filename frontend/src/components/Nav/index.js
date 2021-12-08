import {Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

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
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Passwords</Nav.Link>
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