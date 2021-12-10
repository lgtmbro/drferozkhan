import React, { useState } from "react";
import WhatsAppPage from "./components/WhatsAppPage";
import MainPage from "./components/MainPage";

function App() {
  const [showWhatsAppPage, setShowWhatsAppPage] = useState(false);
  const render = showWhatsAppPage ? (
    <WhatsAppPage showWA={setShowWhatsAppPage} />
  ) : (
    <MainPage showWA={setShowWhatsAppPage} />
  );

  return render;
}

export default App;
