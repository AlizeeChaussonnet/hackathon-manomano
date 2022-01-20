import React from "react";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";

export default function Return() {
  return (
    <div className="flex items-center py-2 pl-2">
      <ArrowCircleLeftIcon className="h-5 w-5 text-gray-700" />
      <p className="text-gray-700">Return</p>
    </div>
  );
}
