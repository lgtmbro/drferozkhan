import React, { useEffect } from "react";
import ContactCard from "./ContactCard";
import IntroductionCard from "./introductionCard";
import ServicesCard from "./ServicesCard";
import StickyFooter from "./StickyFooter";

function MainPage() {
  useEffect(() => {
    document.title = "Dr Feroz Khan - Port Shepstone";
  });
  return (
    <main className="flex flex-col h-screen md:max-w-screen-lg mx-auto">
      <div className="flex-grow">
        <div className="mx-4 my-4 p-2 rounded-md bg-red-200 border-2 border-red-500 text-red-600">
          <p>
            For all official information and updates regarding the COVID-19
            pandemic please visit the South African Department of Health's
            website at:
            <a
              className="underline"
              href="https://www.sacoronavirus.co.za"
              target="_sa_covid"
            >
              {" "}
              sacoronavirus.co.za
            </a>
          </p>
        </div>
        <IntroductionCard />
        <ServicesCard />
        <ContactCard />
      </div>
      <StickyFooter />
    </main>
  );
}

export default MainPage;
