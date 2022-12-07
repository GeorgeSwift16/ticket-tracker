import "./App.scss";
import team from "./data/team";
import Employee from "./components/Employee/Employee";
import { useState } from "react";

const App = () => {
  const employeeArr = team.map(({ id, name, role }) => (
    <Employee key={`${id}a`} id={id} name={name} role={role} />
  ));

  const [searchInput, setSearchInput] = useState("");
  const getNewSearchInput = (event) => {
    let currentSearchInput = "";
    currentSearchInput += event.target.value;
    setSearchInput(0);
    setSearchInput(currentSearchInput);
    console.log(searchInput);
    updateDisplayedTickets(searchInput);
  };
  const updateDisplayedTickets = (inputstring) => {
    console.log(searchInput);
    let searchFilteredEmployeeArr = [];
    searchFilteredEmployeeArr = team
      .filter((element) => element.name.includes(inputstring))
      .map(({ id, name, role }) => (
        <Employee key={`${id}a`} id={id} name={name} role={role} />
      ));
    return searchFilteredEmployeeArr;
  };

  return (
    <>
      <h1>Ticket Tracker</h1>
      <label htmlFor="search-by-name">
        Search by name
        <input
          onChange={getNewSearchInput}
          name="search-by-name"
          type="text"
          value={searchInput}
        />
      </label>
      {searchInput ? (
        <section className="grid-container">
          {updateDisplayedTickets(searchInput)}
        </section>
      ) : (
        <section className="grid-container">{employeeArr}</section>
      )}
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
