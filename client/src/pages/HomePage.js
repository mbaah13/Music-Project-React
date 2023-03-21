import "../App.css";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import ATag from "../components/ATag";
import { useState, useEffect } from "react";
import FrameworkInput from "../components/FrameworkInput";
import Layout from "../components/Layout";
import { useSelector } from 'react-redux';

function HomePage() {
  const framework = useSelector((state) => state.framework.value);

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/maggie")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (

    <div className="App">
      <Layout>
        <div className="container container-homepage">
        <Image />
        <Paragraph>
          Learn all the <code>Languages</code> 
        </Paragraph>
        <Paragraph>
          Our message from the server is {message}
        </Paragraph>
        <ATag>Learn {framework}</ATag>
       <FrameworkInput />
       </div>
      </Layout>
    </div>
  );
}

export default HomePage;


