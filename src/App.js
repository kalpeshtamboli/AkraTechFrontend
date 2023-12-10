import "./App.css";
import Homepage from "./Views/Homepage";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./Views/MovieDetail";
function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/MovieDetail" element={<MovieDetail />} />
   {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
