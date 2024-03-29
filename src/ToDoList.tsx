import { debug } from 'console';
import React from 'react';
import { FilterValuesType } from './App';


export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTasks: (id: string) => void
  filterTasks: (value: FilterValuesType) => void

}


export function Todolist(props: PropsType) {

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {
          props.tasks.map((t) => {
            return <li><input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={() => { props.removeTasks(t.id) }}>x</button>
            </li>
          })
        }
      </ul>
      <div>
        <button onClick={() => { props.filterTasks('all') }}>All</button>
        <button onClick={() => { props.filterTasks('active') }}>Active</button>
        <button onClick={() => { props.filterTasks('completed') }}>Competed</button>
      </div>
    </div>
  )
}
