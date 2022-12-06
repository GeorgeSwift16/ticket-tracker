import "./Employee.scss";
import Counter from "../Counter/Counter";

const Employee = () => {
  return (
    <div className="employee">
      <h2 className="employee__header">Name</h2>
      <h3 className="employee__subheader">Role</h3>
      <Counter />
    </div>
  );
};
export default Employee;
