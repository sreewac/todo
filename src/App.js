import React from 'react';
import './App.css';
import Header from './Components/Header'
import Body  from './Components/Body';
import List from './Components/List';
import {useApp} from './CustomHooks/useApp'



function App() {
  const{InputChange,handleAdd,Items,setItems,error,inputTxt,handleDelete,handleShow,setId,id,show,setShow,handleClose}=useApp();
  
  
  return (
    <div className="container">

      <Header />
      <Body InputChange={InputChange} handleAdd={handleAdd} inputTxt={inputTxt} error={error} setItems={setItems} />
      <List handleDelete={handleDelete} Items={Items} handleShow={handleShow} setId={setId} id={id} show={show} setShow={setShow} handleClose={handleClose} inputTxt={inputTxt} />


    </div>
  );
}

export default App;
