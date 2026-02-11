import EmployeeList from "./EmployeeList";

function FunctionDemo1() {
  let title = "Employee list 2026";

  const employee_data = [
    {
      id: 101,
      name: "Rutvik",
      age: 22,
    },
    {
      id: 102,
      name: "Mox",
      age: 21,
    },
    {
      id: 101,
      name: "Mihir",
      age: 25,
    },
    {
      id: 101,
      name: "Rushang",
      age: 23,
    },
  ];

  return (
    <div>
      <EmployeeList title={title} data={employee_data} />
    </div>
  );
}

export default FunctionDemo1;
