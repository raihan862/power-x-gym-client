import React from 'react';
import {Button, Nav, Navbar} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
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
          <NavLink  className="tags" activeStyle={{ borderBottom:"2px solid red"}} exact={true} to="/" >Home</NavLink>
            <NavLink  className="tags" activeStyle={{ borderBottom:"2px solid red" }}  to="/services" >Services</NavLink>
            <NavLink  className="tags" activeStyle={{ borderBottom:"2px solid red" }} to="/classes" >Our Class</NavLink>
            <NavLink  className="tags" activeStyle={{ borderBottom:"2px solid red" }} to="/about" >About Us</NavLink>
            <NavLink  className="tags" activeStyle={{ borderBottom:"2px solid red" }} to='/pricing' >Pricing</NavLink>
            <NavLink  className="tags" activeStyle={{ borderBottom:"2px solid red" }} to='/contact' >Contact</NavLink>
          </Nav>
           
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;