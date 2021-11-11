import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import './Item.css'

const Item = ({item,deleteItem}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    function handleOnDelete() {
      let itemId= item.id
      deleteItem(itemId)
    }
    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={item.image} alt='' width='80%'/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <td width='20%'><img src={item.image} alt='' width='40%'/></td>
        <td>{item.name}</td>
        <td width='40%'>{item.description}</td>
        <td>{item.price}</td>
        <td>
            <Button variant="outline-dark" className='button-in-table' onClick={handleShow}>See image</Button>
            <Button variant="outline-dark" className='button-in-table' onClick={handleOnDelete}>Delete</Button>
        </td>
        </>
    )
}

export default Item