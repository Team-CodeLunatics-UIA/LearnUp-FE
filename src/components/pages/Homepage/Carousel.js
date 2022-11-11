import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Banner1 from "../../../assets/home/carousel/banner1.jpg";
import Banner2 from "../../../assets/home/carousel/transformation.jpg";
import Banner3 from "../../../assets/home/carousel/banner3.jpg";

import styles from "../../../styles/Home/carousel.module.css";

const CarouselSlider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      transitionTime={500}
      interval={4000}
      showThumbs={false}
      showArrows={false}
      swipeable={false}
      showStatus={false}
      dynamicHeight={false}
      className={styles.carousel}
    >
      <div>
        <img alt="" />
        <div className={styles.slide__container}>
          <div className={styles.left}>
            <div className={styles.showcase__text}>
              <div className={styles.heading}>
                <p className={styles.text__secondary}>LearnUp: Schools Analysis and Monitoring System</p>
                <p className={styles.text__primary}>Creating a Unified Platform for Schools Transformation and Improvement</p>
              </div>
              <div className={styles.info}>
                Using a secure online interface, Government can administer, monitor and analyze the performance of every registered primary and
                secondary educational institutions on different levels. Different information and data will be given related to curriculum progress,
                budget, attendance, successful passouts as well as student feedbacks in the same domains by officials at different levels starting
                from the Schools to State level. These data will be tracked and analyzed at each stage and visualized to show the current trend
                related to different areas of the schooling and educational growth. Selected Government officials working on the topmost levels will
                be taking actions and remedials related to the other policies based on the analysis of data and feedback improvements suggested.
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img src={Banner2} alt="Carousel2" />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.slide__container2}>
          <div className={styles.center}>
            <div className={styles.second_text}>
              Commmited to Equity <br /> And <br /> Excellence in Education
            </div>
          </div>
          <div className={styles.second_bg}>
            <img src={Banner1} alt="Carousel2" />
          </div>
        </div>
      </div>
      <div className={styles.bgImage}>
        <img src={Banner3} alt="Carousel2" />
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
