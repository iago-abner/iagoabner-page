import About from "../components/About/About";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import "../styles/page.scss";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}
