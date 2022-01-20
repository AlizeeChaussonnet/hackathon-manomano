import React from "react";
import Navigation from "../Components/Navbar";
import Return from "../Components/Return";
import { Link } from "react-router-dom";
const Inspiration = () => {
  return (
    <div>
      <Navigation />
      <Link to="/">
        <Return />
      </Link>
      <div>
        <section className="py-48 bg-white flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div
              className="-mt-20 flex justify-end overflow-hidden"
              id="zoomIn"
            >
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://i.pinimg.com/564x/58/a9/bc/58a9bc826c9a00733bda1649398585d7.jpg"
              />
            </div>
            <div className="flex justify-start overflow-hidden" id="zoomIn">
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://i.pinimg.com/736x/29/8b/f8/298bf8e233180bb5fd1072b5fac6b818.jpg"
              />
            </div>

            <div
              className="-mt-64 flex justify-start overflow-hidden"
              id="zoomIn"
            >
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://i.pinimg.com/564x/b7/5a/27/b75a27243732cda553fde740a82965c4.jpg"
              />
            </div>

            <div
              className="flex justify-start -mr-28 ml-28 overflow-hidden"
              id="zoomIn"
            >
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://i.pinimg.com/736x/0c/a6/db/0ca6db6721c07ce0af4d2cd335265f2a.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Inspiration;
