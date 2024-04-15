import './App.css'
import AddTask from './Components/AddTask'
import TasksList from './Components/TasksList'
import TasksProvider from './Components/TasksProvider'

function App() {
  return (
    <>
    <h1 className='title'>To Do list</h1>
  <TasksProvider>
    <AddTask/>
    <TasksList/>
  </TasksProvider>
    </>
  )
}

export default App
