import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { IoWarning } from "react-icons/io5";
const From = () => {
    return (
        <Form className='p-4 '>
           <p className='bg-success  p-1'> <IoWarning className=' mx-2 mb-1'/>  Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.</p>
      <Form.Group  className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Wallet Address</Form.Label>
        <Form.Control style={{width:'50%'}} type="email" placeholder="Wallet Address" />
      </Form.Group>

      
        
        <Form.Group style={{width:'50%'}} as={Col} controlId="formGridEmail">
          <Form.Label>Request Type</Form.Label>
          <Row>
        <Col>
          <Form.Control placeholder="20 Test Link" disabled />
        </Col>
        <Col>
          <Form.Control placeholder="0.5 ETH" disabled />
        </Col>
      </Row>
        </Form.Group>  
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send Request
      </Button>
    </Form>
    );
};

export default From;