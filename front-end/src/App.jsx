import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Bathroom from "./pages/Bathroom";
import Shop from "./pages/Shop";
import LivingRoom from "./pages/LivingRoom";

function App() {
  const [count, setCount] = useState(0);

  return (
<>
<Router>
    <Routes>

      <Route exact path ="/" element={<Bathroom />} />
      <Route exact path ="/livingroom" element={<LivingRoom />} />
      <Route exact path ="/shop" element={<Shop />} />
    </Routes>
    </Router>

    </>
  );
}

export default App;
