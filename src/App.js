import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./partials/About";
import Card from "./partials/Card";
import Footer from "./partials/Footer";
import Projects from "./partials/Projects";
import Skills from "./partials/Skills";
import data from "./assets/data";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./partials/Loading";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-sine",
      offset: 300,
      mirror: true
    });
  });

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }
  //   , 3000);
  // }
  //   , []);
  
  const loading = useState(true);

  return (
    <div className="App">
      {loading && !loading.length ? <Loading /> :
        <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
          <Card name={data.name} title={data.title} social={data.social} />
          <About title={data.about.title} description={data.about.description} />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />
          <Footer />
        </div>
      }
    </div>
  );
}
export default App;
