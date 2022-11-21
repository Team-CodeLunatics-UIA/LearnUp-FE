import React from "react";
import HomeNavbar from "../Navbar/HomeNavbar";
import Footer from "../Footer";
import Carousel from "./Carousel";


const Home = () => {

  return (
    <div>
      <div id="vizContainer"></div>
      <HomeNavbar />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
