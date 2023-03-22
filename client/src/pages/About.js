import "../App.css";
import { useState } from "react";
import Layout from "../components/Layout";
import AboutPageContent from "../components/AboutPageContent";
import { useEffect } from "react";

function About() {
  // const [framework, setFramework] = useState("");
  const [dbdata, setDbdata] = useState("");
async function fetchMongo(){
  await fetch("http://localhost:8000/mongodb")
  .then((res) => res.json())
  .then((data) => setDbdata(data));
}

  useEffect(() => {
    fetchMongo();
  }, []);
 console.log(dbdata)
  return (
    <div className="App">
      <Layout>
        <div className="container container-about">
          <h1 className="tag-line">
            Music is the mediator of the <br />
            spiritual and Soul{" "}
          </h1>
          {dbdata.map((data) => (
            <AboutPageContent
              title={data.title}
              number={data.number}
              paragraph={data.paragraph}
              imageUrl={data.imageUrl}
            />
          ))}

          {/* <AboutPageContent
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
        
          />*/}
        </div>
      </Layout>
    </div>
  );
}

export default About;
