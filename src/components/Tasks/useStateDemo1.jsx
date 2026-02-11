import { useState } from "react";

function useStateDemo1() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      <button onClick={() => setLoading(false)}>stop loading</button>
    </div>
  );
}

export default useStateDemo1;
