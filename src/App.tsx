import React, { useState } from 'react';
import './App.css';
import { Todolist } from './ToDoList';
import { TaskType } from './ToDoList';

export type FilterValuesType = "all" | "active" | "completed";

function App() {

  let initTasks1: Array<TaskType> = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "Js", isDone: true },
    { id: 3, title: "React", isDone: false },
  ]
  const tasks2: Array<TaskType> = [
    { id: 4, title: "Terminator", isDone: true },
    { id: 5, title: "XXX", isDone: false },
    { id: 6, title: "StarWars", isDone: true },
  ]


  let [tasks1, setTasks] = useState<Array<TaskType>>(initTasks1);
  let [filter, setFilter] = useState<FilterValuesType>('all');

  function removeTasks(id: number) {
    let filteredTasks = tasks1.filter(t => t.id !== id)
    setTasks(filteredTasks);
  }

  function filterTasks(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForToDoList = tasks1;
  if (filter === 'completed') {
    tasksForToDoList = tasks1.filter(t => t.isDone == true);
  }
  if (filter === 'active') {
    tasksForToDoList = tasks1.filter(t => t.isDone == false);
  }
  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasksForToDoList} filterTasks={filterTasks} removeTasks={removeTasks} />
      <Todolist title="Movies" tasks={tasks2} filterTasks={filterTasks} removeTasks={removeTasks} />
    </div>
  );
}

export default App;
