import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Properties from "./components/Properties";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Hero />
      <Companies />
      <Properties />
      <Features />
    </>
  );
}

export default App;
