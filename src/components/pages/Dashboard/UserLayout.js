import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";

// LOCAL IMPORTS
import UserNavbar from "../Navbar/UserNavbar";
import Sidebar from "./Sidebar";
import styles from "../../../styles/Dashboard/userLayout.module.css";

const UserLayout = ({ Component }) => {
  //   const dispatch = useDispatch();
  //   const history = useHistory();

  const [showSidebar, setShowSidebar] = useState(true);
  //   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const toggleShowSidebar = () => {
    setShowSidebar((s) => !s);
  };

  const logoutHandler = () => {
    //     dispatch({ type: "LOGOUT" });
    //     history.push("/");
    //     setUser(null);
  };

  //   useEffect(() => {
  //     setUser(JSON.parse(localStorage.getItem("user")) || null);
  //   }, []);

  return (
    <div className={styles.container}>
      {showSidebar && <Sidebar />}
      <div className={styles.mainWrapper} style={{ width: !showSidebar ? "100%" : "80%" }}>
        <UserNavbar toggleShowSidebar={toggleShowSidebar} />
        <div className={styles.component}>
          <Component user={null} />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
