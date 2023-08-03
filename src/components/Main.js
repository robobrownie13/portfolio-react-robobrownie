import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { useState } from "react";

const Main = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavClick = (section) => {
    setCurrentPage(section);
  };
  const render = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header />
      <Navbar handleNavClick={handleNavClick} />
      {render()}
      <Footer />
    </>
  );
};

export default Main;
