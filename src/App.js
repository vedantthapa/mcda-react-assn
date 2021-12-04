import MyTown from "./components/MyTown";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <About/>
      <MyTown/> */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/mytown" element={<MyTown />} />
      </Routes>
    </div>
  );
}

export default App;
