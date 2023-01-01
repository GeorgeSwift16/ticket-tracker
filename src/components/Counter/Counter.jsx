import "./Counter.scss";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="employee__counter-container">
      <h3 className="employee__counter-header">Ticket Counter</h3>
      <output className="employee__counter-output">{counter}</output>
      <div className="employee__counter-button-container">
        <button
          onClick={handleDecrement}
          className="employee__counter-button button button-minus"
        >
          -
        </button>
        <button
          onClick={handleIncrement}
          className="employee__counter-button button button-plus"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
