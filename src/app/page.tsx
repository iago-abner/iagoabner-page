import About from "../components/About/About";
// import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import "../styles/page.scss";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
