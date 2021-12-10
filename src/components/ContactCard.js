import React from "react";
import Card from "./Card";

function ContactCard() {
  const locationUrl =
    "https://www.google.com/maps/place/17+Reynolds+St,+Port+Shepstone,+4240,+South+Africa";
  return (
    <Card>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 w-full h-full">
        <div className="p-1 flex flex-col justify-between">
          <div>
            <h1 className="text-xl m-2 font-bold">Contact Details:</h1>
            <p className="text-lg m-2">
              Email:
              <a
                className="ml-1 underline"
                href="mailto:drfkhanshepmed@gmail.com"
              >
                drfkhanshepmed@gmail.com
              </a>
            </p>
            <p className="text-lg m-2">
              Cell Phone:
              <a className="ml-1 underline" href="tel:+27710101786">
                071 01 01 786
              </a>
            </p>
            <p className="text-lg m-2">
              Landline:
              <a className="ml-1 underline" href="tel:+27394920501">
                039 492 0501
              </a>
            </p>
          </div>

          <div className="m-2 mt-6 grid sm:grid-cols-1 md:grid-cols-2">
            <div className="w-100 md:w-5/6">
              <h1 className="text-xl mb-1 font-bold">Address:</h1>
              <a
                className="text-lg md:underline"
                href={locationUrl}
                target="_google_map"
              >
                <p>17 Reynolds Street</p>
                <p>Port Shepstone</p>
                <p>KwaZulu-Natal</p>
                <p>4230</p>
              </a>
            </div>

            <div className="w-100 mt-6 md:mt-0 md:text-right">
              <h1 className="text-xl mb-1 font-bold">Open Hours:</h1>

              <p className="font-bold text-md">
                MON - FRI:{" "}
                <span className="font-medium"> 9:00AM - 16:30PM</span>
              </p>

              <p className="font-bold text-md mt-2">
                SAT: <span className="font-medium"> 9:00AM - 12:30PM</span>
              </p>

              <p className="font-bold text-md mt-2">
                SUN: <span className="font-medium">10:00AM - 12:30PM</span>
              </p>
            </div>
          </div>
          <a href={locationUrl} target="_google_map">
            <p
              style={{ backgroundColor: "#4e6366" }}
              className="md:hidden text-white text-center font-bold py-2 px-4 m-3 rounded-full"
            >
              📍Press here for navigation
            </p>
          </a>
        </div>
        <div>
          <iframe
            className="
          h-64 md:h-full w-full rounded-br-md rounded-bl-md md:rounded-tr-md md:rounded-bl-none
        "
            title="Google Map"
            src="https://maps.google.com/maps?q=17%20rynolds%20street,%20port%20sheptone&t=&z=16&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </Card>
  );
}

export default ContactCard;
