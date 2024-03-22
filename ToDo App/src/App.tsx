import { useState } from "react";
import "./App.css";

function App() {
  const [iteration, setIteration] = useState<Number[]>([]);

  const duplicateText = () => {
    console.log(iteration);
    const newIterations = [...iteration, 1]

    setIteration(newIterations);
  }

  return (
    <div className="content flex-c-c flex-column">
      <header>
        <input type="text" />
        <button onClick={duplicateText}>Click me</button>
      </header>

      {
        iteration.map(() => {
          return <div>Hello</div>
        })
      }
    </div>
  )
}

export default App
