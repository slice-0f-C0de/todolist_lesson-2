import React, {useState} from "react";
import {FilterButtonName} from "./App";

type TodolistPropsType = {
    header: string
    tasks: TaskType[]
    removeTask: (id: number) => void
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export function Todolist(props: TodolistPropsType) {

    let [filterButtonName, setFilterButtonName] = useState<FilterButtonName>("All")

    let filteredTasks = props.tasks
    if (filterButtonName === "Active") {
        filteredTasks = props.tasks.filter(el => el.isDone)
    }
    if (filterButtonName === "Completed") {
        filteredTasks = props.tasks.filter(el => !el.isDone)
    }

    const filteredCurrentTasks = (nameButton: FilterButtonName) => {
        setFilterButtonName(nameButton)
    }

    return (
        <div>
            <h3>{props.header}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {filteredTasks.map((el, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        <button onClick={() => props.removeTask(el.id)}>✖️ </button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => filteredCurrentTasks("All")}>All</button>
                <button onClick={() => filteredCurrentTasks("Active")}>Active</button>
                <button onClick={() => filteredCurrentTasks("Completed")}>Completed</button>
            </div>
        </div>
    )
}