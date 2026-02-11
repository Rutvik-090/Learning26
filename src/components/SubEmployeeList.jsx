function SubEmployeeList(props) {
  return (
    <div>
      <table className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
        <thead className="">
          <tr className="bg-gray-900 text-white">
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
                <td className="px-4 py-3">{emp.name}</td>
                <td className="px-4 py-3">{emp.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SubEmployeeList;
