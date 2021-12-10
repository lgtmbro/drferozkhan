import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import WhatsAppPage from "./components/WhatsAppPage";
import WhatsAppComplete from "./components/WhatsAppComplete";
import MainPage from "./components/MainPage";

function App() {
  const [userInfo, setUserInfo] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/appointment"
          element={<WhatsAppPage setUserInfo={setUserInfo} />}
        />
        <Route
          path="/appointment/thanks"
          element={<WhatsAppComplete userInfo={userInfo} />}
        />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
