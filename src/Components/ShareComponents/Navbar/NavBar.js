import React from 'react';
import {Button, Nav, Navbar} from 'react-bootstrap'
import './navbar.css'
const NavBar = () => {
    return (
        <Navbar bg="" expand="lg" style={{color:"white"}}>
        <Navbar.Brand href="#home">
           <h1 style={{color:"white"}}>Power <span style={{color:"yellow"}}>X</span></h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="control" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" id="navlink" variant="pills dark"  defaultActiveKey="home">
            <Nav.Link href="#home" eventKey='home'>Home</Nav.Link>
            <Nav.Link href="#link" eventKey='service'>Services</Nav.Link>
            <Nav.Link href="#link" eventKey='classes'>Our Classes</Nav.Link>
            <Nav.Link href="#link" eventKey='about'>About Us</Nav.Link>   
            <Nav.Link href="#link" eventKey='prices'>Prices</Nav.Link>   
            <Nav.Link href="#link" eventKey='contact'>Contact Us</Nav.Link>   
          </Nav>
           
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;