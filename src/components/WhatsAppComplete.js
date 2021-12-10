import React from "react";
import { Link } from "react-router-dom";

function WhatsAppComplete() {
  return (
    <div className="w-screen h-screen grid justify-items-center items-center px-3 ">
      <div
        style={{ backgroundColor: "#ecf5fc", border: "solid 3px #26bdb6" }}
        className="h-48 w-full md:w-96 md:mx-0 p-3 md:p-5 rounded-md grid justify-items-center grid content-around"
      >
        <h1>Thank you for getting in contact with us.</h1>

        <Link
          to="/"
          style={{ backgroundColor: "#4e6366" }}
          className="flex text-white font-bold py-3 px-4 m-3 rounded-full justify-center"
        >
          🏠 Go Home
        </Link>
      </div>
    </div>
  );
}

export default WhatsAppComplete;
