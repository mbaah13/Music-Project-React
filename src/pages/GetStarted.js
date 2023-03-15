import "../App.css";
import { useState } from "react";
import Layout from "../components/Layout";

function GetStarted() {
  const [framework, setFramework] = useState("");
  return (

    <div className="App">
      <Layout>
        <div className="container container-get-started">
        GetStarted
       </div>
      </Layout>
    </div>
  );
}

export default GetStarted;

