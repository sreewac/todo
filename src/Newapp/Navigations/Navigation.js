import React from 'react'
import {Route,Routes} from 'react-router-dom' 
import Home from '../MainPages/Home'
import Main from '../MainPages/Main'
import Signup from '../MainPages/Signup'
import PageOne from '../Pages/PageOne'
import PageTwo from '../Pages/PageTwo'
import PageThree from '../Pages/PageThree'
import PageFour from '../Pages/PageFour'

function Navigation() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route  path="/signin" element={<Signup/>}></Route>
                <Route  path="/dash" element={<Main/>}></Route>
                <Route path = "/PathOne" element={<PageOne />}></Route>
                <Route path = "/PathTwo" element={<PageTwo />}></Route>
                <Route path = "/PathThree" element={<PageThree/>}></Route>
                <Route path = "/PathFour" element={<PageFour />}></Route>
                


            </Routes>
        </div>
    )
}

export default Navigation
