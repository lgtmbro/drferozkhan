import React, { useState } from "react";
import { ReactComponent as WhatsAppLogo } from "./img/whatsapp-white.svg";

function WhatsAppPage({ showWA }) {
  const [name, setName] = useState();
  const [time, setTime] = useState();

  const sendRequest = () => {
    const date = new Date(time);

    if (date.toJSON() && name) {
      const message = `Hi There, My name is ${name} I would like to make an appointment for ${date.toDateString()} at ${date
        .toLocaleTimeString()
        .substr(0, 5)}.`;

      window.dataLayer.push({
        event: "whatsapp_clicks",
      });

      window.open(
        `https://wa.me/+27710101786?text=${message.replace(" ", "%20")}`,
        "_wa_doc"
      );

      showWA(false);
    }
  };

  return (
    <div className="w-screen h-screen grid justify-items-center items-center px-3 ">
      <div
        style={{ backgroundColor: "#ecf5fc", border: "solid 3px #26bdb6" }}
        className="h-fit w-full md:w-96 md:mx-0 p-3 md:p-5 rounded-md grid"
      >
        <div className="grid justify-items-end">
          <div onClick={() => showWA(false)} className="cursor-pointer">
            <svg
              style={{ fill: "#26bdb6" }}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>
        <label className="font-bold">Full Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="rounded-md border border-black text-xl p-1 mb-4"
          placeholder="Full Name"
        />
        <label className="font-bold">Appointment Date and Time</label>
        <input
          type="datetime-local"
          onChange={(e) => setTime(e.target.value)}
          className="rounded-md border border-black text-xl p-1 mb-4 bg-white w-full"
        />
        <button
          onClick={sendRequest}
          style={{ backgroundColor: "#4e6366" }}
          className="flex text-white font-bold py-3 px-4 m-3 rounded-full justify-center"
        >
          <WhatsAppLogo className="w-6 mr-2" />
          Send Booking Request
        </button>
      </div>
    </div>
  );
}

export default WhatsAppPage;
