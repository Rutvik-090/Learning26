const MapDemo1 = () => {
  const cars = ["BMW", "Ferrari", "Audi", "Rolls Royce", "Defender", "Porsche"];

  return (
    <>
      <h1 className="text-2xl font-semibold pl-8">Cars:</h1>
      <ul className="list-disc pl-18 mt-4">
        {cars.map((car) => (
          <li key={car}>{car}</li>
        ))}
      </ul>
    </>
  );
};

export default MapDemo1;
