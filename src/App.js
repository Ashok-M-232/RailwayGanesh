import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./HomePage";
import Reels from "./components/Reels/Reels";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reels" element={<Reels />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;