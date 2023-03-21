import "../App.css";
import { useState } from "react";
import Layout from "../components/Layout";

function Contact() {
  const [framework, setFramework] = useState("");
  return (

    <div className="App">
      <Layout>
        <div className="container container-contact">
    Contact
       </div>
      </Layout>
    </div>
  );
}

export default Contact;

