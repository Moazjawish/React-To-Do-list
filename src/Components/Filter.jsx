/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState , useContext} from "react"
import { Dropdown } from "react-bootstrap"
function Filter({onFilteredValue , filteredValue}) {
    return (
    <Dropdown>
        <Dropdown.Toggle variant="success" className="filter-button" id="dropdown-basic">{filteredValue}</Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item href="#/action-3" title='All'     onClick={onFilteredValue}>All</Dropdown.Item>
        <Dropdown.Item href="#/action-2" title='Home'    onClick={onFilteredValue}>Home</Dropdown.Item>
        <Dropdown.Item href="#/action-3" title='Company' onClick={onFilteredValue}>Company</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    );
}
export default Filter
