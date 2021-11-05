import { useState } from "react";

export const useApp = () => {
    const [inputTxt, setinputTxt] = useState('')
    const [Items, setItems] = useState([])
    const [error, seterror] = useState(false)
    const [show, setShow] = useState(false);
    const [id, setId] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const InputChange = (e) => {
        setinputTxt(e.target.value)
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (inputTxt) {

            setItems([...Items, { id: Date.now(), text: inputTxt}])
            setinputTxt('')
            seterror(false)

        }
        else {
            seterror(true)

        }

    };


    const handleDelete = ({ id }) => {
        handleClose();
        setItems(Items.filter((obj) => obj.id !== id)
        )
    }



    return {
        InputChange,
        handleAdd,
        Items,
        setItems,
        error,
        inputTxt,handleDelete,handleShow ,setId,show,handleClose,id,setShow
    }
}