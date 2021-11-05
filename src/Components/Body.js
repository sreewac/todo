import React from 'react'
import './Body.css'
function Body({InputChange,handleAdd,error,inputTxt}) 

{
    return (
       <div className="input">
           <div className="formwrap">
           <form onSubmit={handleAdd}>
                <input type="text" value={inputTxt} placeholder="Add item..." onChange={InputChange} ></input>
                
                 <button type="submit">ADD</button>
                {error ? <h6 className="require">input field required</h6> : null}
            </form>
            </div>
       </div>
    )
}

export default Body
