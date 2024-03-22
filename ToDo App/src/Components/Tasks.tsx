import "../CSS Stylings/Reusables.css";
import "../CSS Stylings/Resets.css";
import "../CSS Stylings/Component Stylings/Tasks.css";

interface ITasks {
    task: String
}

export const Tasks = (props:ITasks) => {
    return (
        <div className="tasks flex-c-c flex-row">
            <h1 className="tasks-name">{props.task}</h1>

            <button>X</button>
        </div>
    );
}