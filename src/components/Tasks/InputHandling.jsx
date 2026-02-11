// import { useState } from "react";

// function InputHandling() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Name"
//         onChange={(e) => setName(e.target.value)}
//       />
//       {name}

//       <input
//         type="text"
//         placeholder="E-mail"
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       {email}

//       <input
//         type="text"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       {password}

//       <input type="text" placeholder="City" />
//       <input type="text" placeholder="Country" />
//       <input type="text" placeholder="Age" />
//       <input type="text" placeholder="Hobby" />
//       <input type="text" placeholder="Bio" />
//     </div>
//   );
// }

// export default InputHandling;

import { useState } from "react";

function InputHandling() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");
  const [bio, setBio] = useState("");

  const clearAll = () => {
    setName("");
    setEmail("");
    setPassword("");
    setCity("");
    setCountry("");
    setAge("");
    setHobby("");
    setBio("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Input Handling Experiment
        </h1>

        {/* Inputs */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Hobby"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={clearAll}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Clear
          </button>
        </div>

        {/* Live Preview */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-1 text-sm text-gray-700">
          <h2 className="font-semibold text-gray-800">Live Preview:</h2>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Password:</strong> {password}
          </p>
          <p>
            <strong>City:</strong> {city}
          </p>
          <p>
            <strong>Country:</strong> {country}
          </p>
          <p>
            <strong>Age:</strong> {age}
          </p>
          <p>
            <strong>Hobby:</strong> {hobby}
          </p>
          <p>
            <strong>Bio:</strong> {bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InputHandling;
