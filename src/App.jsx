import "./App.scss";
import team from "./data/team";
import Employee from "./components/Employee/Employee";

const App = () => {
  const employeeArr = team.map(({ id, name, role }) => (
    <Employee id={id} name={name} role={role} />
  ));

  return (
    <>
      <h1>Ticket Tracker</h1>
      <section className="grid-container">{employeeArr}</section>
    </>
  );
};

export default App;

// <div className="employee">
//   <h2 className="employee__header">Name</h2>
//   <h3 className="employee__subheader">Role</h3>
//   <div className="employee__counter-container">
//     <h3 className="employee__counter-header">Counter</h3>
//     <output className="employee__counter-output">0</output>
//     <button className="employee__counter-input-button button button-minus"></button>
//     <button className="employee__counter-input-button button button-plus"></button>
//   </div>
// </div>;
