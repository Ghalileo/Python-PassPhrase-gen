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
  const [email, setEmail] = useState('');

  // Show if a user is logged into application
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/user_login')
    .then(res => {
      setEmail(res.data)
    }).catch((err) => {
      if (err.response)  {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.header)
      } else if(err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message)
      }

    })
  },[])

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
                <br/>
                <br/>
                <button className='fa fa-home' style={{position:"relative", right:"20px"}}><a href="/"  >Home</a></button>
                <Offcanvas.Title id="offcanvasNavbarLabel">Email Holder</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div>
                    <AppContainer>
                      <AccountBox />
                    </AppContainer>
                  </div>
                </Nav>              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      <br/>
      <br/>
      <br/>
        </>
    )
}

export default Navigation;