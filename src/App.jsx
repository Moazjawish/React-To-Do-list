import './App.css'
import AddTask from './Components/AddTask'
import TasksList from './Components/TasksList'
import TasksProvider from './Components/TasksProvider'

function App() {
  return (
    <>
  <TasksProvider>
    <AddTask/>
    <TasksList/>
  </TasksProvider>
    </>
  )
}

export default App
