import React from 'react'
import {Route,Routes} from 'react-router-dom' 
import Home from './Home'
import Main from './Main'
import Signup from './Signup'


function Navigation() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route  path="/signin" element={<Signup/>}></Route>
                <Route  path="/dash" element={<Main/>}></Route>
                


            </Routes>
        </div>
    )
}

export default Navigation
