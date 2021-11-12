import React from 'react'
import SidebarNav from '../Navigations/SidebarNav'
import { Col, Row } from 'react-bootstrap'
import './Main.css'
import Logobar from '../Component/Logobar'
import Footer from '../Component/Footer'

function Main() {
    return (
        <div>
            <Logobar />
            <div className="sidnav">
                <Row>
                    <Col md={2}>
                        <SidebarNav />
                    </Col>
                    <Col md={10} className="main">
                        <h3>WELCOME TO DASHBORD !!</h3>
                        <hr />
                        <p>Dashboard Welcome Plugin for Elementor allows you to create Custom, Branded Dashboard for WordPress admin. This is a perfect solution when you are building client sites. Share important information, contact details or up-sell your services easily.</p>
                    </Col>
                </Row>
            </div>
            <div className="foot">
                <Footer />
            </div>

        </div>
    )
}

export default Main
