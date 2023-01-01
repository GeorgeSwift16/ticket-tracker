import "./Employee.scss";
import Counter from "../Counter/Counter";

const Employee = (props) => {
  return (
    <div className="employee">
      <h2 className="employee__header">{props.name}</h2>
      <h3 className="employee__subheader">{props.role}</h3>
      <Counter />
    </div>
  );
};
export default Employee;
