import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import WhatsAppPage from "./components/WhatsAppPage";
import WhatsAppComplete from "./components/WhatsAppComplete";
import MainPage from "./components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/whatsapp" element={<WhatsAppPage />} />
        <Route path="/whatsapp/thanks" element={<WhatsAppComplete />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
