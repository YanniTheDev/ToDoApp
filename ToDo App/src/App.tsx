import { useState } from "react";
import "./CSS Stylings/App.css";
import "./CSS Stylings/Reusables.css";
import "./CSS Stylings/Resets.css";

// INTERFACES
interface ITask {
  id: number,
  taskName: string
}

// COMPONENTS
import { Tasks } from "./Components/Tasks";

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const CreateTask = () => {
    const templateTask = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      taskName: newTask
    }

    const newTasks = [...tasks, templateTask]

    setTasks(newTasks);
  }

  const AddTaskInput = (event:any) => {
    setNewTask(event.target.value);
  }

  const DeleteTask = (id:number) => {
    const newTasks = tasks.filter((taskName) => {
      return taskName.id !== id;
    });

    setTasks(newTasks);
  }

  return (
    <div className="content flex-c-c flex-column">
      <header>
        <input type="text" onChange={AddTaskInput}/>
        <button onClick={CreateTask}>+</button>
      </header>

      {
        tasks.map((task) => {
          return (
            <Tasks taskName={task.taskName} id={task.id} deleteTaskFunc={DeleteTask}/>
          );
        })
      }
    </div>
  );
}

export default App
