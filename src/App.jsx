import { Route, Routes } from "react-router-dom";
import ApiDemo from "./components/API/ApiDemo";
import { ApiTask1 } from "./components/API/ApiTask1";
import { ApiTask2 } from "./components/API/ApiTask2";
import OmdbList from "./components/API/OmdbList";
import Error from "./components/Error";
import FormDemo1 from "./components/Form/FormDemo1";
import FormDemo2 from "./components/Form/FormDemo2";
import FormDemo3 from "./components/Form/FormDemo3";
import FormDemo4 from "./components/Form/FormDemo4";
import FormDemo5 from "./components/Form/FormDemo5";
import FormDemo6 from "./components/Form/FormDemo6";
import FormDemo7 from "./components/Form/FormDemo7";
import Forms from "./components/Form/Forms";
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
        <Route path="/forms" element={<Forms />} />
        <Route path="/form" element={<FormDemo1 />} />
        <Route path="/form1" element={<FormDemo2 />} />
        <Route path="/form2" element={<FormDemo3 />} />
        <Route path="/form3" element={<FormDemo4 />} />
        <Route path="/form4" element={<FormDemo5 />} />
        <Route path="/form5" element={<FormDemo6 />} />
        <Route path="/form6" element={<FormDemo7 />} />

        <Route path="/api" element={<ApiDemo />} />
        <Route path="/api-task-1" element={<ApiTask1 />} />
        <Route path="/api-task-2" element={<ApiTask2 />} />
        <Route path="/movie-list" element={<OmdbList />} />

        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
