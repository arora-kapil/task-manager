import React, { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  const getFilteredTasks = () => {
    if (filter === 'completed') return tasks.filter(task => task.completed);
    if (filter === 'incomplete') return tasks.filter(task => !task.completed);

    return tasks;
  }

  return (
    <div className='App'>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskFilter setFilter={setFilter} />
      <TaskList
        tasks={getFilteredTasks()}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  )
}

export default App