import "../App.css";
import { useState } from "react";
import Layout from "../components/Layout";

function MusicServices() {
  const [framework, setFramework] = useState("");
  return (

    <div className="App">
      <Layout>
        <div className="container container-music-services">
        Music Services
       </div>
      </Layout>
    </div>
  );
}

export default MusicServices;

