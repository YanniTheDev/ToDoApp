import "../CSS Stylings/Reusables.css";
import "../CSS Stylings/Resets.css";
import "../CSS Stylings/Component Stylings/Tasks.css";

import { ITask } from "../App";

interface ITasks {
    task: ITask,
    deleteTaskFunc: any,
    completeTaskFunc: any
}

export const Tasks = (props:ITasks) => {
    return (
        <div className="tasks flex-c-c flex-row">
            <h1 className={`tasks-name ${props.task.completed ? "completed-task-bg-color" : "uncomplete-task-bg-color"}`} >
                {props.task.taskName}
            </h1>

            <button onClick={() => {
                props.deleteTaskFunc(props.task.id)
            }}>
                X
            </button>

            <button onClick={() => {
                props.completeTaskFunc(props.task.id)
            }}>
                Complete
            </button>
        </div>
    );
}