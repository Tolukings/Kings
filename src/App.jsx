import React, { useState } from "react";
import Button from "./components/Button";


 function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
    };

    let resetCount = () => {
      setCount(0);
      };
  



  return (
    <div className="app">
      <div>
        <div class="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
          </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
          <br/>
          <Button title={"reset"} action={resetCount} />
        </div>
      </div>
    </div>
  );
}
export default App