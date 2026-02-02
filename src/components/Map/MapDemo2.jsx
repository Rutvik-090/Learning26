const MapDemo2 = () => {
  const users = [
    { id: 1, name: "Rutvik", age: 22, gender: "male" },
    { id: 2, name: "Mihir", age: 22, gender: "male" },
    { id: 3, name: "Mox", age: 22, gender: "male" },
    { id: 4, name: "Rushang", age: 22, gender: "male" },
  ];

  return (
    <div className="w-full h-40 border-2">
      <h1 className="text-2xl font-semibold">Users details:</h1>
      <ol className="list-decimal pl-8 mt-2">
        {users.map((user, id) => (
          <li key={id}>
            id:{user.id} | Name:{user.name} | age:{user.age} | gender:{user.age}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MapDemo2;
