import "../App.css";
import { useState } from "react";
import Layout from "../components/Layout";
import AboutPageContent from "../components/AboutPageContent";

function About() {
  const [framework, setFramework] = useState("");
  return (
    <div className="App">
      <Layout>
        <div className="container container-about">
          <h1 className="tag-line">
            Music is the mediator of the <br />
            spiritual and Soul{" "}
          </h1>
          <AboutPageContent
            title="Music is the Way"
            number="1"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          sodales orci sapien, id elementum diam dapibus in. Sed bibendum
          quis arcu sed varius. Nullam quis"
            imageUrl="../images/aboutpic-singing.jpg"
          />
          <AboutPageContent
            title="Music is the Way"
            number="2"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          sodales orci sapien, id elementum diam dapibus in. Sed bibendum
          quis arcu sed varius. Nullam quis"
            imageUrl="../images/aboutpic-singing.jpg"
            classCustom="about-content-2"
          />
          <AboutPageContent
            title="Music is the Way"
            number="3"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          sodales orci sapien, id elementum diam dapibus in. Sed bibendum
          quis arcu sed varius. Nullam quis"
            imageUrl="../images/aboutpic-singing.jpg"
        
          />
        </div>
      </Layout>
    </div>
  );
}

export default About;
