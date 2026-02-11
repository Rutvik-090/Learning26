import SubEmployeeList from "./SubEmployeeList";

function EmployeeList(props) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-gray-800 text-3xl font-bold mb-6">{props.title}</h1>

      <table className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
        <thead className="">
          <tr className="bg-gray-900 text-white">
            <th className="py-3 px-4 text-left">Id</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Age</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((emp, index) => {
            return (
              <tr
                key={emp.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="px-4 py-3">{emp.id}</td>
                <td className="px-4 py-3">{emp.name}</td>
                <td className="px-4 py-3">{emp.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="my-20">
        <SubEmployeeList data={props.data} />
      </div>
    </div>
  );
}

export default EmployeeList;
