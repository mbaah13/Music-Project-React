import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import MusicServices from "./pages/MusicServices";
import Contact from "./pages//Contact";
import GetStarted from "./pages/GetStarted";

function App() {
  const [framework, setFramework] = useState("");

  // create a homepage component.
  // copy the content of the className App in the homepage component.

  // import the homepage component into the app.js

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="music-services" element={<MusicServices />} />
        <Route path="contact" element={<Contact />} />
        <Route path="get-started" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
