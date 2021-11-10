import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
function Logobar() {


    return (
        <div>
            <Navbar bg="light" expand="lg" fixed='top'>
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            src="./logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="something wrong"
                        />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >




                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Logobar
