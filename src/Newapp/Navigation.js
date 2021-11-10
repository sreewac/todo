import React from 'react'
import {Route,Routes} from 'react-router-dom' 
import Home from './Home'
import Login from './Login'


function Navigation() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route  path="/signin" element={<Login/>}></Route>
                


            </Routes>
        </div>
    )
}

export default Navigation
