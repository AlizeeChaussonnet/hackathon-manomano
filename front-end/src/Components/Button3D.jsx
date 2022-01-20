import React from "react";
import { CameraIcon } from "@heroicons/react/solid";

export default function Button3D() {
  return (
    <button
      type="button"
      className="flex items-center p-1 bg-[#0c193a] rounded-md text-white font-semibold tracking-wide cursor-pointer"
    >
      <CameraIcon className="h-5 w-5 text-white mr-2" />
      3D
    </button>
  );
}
