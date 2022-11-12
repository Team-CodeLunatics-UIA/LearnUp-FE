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
                Using a secure online interface, Government can manage, oversee, and assess on several levels each registered primary and secondary
                educational institution's performance. Officials at various levels, starting from the school level to the state level, will provide
                various statistics and data relating to curriculum advancement, budget, attendance, successful passouts, as well as student comments
                in the same domains. These data will be monitored, evaluated, and visualised at each level to demonstrate the present trend relating
                to many facets of educational development. Selected government employees at the highest levels will implement corrective measures and
                actions based on data analysis and suggestions for improvement.
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
