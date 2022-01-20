import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import image3D from "../assets/image/salledebain3D.jpg";
import imageVasque from "../assets/image/vasquesansfd.png";
import Return from "../Components/Return";
import imageRobinet from "../assets/image/robinetsansfd.png";
import imageBougie from "../assets/image/bougiesansfd.png";
import imageTapis from "../assets/image/carpet3D.png";

export default function Configurator3D() {
  return (
    <div>
      <Navbar />
      <Link to="/shopbathroom">
        <Return />
      </Link>
      <div className="flex justify-center">
        <div className="w-1/3 h-1/3 justify-center flex py-4">
          <div className="w-36 bg-[#0c193a] text-white px-4 ">
            <p className="py-4">Customisation</p>
            <img className="py-4" src={imageVasque} />
            <img className="py-4" src={imageRobinet} />
            <img className="py-4 h-36 pl-4" src={imageBougie} />
            <img className="py-4 h-36 pl-4" src={imageTapis} />
          </div>
          <img className="" src={image3D} />
        </div>
      </div>
    </div>
  );
}
