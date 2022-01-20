import React from "react";
import { CameraIcon } from "@heroicons/react/solid";

export default function Button3D() {
  return (
    <button
      type="button"
      className="flex items-center rounded-lg bg-teal-300  "
    >
      <CameraIcon className="h-5 w-5 text-sky-900" />
      Visualiser en 3D
    </button>
  );
}
