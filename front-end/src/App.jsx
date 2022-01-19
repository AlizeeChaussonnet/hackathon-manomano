import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pinterest from "./pages/Pinterest";
import Shop from "./pages/Shop";
import Homepage from "./pages/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/inspirations" element={<Pinterest />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
