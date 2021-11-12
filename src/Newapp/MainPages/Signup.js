import React from "react";
import {useSign} from '../CustomHook/useSign'
import { login } from "../Services";
import { Row, Form, Col, Button } from 'react-bootstrap' 
import Logobar from '../Component/Logobar'
import Footer from "../Component/Footer";

function Signup() {
    const [handleChange, handleSubmit, error] = useSign({ login })
    return (
        <div>
            <Logobar/>
              <Row style={{ height: '80vh' }}>
                <Col></Col>
                <Col className="p-3 mt-5" md={4}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="d-flex justify-content-center" >Log In</h2>
                        <Form.Group className="mb-3" controlId="email" >

                            <Form.Control type="text" isInvalid={error} onChange={(e) => handleChange(e)} placeholder="Enter email" />
                            <Form.Control.Feedback type="invalid">
                                Required field
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password"  >

                            <Form.Control type="password" isInvalid={error} onChange={(e) => handleChange(e)} placeholder="Password" />
                            
                            <Form.Control.Feedback type="invalid">
                                Required field
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            <Footer/>
        </div>
    )
}

export default Signup
