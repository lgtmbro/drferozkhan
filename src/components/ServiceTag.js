import React from "react";

function ServiceTag({ value, initials }) {
  return (
    <div
      style={{ backgroundColor: "#4e6366" }}
      className="text-white flex filter shadow-md rounded-md p-2 my-1 justify-start w-full hover:border-white"
    >
      <div className="flex flex-col place-content-center">
        <h1
          style={{ backgroundColor: "#26bdb6" }}
          className="text-xl w-8 h-8 rounded-full text-center filter shadow"
        >
          {initials}
        </h1>
      </div>
      <h4 className="text-l ml-2 p-1">{value}</h4>
    </div>
  );
}

export default ServiceTag;
