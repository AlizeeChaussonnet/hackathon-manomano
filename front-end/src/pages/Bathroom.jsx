import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navbar";
import Return from "../Components/Return";

const Bathroom = () => {
  return (
    <div>
      <Navigation />
      <Link to="/">
        <Return />
      </Link>
      <section className="py-48 bg-white flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
          <Link to="/shopbathroom">
            <div className="-mt-20 flex justify-end">
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://i.pinimg.com/564x/0f/a5/d0/0fa5d0f5b41a4274bdc3a4ebf9962412.jpg"
              />
            </div>
          </Link>
          <div className="flex justify-start">
            <img
              className="rounded-lg object-cover overflow-hidden"
              src="https://i.pinimg.com/564x/21/4d/54/214d54a93915902494b9a6e4402ca9f8.jpg"
            />
          </div>
          <div className="-mt-64 flex justify-start">
            <img
              className="rounded-lg object-cover overflow-hidden"
              src="https://i.pinimg.com/564x/76/4f/d8/764fd875f53b0cc4138173887ce91cb6.jpg"
            />
          </div>
          <div className="flex justify-start -mr-28 ml-28">
            <img
              className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
              src="https://i.pinimg.com/564x/ce/f7/8c/cef78cd873a128825762568945a6b066.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bathroom;
