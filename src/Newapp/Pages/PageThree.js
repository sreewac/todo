import React from 'react'
import {Col, Row} from 'react-bootstrap'
import SidebarNav from '../Navigations/SidebarNav'

function PageThree() {
    return (
        <div>
           
            <Row>
                   <Col md= {2}>
                   <SidebarNav/>
                   </Col>
                   <Col md = {10}>
                   {<h1>Angular</h1>}
  {<p>Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.

These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page apps for enterprises. Tutorials and guides include downloadable examples to accelerate your projects.</p>}
                   </Col>
                   </Row>
        </div>  
    
    )
}

export default PageThree
