import React from "react";

import IntroLoader from "./components/IntroLoader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OurStory from "./components/OurStory/OurStory";
import Celebrations from "./components/Celebrations/Celebrations";
import Gallery from "./components/Gallery/Gallery";
import LuckyDip from "./components/LuckyDip/LuckyDip";
import Nimarjanam from "./components/Nimarjanam/Nimarjanam";
import Visit from "./components/Visit/Visit";
import Kanipakam from "./components/Kanipakam/Kanipakam";
import Special2026 from "./components/Special2026/Special2026";

const App = () => {
  return (
    <>
      <IntroLoader />
      <Navbar />
      <Hero />
      <OurStory/>
      <Special2026/>
      <Celebrations/>
      <Gallery/>
      <LuckyDip/>
      <Nimarjanam/>
      <Kanipakam/>
      <Visit/>
    </>
  );
};

export default App;