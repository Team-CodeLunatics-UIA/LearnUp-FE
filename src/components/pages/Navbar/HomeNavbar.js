import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { GiHamburgerMenu } from "react-icons/gi";

import LearnUpLogo from "../../../assets/icons/learnup2.jpg";
import MoELogo from "../../../assets/icons/MoE.jpg";

import styles from "../../../styles/Home/HomeNavbar.module.css";
import GoogleTranslate from "./GoogleTranslate";

const HomeNavbar = () => {
  // const { isAuthenticated, user } = useContext(authContext);
  const [showModal, setShowModal] = useState(false);
  const [isSignupActive, setSignupActive] = useState(false);
  const history = useHistory();
  const [user, setUser] = useState(null);

  const modalClickHandler = (e) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeModal);
    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
      // setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const handleChange = (type) => {
    const htmlEl = document.querySelector("html");
    const computedFontSize = Number(window.getComputedStyle(htmlEl).fontSize.split("px")[0]);
    if (type === "inc" && computedFontSize < 24) {
      htmlEl.style.fontSize = `${computedFontSize + 2}px`;
    } else if (type === "dec" && computedFontSize > 12) {
      htmlEl.style.fontSize = `${computedFontSize - 2}px`;
    } else if (type === "reset") {
      htmlEl.style.fontSize = `16px`;
    }
  };

  return (
    <>
      <div className={styles.top_Default_Bar}>
        <div className={styles.top_navbar_wrapper}>
          <div className={styles.leftSide}>
            <img className={styles.emblemLogoContainer} src={MoELogo} alt="logo" />
            <span className={styles.logo_heading}>
              Ministry of Education <br /> Government of India
            </span>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.font_size_change}>
              <button onClick={() => handleChange("inc")}>A +</button>
              <button onClick={() => handleChange("reset")} className={styles.currentFontSize}>
                A
              </button>
              <button onClick={() => handleChange("dec")}>A -</button>
            </div>

            <div className={styles.language_change}>
              <div id="google_translate_element">
                <div id="google_translate_element"></div>

                <GoogleTranslate />
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.navbar__wrapper}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link to="/" className={styles.logo__center}>
              <img src={LearnUpLogo} alt="NCB Logo" />
            </Link>
          </div>

          <div className={styles.nav_right_col}>
            <ul className={styles.links__banner}>
              <li>
                <Link to="/about">About LearnUp</Link>
              </li>
              <li>
                <HashLink to="/#faq">FAQs</HashLink>
              </li>
              <li>
                <HashLink to="#footer">Contact Us</HashLink>
              </li>
              <li>
                <a href="https://www.education.gov.in/en" target="_blank">
                  MoE Website
                </a>
              </li>
            </ul>

            <ul className={styles.links__auth}>
              <li className={styles.login}>{!user && <Link to="/login">Login</Link>}</li>
              {!user && (
                <li className={styles.login}>
                  <Link to="/signup">Signup</Link>
                </li>
              )}
              {user && (
                <li className={styles.login}>
                  <Link to="/district/overview">Dashboard</Link>
                </li>
              )}
            </ul>
            <div className={styles.phoneMenu} onClick={modalClickHandler}>
              <GiHamburgerMenu size={30} onClick={() => setShowModal((curr) => !curr)} />
              <div className={`${styles.phoneMenuPopup} ${showModal ? styles.activeModal : ""}`}>
                <ul>
                  <li>
                    <Link to="/about">About LearnUp</Link>
                  </li>
                  <li>
                    <HashLink to="/#faq">FAQs</HashLink>
                  </li>
                  <li>
                    <HashLink to="/#footer">Contact Us</HashLink>
                  </li>
                  {/* {!isAuthenticated && ( */}
                  <li>
                    <Link to="/login">{user ? "Dashboard" : "Login"}</Link>
                    <Link to="/school/signup">Students Signup</Link>
                  </li>
                  {/* )} */}
                  <li>
                    {/* <Link to="/login">{isAuthenticated ? "Dashboard" : "Login"} </Link> */}
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
