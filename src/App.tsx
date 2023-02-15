import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterButtonName = "All" | "Active" | "Completed"

function App() {

    const header = "What to learn"

    let [task, setTask] = useState([
        {id:1, title: "HTML", isDone: true},
        {id:2, title: "CSS", isDone: true},
        {id:3, title: "JavaScript", isDone: false},
        {id:3, title: "React", isDone: false}
    ])

    const removeTask = (id: number) => {
        task = task.filter(el => el.id !== id)
        setTask(task)
    }

    return (
        <div className="App">
            <Todolist header={header}
                      tasks={task}
                      removeTask={removeTask} />
        </div>
    );
}

export default App;
