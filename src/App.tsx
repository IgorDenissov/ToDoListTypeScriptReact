import React, { useState } from 'react';
import './App.css';
import { Todolist } from './ToDoList';
import { TaskType } from './ToDoList';


function App() {

let initTasks1:Array <TaskType> = [
  {id:1, title: "CSS", isDone: true},
  {id:2, title: "Js", isDone: true},
  {id:3, title: "React", isDone: false},
]
const tasks2 : Array <TaskType> = [
  {id:1, title: "Terminator", isDone: true},
  {id:2, title: "XXX", isDone: false},
  {id:3, title: "StarWars", isDone: true},
]


let [tasks1, setTasks] = useState(initTasks1);

function removeTasks (id: number) {
let filteredTasks = tasks1.filter(t=> t.id !== id)
setTasks(filteredTasks);
}


  return (
    <div className="App">
     <Todolist title = "What to learn" tasks = {tasks1} removeTasks = {removeTasks}/>
     <Todolist title = "Movies" tasks = {tasks2} removeTasks = {removeTasks}/>
    </div>
  );
}

export default App;
