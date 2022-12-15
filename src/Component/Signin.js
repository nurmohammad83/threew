import React from 'react';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Signin = () => {
  return (
    <div className='bg-success py-5'>
      <Form className='mx-auto my-5 bg-white p-3' style={{ width: '30%', height: '100%' }}>
        <h2 className='text-center'>Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='fw-bold'>Email </Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='fw-bold'>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Button style={{ width: '100%' }} className="mb-3"
          variant="primary" type="submit">
          Log In
        </Button>
        <Form.Text className='text-black fw-semibold text-center my-2'>
          <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Signin;