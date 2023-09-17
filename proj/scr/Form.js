import React from 'react'
import { useContext,useState } from 'react';
import "../src/Team.css" 
import { Card, Form, Row, Button, Col, ButtonGroup } from "react-bootstrap";



function Formi() {
 
  
  return (
    <div className="container " >
            <Card style={{ width: '30rem' }}  className="dan  " >
<Card.Body>
    <Form>    <Form.Group as={Row} className="mb-4 mt-4 container ">
        <Form.Label column sm="5">
          Email
        </Form.Label>
        <Col sm="5">
        <Form.Control />
        </Col>
        </Form.Group>
   
      <Form.Group as={Row} className="  mb-3" >
        <Form.Label column sm="5">
          Password
        </Form.Label>
        <Col sm="4">
          <Form.Control type="password" placeholder="Password" />
        </Col>
                      </Form.Group>
                      <Button className='container col-5' >Login</Button>
                  </Form>
                  </Card.Body>
      </Card>
    
          
    </div>
  )
}

export default Formi
