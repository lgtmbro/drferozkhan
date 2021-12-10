import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function WhatsAppComplete({ userInfo }) {
  const nav = useNavigate();

  useEffect(() => {
    if (userInfo?.date && userInfo?.name) {
      const message = `Hi there, my name is ${
        userInfo.name
      } I would like to make an appointment for ${userInfo.date.toDateString()} at ${userInfo.date
        .toLocaleTimeString()
        .substr(0, 5)}.`;

      window.open(
        `https://wa.me/+27710101786?text=${message.replace(" ", "%20")}`,
        "_wa_doc"
      );
    } else {
      nav("/");
    }
  });

  return (
    <div className="w-screen h-screen grid justify-items-center items-center px-3 ">
      <div
        style={{ backgroundColor: "#ecf5fc", border: "solid 3px #26bdb6" }}
        className="h-48 w-full md:w-96 md:mx-0 p-3 md:p-5 rounded-md grid justify-items-center grid content-around"
      >
        <h1>Thank you for getting in contact with us {userInfo.name}.</h1>

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
