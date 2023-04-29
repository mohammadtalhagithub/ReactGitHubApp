import React from "react";
import Header from "./Header";
import Heading from "./HeadingJSX";
import Projects from "./Projects";
import Row from "./Row";
import Section1 from "./Section1";
import Card from "./cards/Card";
import Footer from "./Footer";
import Data from "../components/data/data";
import W3Card from "./cards/W3Card";
import Navbar from "./Navbar";
import Main from "./Main";


function App() {
  return (
    <div>
      <Navbar />
      <Main />
      {/* <Navbar /> */}
      
      {/* <Header text="React" />
      <Heading />

      <W3Card /> */}

      {/* <Row text1="Row1Col1" text2="Row1Col2" text3="Row1Col3" text4="Row1Col4" /> */}

      {/* <Card
        img={Data[0].img}
        title={Data[0].projectTitle}
        description={Data[0].projectDesc}
        btnTarget="#"
        btnText="View"
      /> */}

      {/* <Section1 title="Skills" />
      <Section1 title="Education" />
      <Section1 title="Projects" /> */}

      <Projects />
      <Footer />
    </div>
  );
}

export default App;