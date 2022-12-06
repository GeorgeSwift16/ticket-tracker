import "./Counter.scss";

const Counter = () => {
  return (
    <div className="employee__counter-container">
      <h3 className="employee__counter-header">Counter</h3>
      <output className="employee__counter-output">0</output>
      <button className="employee__counter-input-button button button-minus">
        -
      </button>
      <button className="employee__counter-input-button button button-plus">
        +
      </button>
    </div>
  );
};

export default Counter;
