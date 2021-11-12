import React from 'react'
import {Col, Row} from 'react-bootstrap'
import SidebarNav from '../Navigations/SidebarNav'

function PageTwo() {
    return (
        <div>
            
            <Row>
                   <Col md= {2}>
                   <SidebarNav/>
                   </Col>
                   <Col md = {10}>
                   {<h1>REACT NATIVE</h1>}
  {<p>React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.</p>}
                   </Col>
                   </Row>
        </div>
    )
}

export default PageTwo
