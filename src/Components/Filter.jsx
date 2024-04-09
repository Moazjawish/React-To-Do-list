/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState , useContext} from "react"
import { Dropdown } from "react-bootstrap"
import {TasksUseContext , DipatchReducerContext} from './TasksProvider'
function Filter({tasks}) {
    const dispatch = DipatchReducerContext();
    const [filteredTasks , setFilteredTasks] = useState(null)
    function handleFilter(tasksTitle)
    {
        tasksTitle !== 'All' ? setFilteredTasks(filterTask(tasksTitle)) : setFilteredTasks(tasks)
    }
    function filterTask(taskTitle)
    {
        let filterTasks = tasks.filter((task)=>(task.title) === taskTitle)
        return filterTasks
    }
    console.log(filteredTasks)
    return (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">All</Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item href="#/action-3" title='All' onClick={(e)=>  {
            dispatch({
                type : 'filtered',
                title : e.target.title,
            })
        }}>All</Dropdown.Item>
        <Dropdown.Item href="#/action-2" title='Home' onClick={(e)=> {
            dispatch({
                type : 'filtered',
                title : e.target.title,
            })
        }}>Home</Dropdown.Item>
        <Dropdown.Item href="#/action-3" title='Company' onClick={(e)=>{
            dispatch({
                type : 'filtered' , 
                title : e.target.title
            })
        }}>Company</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    );
}

export default Filter
