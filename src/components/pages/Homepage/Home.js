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
      <tableau-viz id="tableauViz"       
  src='https://public.tableau.com/shared/6Z63RT4NW?:display_count=n&:origin=viz_share_link'      
  device="desktop" hide-tabs>
</tableau-viz>
      <Footer />
    </div>
  );
};

export default Home;
