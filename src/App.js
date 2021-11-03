import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header'
import Body  from './Components/Body';
import List from './Components/List';



function App() {
  const [inputTxt, setinputTxt] = useState('')
  const [Items, setItems] = useState([])
  const [error, seterror] = useState(false)
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const InputChange = (e) => {
      setinputTxt(e.target.value)
  }
  const handleAdd = (e) => {
      e.preventDefault();
      if (inputTxt) {

          setItems([...Items, { id: Date.now(), text: inputTxt, completed: false }])
          setinputTxt('')
          seterror(false)

      }
      else {
          seterror(true)

      }

  }
  const handleDelete = ({ id }) => {
    handleClose();
    setItems(Items.filter((obj) => obj.id !== id)
     ) }

  return (
    <div className="container">

      <Header />
      <Body InputChange={InputChange} handleAdd={handleAdd} inputTxt={inputTxt} error={error} setinputTxt={setinputTxt} seterror={seterror} setItems={setItems} Items={Items}/>
      <List handleDelete={handleDelete} Items={Items} handleShow={handleShow} setId={setId} id={id} show={show} setShow={setShow} handleClose={handleClose}/>


    </div>
  );
}

export default App;
