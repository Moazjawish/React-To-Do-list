/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {InputGroup , Form , Button} from 'react-bootstrap';
import {TasksUseContext , DipatchReducerContext} from './TasksProvider'
function AddTask() {
    const [taskTitle , setTaskTitle] = useState('')
    const [taskInfo , setTaskInfo] = useState('')
    const dispatch = DipatchReducerContext()
    const tasks = TasksUseContext()
    return (
    <>
        <InputGroup className="mb-3">
        <Form.Control placeholder="Enter task title" value={taskTitle}
        onChange={(e)=>{setTaskTitle(e.target.value)}}
        />
        <Form.Control placeholder="Enter task description" value={taskInfo}
        onChange={(e)=>{setTaskInfo(e.target.value)}}
        />
        <Button className='add-button'
        onClick={()=>{
            dispatch({
                type : 'add' , 
                task : 
                {
                    ...tasks , 
                    id  : Date.now() , 
                    title : taskTitle , 
                    info : taskInfo
                }
            })
            setTaskTitle('')
            setTaskInfo('')
        }}
        > Add task</Button>
    </InputGroup>
    </>
)
}
export default AddTask
