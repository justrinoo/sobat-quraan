import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap'
export default function Navigation(){
    return(
        <>
       <Container>
       <Navbar bg="transparent" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
       </Container>
        </>
    )
}