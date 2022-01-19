import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Pinterest from "./pages/Pinterest";
import Shop from "./pages/Shop";

function App() {
  const [count, setCount] = useState(0);

  return (
<>
<Router>
    <Routes>

      <Route exact path ="/" element={<Pinterest />} />
      <Route exact path ="/shop" element={<Shop />} />
    </Routes>
    </Router>

    </>
  );
}

export default App;
