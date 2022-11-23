import React from "react";
import HomeNavbar from "../Navbar/HomeNavbar";
import Footer from "../Footer";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Faq from "./Faq";
import Info from "./Info";

const Home = () => {
  return (
    <div>
      <div id="vizContainer"></div>
      <HomeNavbar />
      <Carousel />
      <Cards />
      <Info />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
