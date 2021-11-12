import React from "react";
import {useSign} from '../CustomHook/useSign'
import { login } from "../Services";
import { Row, Form, Col, Button } from 'react-bootstrap' 
import Logobar from '../Component/Logobar'
import Footer from "../Component/Footer";

function Signup() {
    const [handleChange, handleSubmit, error] = useSign({ login })
   const SignItem=[
       {
           className:"mb-3",
           controlId:"email",
           type:"text",
           isInvalid:error,  
           placeholder:"Enter Email"
        
           
             
        },
        {
        className:"mb-3",
        controlId:"password",
        type:"password",
        isInvalid:error,
        placeholder:"Enter Password"
     }
      
   ]

    return (
        <div>
            <Logobar/>
              <Row style={{ height: '80vh' }}>
                <Col></Col>
                <Col className="p-3 mt-5" md={4}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="d-flex justify-content-center" >Log In</h2>
                        {SignItem.map((obj)=>(
                            <Form.Group className={obj.className} controlId={obj.controlId}>
                            <Form.Control key={obj.controlId} type={obj.type} isInvalid={obj.isInvalid} placeholder={obj.placeholder} onChange={(e) => handleChange(e)} />
                            <Form.Control.Feedback type="invalid">
                                Required field
                            </Form.Control.Feedback>
                            </Form.Group>

                        ))

                        }

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
