import React from "react";
import { useNavigate } from "react-router-dom";

export default function Selector() {
  const navigate = useNavigate();

  function send() {
    var selectElmt = document.getElementById("room");
    var valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;
    if (valeurselectionnee === "bathroom") {
      navigate("/bathroom");
    }
    if (valeurselectionnee === "bedroom") {
      navigate("/bedroom");
    }
    if (valeurselectionnee === "livingroom") {
      navigate("/livingroom");
    } else {
    }
  }

  return (
    <div className="text-center">
      <span className="text-sm font-semibold text-[#0c193a]">
        I want to
        <select
          className="bg-gray-100 rounded-md text-center font-semibold m-2"
          name="ideas"
          id="ideas"
        >
          <option value="">- Please choose an option -</option>
          <option value="design">custom</option>
          <option value="function">create a function in</option>
        </select>
        my
        <select
          className="bg-gray-100 rounded-md font-semibold  text-center m-2"
          name="room"
          id="room"
        >
          <option value="">- Please choose a piece -</option>
          <option value="bathroom">bathroom</option>
          <option value="livingroom">living room</option>
          <option value="kitchen">kitchen</option>
          <option value="bedroom">bedroom</option>
        </select>
        <button
          type="button"
          className="text-sm font-semibold text-[#0c193a] bg-[#74edce] rounded-md p-1"
          onClick={() => send()}
        >
          OK
        </button>
      </span>
    </div>
  );
}
