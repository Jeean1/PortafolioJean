import "./App.css";
import NavMenu from "./Components/NavMenu";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavMenu />
      <Home />
      <AboutMe />
      <Skills />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
