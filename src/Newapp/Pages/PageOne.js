import React from 'react'
import {Col, Row} from 'react-bootstrap'
import SidebarNav from '../Navigations/SidebarNav'

function PageOne() {
    return (
        <div>
            
            <Row>
                   <Col md= {2}>
                   <SidebarNav/>
                   </Col>
                   <Col md = {10}>
                   {<h1>React Js</h1>}
  {<p>JavaScript library
     React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.
     React can be used as a base in the development of single-page or mobile applications. Wikipedia</p>}
                   </Col>
                   </Row>
        </div>
    )
}

export default PageOne
