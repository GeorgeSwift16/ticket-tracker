import "./App.scss";
// import team from "./data/team";

const App = () => {
  return (
    <>
      <h1>Ticket Tracker</h1>
      <section className="grid-container">
        <div className="employee">
          <h2 className="employee__header">Name</h2>
          <h3 className="employee__subheader">Role</h3>
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
        </div>
      </section>
    </>
  );
};

export default App;
