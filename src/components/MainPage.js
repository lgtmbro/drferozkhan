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
        <IntroductionCard />
        <ServicesCard />
        <ContactCard />
      </div>
      <StickyFooter />
    </main>
  );
}

export default MainPage;
