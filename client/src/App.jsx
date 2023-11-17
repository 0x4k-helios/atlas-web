import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Properties from "./components/Properties";

function App() {
  return (
    <>
      <Hero />
      <Companies />
      <Properties />
    </>
  );
}

export default App;
