import React from "react";
import { ReactComponent as WhatsAppLogo } from "./img/whatsapp-white.svg";
import { Link } from "react-router-dom";

function StickyFooter() {
  return (
    <footer className="sticky bottom-0 w-full md:px-4">
      <Link
        to="/whatsapp"
        className="flex justify-around items-center bg-green-400 w-full h-20 md:rounded-tl-md md:rounded-tr-md"
      >
        <div className="flex">
          <WhatsAppLogo title="WA logo" className="w-7 mr-1" />
          <h2 className="text-2xl text-white mr-1">Book an appointment</h2>
          <span className="relative inline-flex w-3 h-3 bg-red-500 rounded-xl">
            <span className="h-3 w-3 absolure inline-flex bg-red-500 rounded-xl animate-ping opacity-75"></span>
          </span>
        </div>
      </Link>
    </footer>
  );
}

export default StickyFooter;
