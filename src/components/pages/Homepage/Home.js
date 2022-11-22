import React from "react";
import HomeNavbar from "../Navbar/HomeNavbar";
import Footer from "../Footer";
import Carousel from "./Carousel";
import Cards from "./Cards";

const Home = () => {
  return (
    <div>
      <div id="vizContainer"></div>
      <HomeNavbar />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
