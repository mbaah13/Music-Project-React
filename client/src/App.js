import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import MusicServices from "./pages/MusicServices";
import Contact from "./pages//Contact";
import GetStarted from "./pages/GetStarted";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  // const [framework, setFramework] = useState("");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="music-services" element={<MusicServices />} />
          <Route path="contact" element={<Contact />} />
          <Route path="get-started" element={<GetStarted />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
