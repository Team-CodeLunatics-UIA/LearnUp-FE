import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/footer.module.css";
import MoELogo from "../../assets/icons/MoE.jpg";

const Footer = () => {
  return (
    <>
      <footer className={styles.upper_footer} id="footer">
        <div className={styles.footer_infos_container}>
          <div className={styles.footer_multiple_cols_containter}>
            <div className={styles.footer_info_col}>
              <p className={styles.footer_info_rowHeader}>Education Ministry</p>

              {/* <div className={styles.heading_underline}></div> */}

              <Link to="/">
                <span>National/State View</span>
              </Link>
              <Link to="/">
                <span>Staff Reports</span>
              </Link>
              <Link to="/">
                <span>Infographics</span>
              </Link>
              <Link to="/">
                <span>Training Status</span>
              </Link>
            </div>

            <div className={styles.footer_info_col}>
              <p className={styles.footer_info_rowHeader}>State Official</p>

              {/* <div className={styles.heading_underline}></div> */}

              <Link to="/">
                <span>Review Reports</span>
              </Link>
              <Link to="/">
                <span>Submit District Reports</span>
              </Link>
            </div>
          </div>

          <div className={styles.footer_multiple_cols_containter}>
            <div className={styles.footer_info_col}>
              <p className={styles.footer_info_rowHeader}>District Official</p>

              {/* <div className={styles.heading_underline}></div> */}

              <Link to="/">
                <span>Review Reports</span>
              </Link>
              <Link to="/">
                <span>Submit School Reports</span>
              </Link>
            </div>

            <div className={styles.footer_info_col}>
              <p className={styles.footer_info_rowHeader}>School Officials</p>

              {/* <div className={styles.heading_underline}></div> */}

              <Link to="/">
                <span>Register New User</span>
              </Link>
              <Link to="/">
                <span>Student Feedbacks</span>
              </Link>
              <Link to="/">
                <span>Submit Weekly Reports</span>
              </Link>
            </div>
          </div>

          <div className={styles.pageDivider}></div>

          <div className={styles.footer_info_col + " " + styles.footer_address_info}>
            {/* <p className={styles.footer_info_rowHeader}>Contact us</p>

            <div className={styles.heading_underline}></div> */}

            <span>
              Ministry of Education <br />
              Shastri Bhawan, Dr Rajendra Prasad Rd, Rajpath Area, Central Secretariat, New Delhi, Delhi 110001
            </span>
            <span>
              <b>Telephone Number</b>: +91-11-23385055
            </span>
            <span>
              <b>Email Id</b>: <a href="mailto:ccd2.iccr@gov.in">minister[dot]sm[at]gov[dot]in</a>
            </span>
          </div>
        </div>
      </footer>

      <footer className={styles.down_footer}>
        <div className={styles.footer__content}>
          <p className={styles.footer__text}>© MoE | Team CodeLunatics </p>
          <div className={styles.logo}>
            <img src={MoELogo} alt="Ministry of Edu Logo" />
            <div className={styles.ministry_name}>
              <span>Ministry of Education</span>
              <span style={{ fontSize: "0.8rem" }}>Government of India</span>
            </div>
          </div>
          <div className={styles.footer__links}>
            <span className={styles.footer__link}>Privacy Policy</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
