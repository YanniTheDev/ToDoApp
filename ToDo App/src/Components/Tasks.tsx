import "../CSS Stylings/Reusables.css";
import "../CSS Stylings/Resets.css";
import "../CSS Stylings/Component Stylings/Tasks.css";

interface ITasks {
    taskName: string,
    id: number,
    deleteTaskFunc: any
}

export const Tasks = (props:ITasks) => {
    return (
        <div className="tasks flex-c-c flex-row">
            <h1 className="tasks-name">{props.taskName}</h1>

            <button onClick={() => {
                props.deleteTaskFunc(props.id)
            }}>
                X
            </button>
        </div>
    );
}