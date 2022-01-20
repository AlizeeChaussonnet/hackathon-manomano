import React from "react";
import Navigation from "../Components/Navbar";
import Return from "../Components/Return";
import { Link } from "react-router-dom";
import StackGrid, { transitions } from "react-stack-grid";

const Bedroom = () => {
  const { scaleDown } = transitions;

  return (
    <div>
      <Navigation />
      <Link to="/inspiration">
        <Return />
      </Link>
      <div className="mt-8">
        <StackGrid
          columnWidth={400}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
        >
          <div className="overflow-hidden rounded-3xl" key="key1" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/e4/bc/07/e4bc07913934b6df55a54c469969d9bb.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key2" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/750x/66/c5/1d/66c51d6c87fbccb03766e741b6b41b9e.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key3" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/41/84/ae/4184ae839af61a118407af8a429f6aeb.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key4" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/750x/00/62/6f/00626f929cc30cc32accaefa9d85f21f.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key5" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/e4/21/25/e421255b94a16f3f83b014888a5f4bc9.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key6" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/7c/ae/f4/7caef4f0298ad63ed12aaf779cfc326b.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key7" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/d1/0c/e4/d10ce48b7bad6ca5841c55cd60f5721a.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key8" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/31/67/a5/3167a581683bc6860f34b6b8fbeca742.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key9" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/750x/0f/22/56/0f2256f75b8c5503a2dbabc01090dd2a.jpg"
            />
          </div>
        </StackGrid>
      </div>
      {/* <div>
        <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="-mt-20 flex justify-end overflow-hidden" id="zoomIn">
            <img
              className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
              src="https://i.pinimg.com/750x/00/62/6f/00626f929cc30cc32accaefa9d85f21f.jpg"
            />
          </div>
          <div className="flex justify-start overflow-hidden" id="zoomIn">
            <img
              className="rounded-lg object-cover overflow-hidden"
              src="https://i.pinimg.com/750x/66/c5/1d/66c51d6c87fbccb03766e741b6b41b9e.jpg"
            />
          </div>
          <div
            className="-mt-64 flex justify-start overflow-hidden"
            id="zoomIn"
          >
            <img
              className="rounded-lg object-cover overflow-hidden"
              src="https://i.pinimg.com/750x/0f/22/56/0f2256f75b8c5503a2dbabc01090dd2a.jpg"
            />
          </div>
          <Link to="/shopbedroom">
            <div
              className="flex justify-start -mr-28 ml-28 overflow-hidden"
              id="zoomIn"
            >
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                src="https://i.pinimg.com/564x/e4/bc/07/e4bc07913934b6df55a54c469969d9bb.jpg"
              />
            </div>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Bedroom;
