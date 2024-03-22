import "../App.css";

interface ITasks {
    task: String
}

export const Tasks = (props:ITasks) => {
    return (
        <div className="flex-row">
            {props.task}

            <button>X</button>
        </div>
    );
}