import "../App.css";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import ATag from "../components/ATag";
import { useState } from "react";
import FrameworkInput from "../components/FrameworkInput";
import Layout from "../components/Layout";

function App() {
  const [framework, setFramework] = useState("");
  return (

    <div className="App">
      <Layout>
        <div className="container container-homepage">
        <Image />
        <Paragraph>
          Learn all the <code>Languages</code> 
        </Paragraph>
        <ATag>Learn {framework}</ATag>
       <FrameworkInput setFramework={setFramework} />
       </div>
      </Layout>
    </div>
  );
}

export default App;


