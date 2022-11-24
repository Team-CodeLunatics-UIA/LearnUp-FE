import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AiFillPieChart } from "react-icons/ai";
import { BsFillMapFill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";

import LearnUpLogo from "../../../../assets/icons/learnup2.jpg";
import styles from "../../../../styles/Dashboard//sidebar.module.css";

const TeacherSidebar = ({}) => {
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
        onClick={() => setActive(0)}
      >
        <Link to="/teacher/student-dashboard">Students Progress Dashboard</Link>
        <AiFillPieChart />
      </div>
      <div
        className={
          active === 1 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(1)}
      >
        <Link to="/teacher/fill-details">Add Student Details</Link>
        <TbReportAnalytics />
      </div>
      {/* <div
        className={
          active === 0 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(1)}
      >
        <Link to="/teacher/overview">Overview</Link>
        <TbReportAnalytics />
      </div>
      <div
        className={
          active === 1 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(1)}
      >
        <Link to="/teacher/feedback">Feedback Analyzer</Link>
        <TbReportAnalytics />
      </div>

      <div
        className={
          active === 3 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(3)}
      >
        <Link to="/teacher/student-predictions">Student Scores Prediction</Link>
        <FaUsersCog />
      </div> */}
    </div>
  );
};

export default TeacherSidebar;
