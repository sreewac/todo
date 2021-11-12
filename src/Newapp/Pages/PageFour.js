import React from 'react'
import {Col, Row} from 'react-bootstrap'
import SidebarNav from '../Navigations/SidebarNav'

function PageFour() {
    return (
        <div>
            
            <Row>
                   <Col md= {2}>
                   <SidebarNav/>
                   </Col>
                   <Col md = {10}>
                   {<h1>Vue</h1>}
                {<p>Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. </p>}
                   </Col>
                   </Row>
        </div>

            
        
    )
}

export default PageFour
