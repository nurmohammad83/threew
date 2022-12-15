import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "bootstrap/dist/css/bootstrap.min.css";
import {FaUserCircle } from "react-icons/fa";

import { Link } from 'react-router-dom';
const Header = () => {
    const [value,setValue]=useState('Ethereum Kovan');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)}
    return (
        <Navbar collapseOnSelect expand="lg" className=''>
      <Container>
        <Navbar.Brand className='text-primary fw-bold fs-4'><Link to='/'>Faucets</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              
          </Nav>
          <Nav>
            
         <Dropdown>
<DropdownButton
      className='border border-2 '
      alignRight
      title={value}
      id="dropdown-button-dark-example1" variant="secondary"
      onSelect={handleSelect}>
<Dropdown.Menu  variant="light">
  
  <Dropdown.Item  eventKey="Arbitrum Rinkeby">Arbitrum Rinkeby</Dropdown.Item>
  <Dropdown.Item eventKey="Avalanche Fuji">Avalanche Fuji</Dropdown.Item>
  <Dropdown.Item eventKey="BNB Chain Testnet">BNB Chain Testnet</Dropdown.Item>
  <Dropdown.Item eventKey="Ethereum Rinkeby">Ethereum Rinkeby</Dropdown.Item>
  <Dropdown.Item eventKey="Fantom Testnet">Fantom Testnet</Dropdown.Item>
  <Dropdown.Item eventKey="Harmony Testnet">Harmony Testnet</Dropdown.Item>
  <Dropdown.Item eventKey="POA Network Sokol">POA Network Sokol</Dropdown.Item>
  <Dropdown.Item eventKey="Polygon Mumbai">Polygon Mumbai</Dropdown.Item>
  
</Dropdown.Menu>
</DropdownButton>
</Dropdown>
            <Nav.Link style={{height:'43px'}} className='py-2 p-1 border border-2 border-primary fw-bold text-primary mx-2 p-0' href="#home">Connect Wallet</Nav.Link>
            <Nav.Link className='mb-2 p-0' href="#link">
              <Dropdown >
<Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
  <FaUserCircle style={{height:'25px',width:'40px'}}/>
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item href="#/action-1">
    <Link to='/signin'>Login</Link>
  </Dropdown.Item>
  <Dropdown.Item href="#/action-3"><Link to='/signup'>Signup</Link></Dropdown.Item>
  <Dropdown.Item href="#/action-4">Faq</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;