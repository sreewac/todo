import React from 'react'
import { Nav } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import '../Navigations/SidebarNav.css'

function SidebarNav() {
    const Navigate = useNavigate()
    return (
        <div>
            <Nav className="side-nav">
                <Nav.Link onClick = {()=> Navigate('/PathOne')}>Path One</Nav.Link>
                <hr />
                <Nav.Link onClick = {()=> Navigate('/PathTwo')}>Path Two</Nav.Link>
                <hr />
                <Nav.Link onClick = {()=> Navigate('/PathThree')}>Path Three</Nav.Link>
                <hr />
                <Nav.Link onClick = {()=> Navigate('/PathFour')}>Path Four</Nav.Link>
                
            

            </Nav>
        </div>
    )
}

export default SidebarNav
