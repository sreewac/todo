import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../Navigations/SidebarNav.css'
import { Nav} from 'react-bootstrap'


function SidebarNav() {
    
    const Navigate = useNavigate()
    return (
        <div>
            <Nav className="side-nav">
                <Nav.Link  onClick = {()=> Navigate('/dash')}>Home</Nav.Link>
                <br/>
                <Nav.Link  onClick = {()=> Navigate('/PathOne')}>Path One</Nav.Link>
                <br />
                <Nav.Link onClick = {()=> Navigate('/PathTwo')}>Path Two</Nav.Link>
                <br />
                <Nav.Link onClick = {()=> Navigate('/PathThree')}>Path Three</Nav.Link>
                <br />
                <Nav.Link onClick = {()=> Navigate('/PathFour')}>Path Four</Nav.Link>
                
            

            </Nav>
        </div>
    )
}

export default SidebarNav
