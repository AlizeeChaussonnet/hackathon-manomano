import React from "react";
import Navigation from "../Components/Navbar";
import Return from "../Components/Return";
import { Link } from "react-router-dom";
import StackGrid, { transitions } from "react-stack-grid";

const Inspiration = () => {
  const { scaleDown } = transitions;
  return (
    <div>
      <Navigation />
      <Link to="/">
        <Return />
      </Link>
      <div>
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
              src="https://i.pinimg.com/564x/58/a9/bc/58a9bc826c9a00733bda1649398585d7.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key2" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/750x/6d/b0/28/6db02804b04b4a4e124d98e520f039cd.jpg"
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
              src="https://i.pinimg.com/564x/d8/be/df/d8bedfcbf6c4d5e1229ed365c3d414aa.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key5" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/736x/29/8b/f8/298bf8e233180bb5fd1072b5fac6b818.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key6" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/21/4d/54/214d54a93915902494b9a6e4402ca9f8.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key7" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/b7/5a/27/b75a27243732cda553fde740a82965c4.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key8" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/736x/0c/a6/db/0ca6db6721c07ce0af4d2cd335265f2a.jpg"
            />
          </div>
          <div className="overflow-hidden rounded-3xl" key="key9" id="zoomIn">
            {" "}
            <img
              className="object-cover rounded-3xl overflow-hidden"
              src="https://i.pinimg.com/564x/0f/a5/d0/0fa5d0f5b41a4274bdc3a4ebf9962412.jpg"
            />
          </div>
        </StackGrid>
      </div>
    </div>
  );
};

export default Inspiration;
