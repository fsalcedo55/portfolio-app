import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <div>
          <div className="fixed">
            <Navbar />
          </div>
          <div className="flex flex-col min-w-full bg-gradient-to-r from-darkGreen via-darkGreen to-darkLightGreen">
            <About />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </div>
        </div>
        <div>
          <Footer />
        </div>

        {/* <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/work" element={<Work />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </div>
    );
  }
}

export default App;
