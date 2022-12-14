import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AiFillPieChart } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { BsFillMapFill } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

import LearnUpLogo from "../../../../assets/icons/learnup2.jpg";
import styles from "../../../../styles/Dashboard//sidebar.module.css";

const StudentSidebar = () => {
  //   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [active, setActive] = useState(0);

  useEffect(() => {
    // setUser(JSON.parse(localStorage.getItem("user")) || null);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src={LearnUpLogo}
          height="50"
          className="d-inline-block align-top"
          alt="LearnUp Logo"
        />
      </div>
      <div
        className={
          active === 0 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(1)}
      >
        <Link to="/student/news">What's new</Link>
        <TbReportAnalytics />
      </div>
      <div
        className={
          active === 1 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(1)}
      >
        <Link to="/student/feedback">Feedback</Link>
        <TbReportAnalytics />
      </div>
      <div
        className={
          active === 2 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(2)}
      >
        <Link to="/student/suggestions">Suggestions</Link>
        <BsFillMapFill />
      </div>
      <div
        className={
          active === 3 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(3)}
      >
        <Link to="/student/policy">Policy Review</Link>
        <FaUsersCog />
      </div>
    </div>
  );
};

export default StudentSidebar;
