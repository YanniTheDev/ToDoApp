import { useState } from "react";
import "./CSS Stylings/App.css";
import "./CSS Stylings/Reusables.css";
import "./CSS Stylings/Resets.css";

// INTERFACES
export interface ITask {
  id: number,
  taskName: string,
  completed: boolean
}

// COMPONENTS
import { Tasks } from "./Components/Tasks";

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const CreateTask = () => {
    const templateTask = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }

    const newTasks = [...tasks, templateTask]

    setTasks(newTasks);
  }

  const AddTaskInput = (event:any) => {
    setNewTask(event.target.value);
  }

  const DeleteTask = (id:number) => {
    const updateTasks = tasks.filter((taskName) => {
      return taskName.id !== id;
    });

    setTasks(updateTasks);
  }

  const CompleteTask = (id:number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {...task, completed: true};
      }
      else {
        return task;
      }
    })

    setTasks(updatedTasks);
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
            <Tasks task={task} deleteTaskFunc={DeleteTask} completeTaskFunc={CompleteTask}/>
          );
        })
      }
    </div>
  );
}

export default App
