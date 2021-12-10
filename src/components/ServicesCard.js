import React from "react";
import Service from "./img/services.jpg";
import Card from "./Card";
import ServiceTag from "./ServiceTag";

function ServicesCard() {
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div
          className="bg-cover h-64 md:h-full w-full"
          style={{
            backgroundImage: `url(${Service})`,
          }}
        ></div>
        <div className="h-fit p-4 flex flex-wrap content-between overflow-auto">
          <h3 className="text-2xl my-2">List of Services</h3>
          <ServiceTag
            value="Adult & child consultation & treatment"
            initials="AC"
          />
          <ServiceTag
            value="Circumcisions + other surgical procedures"
            initials="CO"
          />
          <ServiceTag value="Erectile dysfunction" initials="ED" />
          <ServiceTag value="Premature ejaculation" initials="PE" />
          <ServiceTag value="Scans and ultrasounds" initials="SU" />
          <ServiceTag value="Antinatal checkups (Pregnancy)" initials="AC" />
          <ServiceTag value="Slimming and weight gain" initials="SW" />
          <ServiceTag value="Diabetes & Hypertension" initials="DH" />
          <ServiceTag
            value="Painless removal of warts and other skin lesions"
            initials="PO"
          />
          <ServiceTag value="H.I.V. Counselling and Monitoring" initials="HV" />
          <ServiceTag value="ECG (Heart test)" initials="EH" />
          <ServiceTag value="Labratory services" initials="LS" />
          <ServiceTag value="Skin problems" initials="SK" />
          <ServiceTag
            value="Medical Evaluation (Insurance, PDP)"
            initials="ME"
          />
        </div>
      </div>
    </Card>
  );
}

export default ServicesCard;
