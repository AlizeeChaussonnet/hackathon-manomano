import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bathroom from "./pages/Bathroom";
import ShopBathroom from "./pages/ShopBathroom";
import Homepage from "./pages/Homepage";
import LivingRoom from "./pages/LivingRoom";
import Kitchen from "./pages/Kitchen";
import Bedroom from "./pages/Bedroom";
import ShopBedroom from "./pages/ShopBedroom";
import ShopLivingRoom from "./pages/ShopLivingRoom";
import ShopKitchen from "./pages/ShopKitchen";
import Forum from "./pages/Forum";
import Inspiration from "./pages/Inspiration";
import Configurator3D from "./pages/Configurator3D";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/inspiration" element={<Inspiration />} />
          <Route exact path="/bathroom" element={<Bathroom />} />
          <Route exact path="/livingroom" element={<LivingRoom />} />
          <Route exact path="/kitchen" element={<Kitchen />} />
          <Route exact path="/bedroom" element={<Bedroom />} />
          <Route exact path="/shopbathroom" element={<ShopBathroom />} />
          <Route exact path="/shopbedroom" element={<ShopBedroom />} />
          <Route exact path="/shopkitchen" element={<ShopKitchen />} />
          <Route exact path="/shoplivingroom" element={<ShopLivingRoom />} />
          <Route exact path="/forum" element={<Forum />} />
          <Route exact path="/configurator" element={<Configurator3D />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
