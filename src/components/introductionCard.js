import React from "react";
import Dr from "./img/dr.jpg";
import Logo from "./img/logo.png";
import Card from "./Card";

function IntroductionCard() {
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div className="h-fit p-4 flex flex-wrap content-between">
          <div className="flex">
            <img className="h-20 self-center" src={Logo} alt="df" />
            <div className="ml-4">
              <h1 className="text-2xl font-bold">Dr Feroz Khan</h1>
              <h1 className="text-l md:text-xl">General Practitioner</h1>
              <h1 className="text-l md:text-xl">Practice Nr.: 0252786</h1>
              <h1 className="text-l md:text-xl">MP Nr.: MP0600849</h1>
            </div>
          </div>
          <p className="text-l md:text-xl pt-3 md:pt-0">
            Dr Feroz Khan studied at Stellenbosch University, where he qualified
            in 2003. His post graduate clinical experience in Western Cape. Dr
            Khan relocated to KwaZulu-Natal where he worked at St Andrews
            Hospital as a Medical Officer until 2006. Dr Khan established a
            private GP practice in Port Shepstone 2006.
          </p>
        </div>
        <div
          className="bg-cover h-64 md:h-full w-full"
          style={{
            backgroundImage: `url(${Dr})`,
          }}
        ></div>
      </div>
    </Card>
  );
}

export default IntroductionCard;
