import "./Counter.scss";

const Counter = () => {
  return (
    <div className="employee__counter-container">
      <h3 className="employee__counter-header">Counter</h3>
      <output className="employee__counter-output">0</output>
      <div className="employee__counter-button-container">
        <button className="employee__counter-button button button-minus">
          -
        </button>
        <button className="employee__counter-button button button-plus">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
