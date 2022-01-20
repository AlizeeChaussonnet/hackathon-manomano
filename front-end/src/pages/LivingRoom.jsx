import React from "react";
import { Link } from "react-router-dom";
import Return from "../Components/Return";
import Navigation from "../Components/Navbar";
import StackGrid, { transitions } from "react-stack-grid";
import { useNavigate } from "react-router";

const LivingRoom = () => {
  const { scaleDown } = transitions;
  const navigate = useNavigate()

  return (
    <div>
      <Navigation />
      <Link to="/inspiration">
        <Return />
      </Link>
      <div className="mt-8">
        <StackGrid
          columnWidth={400}
          
        >
          <div className="overflow-hidden rounded-3xl" key="key1" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/b3/4f/dc/b34fdcb5c6ab5e9c96c06332eda060fa.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key2" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/736x/88/97/8a/88978a7bc69023d7e6c704bb8bbf207e.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key3" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/98/7f/cc/987fcc2dc4c6092840b1a22f1d70de33.jpg"
              onClick={() => (navigate("/shoplivingroom"))}
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key4" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/7e/b9/b1/7eb9b146d2c05bd3cb65e312e21fee3a.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key5" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/7a/22/98/7a22982aa9a9b245b8b8e0c19ccdda46.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key6" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/41/e6/5b/41e65b428e185166d050ff180307d207.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key7" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/98/86/fb/9886fb4d892a9f030f6e38fe33cf783f.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key8" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/42/73/06/42730632d47954d7873fdc7396f4af34.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key9" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/24/73/1f/24731f4c0843bde2aea1b237e723db1c.jpg"
            />
          </div>
        </StackGrid>
      </div>
      {/* <div>
        <section className="py-48 bg-white flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div
              className="-mt-20 flex justify-end overflow-hidden"
              id="zoomIn"
            >
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://i.pinimg.com/564x/b3/4f/dc/b34fdcb5c6ab5e9c96c06332eda060fa.jpg"
              />
            </div>
            <div className="flex justify-start overflow-hidden" id="zoomIn">
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://i.pinimg.com/736x/88/97/8a/88978a7bc69023d7e6c704bb8bbf207e.jpg"
              />
            </div>
            <Link to="/shoplivingroom">
              <div
                className="-mt-64 flex justify-start overflow-hidden"
                id="zoomIn"
              >
                <img
                  className="rounded-lg object-cover overflow-hidden"
                  src="https://i.pinimg.com/564x/98/7f/cc/987fcc2dc4c6092840b1a22f1d70de33.jpg"
                />
              </div>
            </Link>
            <div
              className="flex justify-start -mr-28 ml-28 overflow-hidden"
              id="zoomIn"
            >
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://i.pinimg.com/564x/7e/b9/b1/7eb9b146d2c05bd3cb65e312e21fee3a.jpg"
              />
            </div>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default LivingRoom;
