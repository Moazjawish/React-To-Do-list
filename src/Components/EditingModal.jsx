/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ 
import { useState } from 'react'
import {TasksUseContext , DipatchReducerContext} from './TasksProvider'
import {Button ,Col ,Container ,Modal ,Row , Form , ListGroup , Dropdown} from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";


function EditingModal({task , edited , setEdited }) {
    const [show, setShow] = useState(false);
    const [tempTask , setTempTask] = useState({})
    const dispatch = DipatchReducerContext()
    const handleClose = () => setShow(false);
    const handleShow  = () => setShow(true);
    const saveChange = ()=>{
        setShow(false)
        setEdited(false)
        dispatch({
            type : 'changed' ,
            task :  {
                id : tempTask.id , 
                title : tempTask.title ,
                info  : tempTask.info
            }
        })
        setTempTask({})
    }

    function handleTitleTitle(e)
    {
        setTempTask({
            id : task.id ,
            title : e.target.value,
            info : task.info
        })
    }

    function handleTaskInfo(e)
    {
        setTempTask({
            id : task.id ,
            title : task.title,
            info : e.target.value
        })
    }

    return (
    <>
        <Col size='3'>
        <Button variant="warning" onClick={handleShow} className='edit-button'><FaEdit/></Button>
        </Col>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Edit task title" autoFocus  defaultValue = {task.title}
                onChange={handleTitleTitle}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as='textarea' rows={3}  placeholder='Edit task description'  autoFocus defaultValue={task.info}
                onChange={handleTaskInfo}
                />
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