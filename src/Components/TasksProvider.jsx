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
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('tasks'))
        if(data)
        {
            dispatch({type : 'refreshed',tasks : data}) 
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('tasks' , JSON.stringify(tasks))
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
            return action.tasks
        }
        case 'refreshed' : 
        {
            return action.tasks
        }

        default : 
        {
            throw Error("Unknown action: " + action.type);
        }
    }

}






let initialtasks = []

export default TasksProvider
