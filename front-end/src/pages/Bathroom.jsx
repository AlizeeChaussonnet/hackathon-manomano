import React from "react";

import { Link } from "react-router-dom";
import Navigation from "../Components/Navbar";
import Return from "../Components/Return";
import StackGrid, { transitions } from "react-stack-grid";

const Bathroom = () => {
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
              src="https://i.pinimg.com/564x/0f/a5/d0/0fa5d0f5b41a4274bdc3a4ebf9962412.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key2" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/21/4d/54/214d54a93915902494b9a6e4402ca9f8.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key3" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/76/4f/d8/764fd875f53b0cc4138173887ce91cb6.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key4" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/ce/f7/8c/cef78cd873a128825762568945a6b066.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key5" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/c8/79/72/c879721064bc32fb477230c800c60726.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key6" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/99/3f/d2/993fd228d328de0eaff7b0a459380769.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key7" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/a9/0b/5e/a90b5ecd43e6716d92f62ddea8afefa0.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key8" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/5b/63/df/5b63df0ae702a151c6acdf02188f2fb9.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key9" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/06/2e/95/062e95bbe80b90155bdb7067df633f39.jpg"
            />
          </div>
        </StackGrid>
      </div>
      {/* <div>
        <section className="py-48 bg-white flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
            <Link to="/shopbathroom">
              <div
                className="-mt-20 flex justify-end overflow-hidden"
                id="zoomIn"
              >
                <img
                  className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
                  src="https://i.pinimg.com/564x/0f/a5/d0/0fa5d0f5b41a4274bdc3a4ebf9962412.jpg"
                />
              </div>
            </Link>
            <div className="flex justify-start overflow-hidden" id="zoomIn">
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://i.pinimg.com/564x/21/4d/54/214d54a93915902494b9a6e4402ca9f8.jpg"
              />
            </div>
            <div
              className="-mt-64 flex justify-start overflow-hidden"
              id="zoomIn"
            >
              <img
                className="rounded-lg object-cover overflow-hidden"
                src="https://i.pinimg.com/564x/76/4f/d8/764fd875f53b0cc4138173887ce91cb6.jpg"
              />
            </div>
            <div
              className="flex justify-start -mr-28 ml-28 overflow-hidden"
              id="zoomIn"
            >
              <img
                className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden "
                src="https://i.pinimg.com/564x/ce/f7/8c/cef78cd873a128825762568945a6b066.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </div> */}
    </div>
  );
};

export default Bathroom;
