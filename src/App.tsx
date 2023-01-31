import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todolist } from './ToDoList';
import { TaskType } from './ToDoList';

let tasks1:Array <TaskType> = [
  {id:1, title: "CSS", isDone: true},
  {id:2, title: "Js", isDone: true},
  {id:3, title: "React", isDone: false},
]
let tasks2 : Array <TaskType> = [
  {id:1, title: "Terminator", isDone: true},
  {id:2, title: "XXX", isDone: false},
  {id:3, title: "StarWars", isDone: false},
]

function App() {
  return (
    <div className="App">
     <Todolist title = "What to learn" tasks = {tasks1}/>
     <Todolist title = "Movies" tasks = {tasks2}/>
    </div>
  );
}

export default App;
