/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState  , useReducer , useContext, useEffect } from 'react'
import AddTask from './AddTask'
import TasksList from './TasksList'
import { Dropdown } from 'react-bootstrap'
const tasksContext = React.createContext(null)
const dispatchContext = React.createContext(null)

function TasksProvider({children}) {
    const [tasks , dispatch] = useReducer(useReducerDispatch , initialtasks)
    SetLocalStorage(tasks)
    console.log(tasks)
    useEffect(()=>{
        const getTasks = JSON.parse(localStorage.getItem('tasks'))
    },[tasks])
    
    return (
    <>
    <tasksContext.Provider value={tasks}>
        <dispatchContext.Provider value={dispatch}>
        {children}
        </dispatchContext.Provider>
    </tasksContext.Provider>
    </>
)
}

export function TasksUseContext()
{
    return useContext(tasksContext)
}

export function DipatchReducerContext()
{
    return useContext(dispatchContext)
}

function useReducerDispatch(tasks , action)
{
    switch(action.type)
    {
        case 'add' : 
        {
            return [
            ...tasks ,
            {
                id : action.task.id,
                title : action.task.title,
                info : action.task.info
            }       
        ]
        }
        case 'changed' : 
        {
            return [...tasks.map((task) =>task.id === action.task.id ? action.task : task)];
        }
        case 'delete' : 
        {
            return tasks.filter((t)=> t.id !== action.task.id)
        }
        case 'filtered' : 
        {
            return tasks.filter((t)=> t.title === action.title)
        }
        default : 
        {
            throw Error("Unknown action: " + action.type);
        }
    }

}

function SetLocalStorage(tasks)
{
    useEffect(()=>{
        localStorage.setItem('tasks' , JSON.stringify(tasks))
    },[tasks])
}
// function GetLocalStorage(tasks)
// {
//     useEffect(()=>{
//         const tasks = JSON.parse(localStorage.getItem('tasks'))
//     },[tasks])
// }




let initialtasks = [
// {id : 0 , title : 'Home' , info : "bedroom cleanning"},
// {id : 1 , title : 'Company' , info : "DeadLine"},
// {id : 2 , title : 'Home' , info : "tide"},
]

export default TasksProvider
