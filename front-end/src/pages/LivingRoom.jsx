import React from "react";
import { Link } from "react-router-dom";
import Return from "../Components/Return";
import Navigation from "../Components/Navbar";

const LivingRoom = () => {
  return (
    <div>
      <Navigation />
      <Link to="/">
        <Return />
      </Link>
      <div>
        <section className="py-48 bg-white flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="-mt-20 flex justify-end">
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://i.pinimg.com/564x/b3/4f/dc/b34fdcb5c6ab5e9c96c06332eda060fa.jpg"
              />
            </div>
            <div className="flex justify-start">
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://i.pinimg.com/736x/88/97/8a/88978a7bc69023d7e6c704bb8bbf207e.jpg"
              />
            </div>
            <Link to="/shoplivingroom">
              <div className="-mt-64 flex justify-start">
                <img
                  className="rounded-lg object-cover overflow-hidden"
                  src="https://i.pinimg.com/564x/98/7f/cc/987fcc2dc4c6092840b1a22f1d70de33.jpg"
                />
              </div>
            </Link>
            <div className="flex justify-start -mr-28 ml-28">
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://i.pinimg.com/564x/7e/b9/b1/7eb9b146d2c05bd3cb65e312e21fee3a.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LivingRoom;
