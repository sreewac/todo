import React from 'react'
import {Route,Routes} from 'react-router-dom' 
import {RouteItem } from "../Services";
function Navigation() {

    return (
        <div>
            <Routes>
                {RouteItem.map((obj)=>(
                    <Route key={obj.id}  path={obj.path} element={obj.element}></Route>))}
            </Routes>
        </div>
    )
}

export default Navigation
