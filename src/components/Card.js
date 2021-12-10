import React from "react";

function Card({ children }) {
  return (
    <div className="px-4">
      <section
        className="w-full md:h-96 my-6 rounded-md filter drop-shadow-md"
        style={{ backgroundColor: "#ecf5fc", border: "solid 3px #26bdb6" }}
      >
        {children}
      </section>
    </div>
  );
}

export default Card;
