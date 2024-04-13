/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState , useContext} from "react"
import { Dropdown } from "react-bootstrap"
import {TasksUseContext , DipatchReducerContext} from './TasksProvider'
function Filter({tasks}) {
    const dispatch = DipatchReducerContext();
    const [filtered , setFiltered] = useState(tasks)
    console.log(filtered)
    function handleFiltered(e)
    {
        let word = e.target.title
        if(word === 'All')
        {
            setFiltered(tasks)
        }
        else if(word === 'Home')
        {
            const filteredList = tasks.filter(item=>item.title === "Home");
            setFiltered(filteredList) 
            console.log(filtered)
        }
        else if(word === 'Company')
        {
            const filteredList = tasks.filter(item=>item.title === "Company");
            setFiltered(filteredList) 
        }
        dispatch({
            type : 'filtered' ,
            tasks : filtered
        })
    }

    return (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">All</Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item href="#/action-3" title='All'     onClick={handleFiltered}>All</Dropdown.Item>
        <Dropdown.Item href="#/action-2" title='Home'    onClick={handleFiltered}>Home</Dropdown.Item>
        <Dropdown.Item href="#/action-3" title='Company' onClick={handleFiltered}>Company</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    );
}
export default Filter
