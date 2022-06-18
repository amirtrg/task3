import React from "react";

function Loading() {
  return (
    <div className="flex mt-20 space-x-4 mx-auto justify-center">
      <div className=" h-4 animate-ping bg-blue-500 w-4 rounded-full"></div>
      <div className=" delay-150 h-4 animate-ping bg-blue-500 w-4 rounded-full"></div>
      <div className=" delay-300 h-4 animate-ping bg-blue-500 w-4 rounded-full"></div>
    </div>
  );
}

export default Loading;
