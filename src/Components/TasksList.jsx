/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */ 
import { useState } from 'react'
import {TasksUseContext , DipatchReducerContext} from './TasksProvider'
import {Button ,Col ,Row } from 'react-bootstrap';
import { HiTrash } from "react-icons/hi";
import EditingModal from './EditingModal';
import Filter from './Filter';

function TasksList() {
    const tasks = TasksUseContext()
    const [filteredTextValue , setFilteredValue] = useState('')
    let filteredList = tasks.filter((task)=>{
        if(filteredTextValue === 'Home')
        {
            return task.title === 'Home'
        }
        else if(filteredTextValue === 'Company')
        {
            return task.title === 'Company'
        }
        else
        {
            return task
        }
    })
    function onFilteredValue(e)
    {
        setFilteredValue(e.target.title)
    }
    return (
        <>
        <Filter onFilteredValue={onFilteredValue}/>
        <ul className='tasks'>
        {filteredList.map((task) =>(
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


let taskContent;
if(!edited) 
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
    <Button variant='danger' className='delete-button' onClick={()=>{
        dispatch({
            type : 'delete', 
            task : 
            {
                id : task.id
            }
        })
    }}><HiTrash/></Button>
    </Col>
    </>)
}





export default TasksList
