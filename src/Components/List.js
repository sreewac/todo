import React from 'react'
import './List.css'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function List({ Items, handleDelete,handleShow ,setId,show,handleClose,id}) {


    return (
        <div>
            <ol className="map">
                {Items.map((obj) => {
                    return (
                        <li key={obj.id}>
                            {' '}
                            {obj.text}{' '}
                            <>
                                <Button
                                    variant="primary"
                                    onClick={() => { handleShow();
                                        setId(obj);
                                    }}
                                >
                                    Delete
                                </Button>
                            </>
                        </li>
                    );
                })}
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>DELETE</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>ARE YOU SURE TO DELETE!?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => handleDelete(id)}>
                            DELETE
                        </Button>
                    </Modal.Footer>
                </Modal>
            </ol>
        </div>
    )
}

export default List
