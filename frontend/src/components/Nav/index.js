import {Navbar, Container, Offcanvas, Nav} from 'react-bootstrap';
import styled from "styled-components";
import './style.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'



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
  // const [userName, setuserName] = useState('');
  const [userEmail, setuserEmail] = useState('');

  // Show if a user is logged into applicatiom=n
const loginStatusHandler = () => {
  axios.get('http://127.0.0.1:8000/api/user_login', {'userEmail': userEmail})
  .then(res => console.log(res))
}
    return (
        <>
        <Navbar className="theNavBar" bg="light" expand={false}>
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
          {/* <Nav.Link href="#action2">Other Items</Nav.Link> */}
          
        </Nav>
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </>
    )
}

export default Navigation;