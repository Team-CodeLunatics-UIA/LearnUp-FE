import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AiFillPieChart } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { BsFillMapFill } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

import LearnUpLogo from "../../../assets/icons/learnup2.jpg";
import styles from "../../../styles/Dashboard/sidebar.module.css";

const Sidebar = ({}) => {
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
      {/* {user.role === "candidate" && ( */}
      <div
        className={
          active === 0 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(0)}
      >
        <Link to="/admin/overview">Overview</Link>
        <AiFillPieChart />
      </div>
      {/* )} */}
      <div
        className={
          active === 1 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(1)}
      >
        <Link to="/admin/reports">Staff Reports</Link>
        <TbReportAnalytics />
      </div>
      <div
        className={
          active === 2 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(2)}
      >
        <Link to="/admin/national/view">National/State View</Link>
        <BsFillMapFill />
      </div>
      <div
        className={
          active === 3 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(3)}
      >
        <Link to="/admin/training">Training Status</Link>
        <FaUsersCog />
      </div>
      <div
        className={
          active === 7 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(7)}
      >
        <Link to="/staff/report/create">Send Reports</Link>
        <GoGraph />
      </div>
      <div
        className={
          active === 4 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(4)}
      >
        <Link to="/admin/infographics">Infographics</Link>
        <GoGraph />
      </div>
      <div
        className={
          active === 5 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(5)}
      >
        <Link to="/student/feedback">Feedbacks</Link>
        <VscFeedback />
      </div>
      <div
        className={
          active === 6 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`
        }
        onClick={() => setActive(6)}
      >
        <Link to="/student/improvements">Improvements</Link>
        <GoGraph />
      </div>

      {/* {user.role === "candidate" ? ( */}
      {/* <div className={active === 2 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`} onClick={() => setActive(2)}>
        <Link to="/jobSeeker/jobs">Job Recommendation</Link>
        <RiSuitcaseFill />
      </div>
      {/* ) : ( */}
      {/* <> */}
      {/* <div className={active === 3 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`} onClick={() => setActive(3)}>
        <Link to="/employer/candidate-recommend">Candidate Search</Link>
        <FaUserTie />
      </div>
      <div className={active === 4 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`} onClick={() => setActive(4)}>
        <Link to="/employer/job-posting">Candidate Recommendation</Link>
        <FaUserTie />
      </div>
      <div className={active === 5 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`} onClick={() => setActive(5)}>
        <Link to="/employer/refine-refresh">Refine & Refresh</Link>
        <FaUserTie />
      </div>
      <div className={active === 6 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`} onClick={() => setActive(6)}>
        <Link to="/employer/jd-creation">Job Creation</Link>
        <FaUserTie />
      </div>
      <div className={active === 7 ? `${styles.sidebarItem} ${styles.current}` : `${styles.sidebarItem}`} onClick={() => setActive(7)}>
        <Link to="/employer/job-postings">Job Posting</Link>
        <FaUserTie />
      </div> */}
      {/* </> */}
      {/* )} */}
    </div>
  );
};

export default Sidebar;
