import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import './App.css';
import { Todolist } from './ToDoList';
import { TaskType } from './ToDoList';

export type FilterValuesType = "all" | "active" | "completed";

function App() {

  let initTasks1: Array<TaskType> = [
    { id: uuidv1(), title: "CSS", isDone: true },
    { id: uuidv1(), title: "Js", isDone: true },
    { id: uuidv1(), title: "React", isDone: false },
  ]
  const tasks2: Array<TaskType> = [
    { id: uuidv1(), title: "Terminator", isDone: true },
    { id: uuidv1(), title: "XXX", isDone: false },
    { id: uuidv1(), title: "StarWars", isDone: true },
  ]


  let [tasks1, setTasks] = useState<Array<TaskType>>(initTasks1);
  let [filter, setFilter] = useState<FilterValuesType>('all');

  function removeTasks(id: string) {
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
