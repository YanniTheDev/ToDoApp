import { useState } from "react";
import "./App.css";

// COMPONENTS
import { Tasks } from "./Components/Tasks";

function App() {
  const [newTask, setNewTask] = useState<String>("");
  const [tasks, setTasks] = useState<String[]>([]);

  const CreateTask = () => {
    const newTasks = [...tasks, newTask]

    setTasks(newTasks);
  }

  const AddTaskInput = (event:any) => {
    setNewTask(event.target.value);
  }

  return (
    <div className="content flex-c-c flex-column">
      <header>
        <input type="text" onChange={AddTaskInput}/>
        <button onClick={CreateTask}>Click me</button>
      </header>

      {
        tasks.map((task) => {
          return (
            <Tasks task={task}/>
          );
        })
      }
    </div>
  );
}

export default App
