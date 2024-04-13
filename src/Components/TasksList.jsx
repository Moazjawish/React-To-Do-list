/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ 
import { useState } from 'react'
import {TasksUseContext , DipatchReducerContext} from './TasksProvider'
import {Button ,Col ,Container  ,Row , Form , ListGroup , Dropdown} from 'react-bootstrap';
import EditingModal from './EditingModal';
import filteredTasks from './Filter';
import Filter from './Filter';

function TasksList() {
    const tasks = TasksUseContext()
    return (
        <>
        {/* <Filter tasks = {tasks}/> */}
        <ul className='tasks'>
        {tasks.map((task) =>(
            <li className='taskList' key={task.id}>
            <Row>
            <Task task={task} />
            </Row>
        </li>
        ))}
        </ul>
    </>
)
}

export function Task({task})
{

const dispatch = DipatchReducerContext()
const [edited , setEdited] = useState(false);
const [modalShow, setModalShow] = useState(false);

// 
let taskContent;
if(!edited) //true
{
    taskContent = <>
    <div className={`row title-${task.title}`}>
    <h2 className='task_title'>{task.title}</h2>
    <p className='task_info'>{task.info}</p>
    </div>
</>
}

return(
    <>
    {taskContent}
    <EditingModal task={task} edited = {edited} setEdited = {setEdited} />
    <Col size='3'>
    <Button variant='danger' onClick={()=>{
        dispatch({
            type : 'delete', 
            task : 
            {
                id : task.id
            }
        })
    }}>Delete</Button>
    </Col>
    </>)
}





export default TasksList
