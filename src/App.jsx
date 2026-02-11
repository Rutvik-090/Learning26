import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import FunctionDemo1 from "./components/FunctionDemo1";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Shows from "./components/Shows";
import InputHandling from "./components/Tasks/InputHandling";
import Playing from "./components/Tasks/Playing";
import Team from "./components/Tasks/Team";
import Trending from "./components/Trending";
import Watch from "./components/Watch";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/news" element={<News />} />

        <Route path="/watch/:movieName" element={<Watch />} />
        <Route path="/watch/:showName" element={<Watch />} />

        {/* <Route path="/characters" element={<CharacterIntro />} /> */}

        <Route path="/teams" element={<Team />} />
        <Route path="/playing/:teamName" element={<Playing />} />

        <Route path="/functiondemo" element={<FunctionDemo1 />} />
        <Route path="/inputhandling" element={<InputHandling />} />

        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
