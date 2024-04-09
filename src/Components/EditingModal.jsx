/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ 
import { useState } from 'react'
import {TasksUseContext , DipatchReducerContext} from './TasksProvider'
import {Button ,Col ,Container ,Modal ,Row , Form , ListGroup , Dropdown} from 'react-bootstrap';

function EditingModal({task , edited , setEdited }) {
    const dispatch = DipatchReducerContext()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow  = () => setShow(true);
    
    const saveChange = ()=>{
        setShow(false)
        setEdited(false)
    }
    return (
    <>
        <Col size='3'>
        <Button variant="warning" onClick={handleShow}>Edit</Button>
        </Col>

        <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
            <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                
                <Form.Control type="text" placeholder="Edit task title" autoFocus  value = {task.title}
                onChange={(e)=>{
                    dispatch({
                        type : 'changed' , 
                        task : {
                            ...task,
                            id : task.id ,
                            title : e.target.value
                        }
                    })
                }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                
                <Form.Control as='textarea' rows={3}  placeholder='Edit task description'  autoFocus value={task.info}
                onChange={(e)=>{
                    dispatch({
                        type : 'changed' , 
                        task : {
                            ...task,
                            id : task.id ,
                            info : e.target.value
                        }
                    })
                }}/>
                
            </Form.Group> 
            
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={saveChange}>Save Changes</Button>
        </Modal.Footer>
        </Modal>
    </>
    );
}
export default EditingModal