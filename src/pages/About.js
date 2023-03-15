import "../App.css";
import { useState } from "react";
import Layout from "../components/Layout";

function About() {
  const [framework, setFramework] = useState("");
  return (
    <div className="App">
      <Layout>
        <div className="container container-about">
          <h1 className="tag-line">
            Music is the mediator of the spiritual and{" "}
          </h1>
          <div className="about-content">
            <h3>Music is the Way</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              sodales orci sapien, id elementum diam dapibus in. Sed bibendum
              quis arcu sed varius. Nullam quis{" "}
            </p>
            <img className="about-image" src="../images/aboutpic-singing.jpg"></img>
          </div>
          <div className="about-content">
            <h3>Music is the Way</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              sodales orci sapien, id elementum diam dapibus in. Sed bibendum
              quis arcu sed varius. Nullam quis{" "}
            </p>
            <img className="about-image" src="../images/aboutpic-singing.jpg"></img>
          </div>
          <div className="about-content">
            <h3>Music is the Way</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              sodales orci sapien, id elementum diam dapibus in. Sed bibendum
              quis arcu sed varius. Nullam quis{" "}
            </p>
            <img className="about-image" src="../images/aboutpic-singing.jpg"></img>
          </div>
          

        </div>
      </Layout>
    </div>
  );
}

export default About;
