import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Trending />
      <Footer />
    </>
  );
}

export default App;
