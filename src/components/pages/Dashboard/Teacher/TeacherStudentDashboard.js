import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";

const TeacherStudentDashboard = () => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/dropout" style={{ marginBottom: "10px" }}>
        <Nav.Item>
          <Nav.Link
            eventkey="dashboard"
            onClick={(e) => {
              e.preventDefault();
              setTab(1);
            }}
          >
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventkey="profile"
            onClick={(e) => {
              e.preventDefault();
              setTab(2);
            }}
          >
            Student Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventkey="time"
            onClick={(e) => {
              e.preventDefault();
              setTab(3);
            }}
          >
            Time Distribution
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {tab === 1 && (
        <tableau-viz
          id="tableauViz"
          src="https://prod-useast-a.online.tableau.com/#/site/learnup/views/Coursenew1/CourseDashboard?:iid=12"
          device="desktop"
          hide-tabs
        ></tableau-viz>
      )}
      {tab === 2 && (
        <tableau-viz
          id="tableauViz"
          src="https://prod-useast-a.online.tableau.com/t/learnup/views/Course/StudentDashboard"
          device="desktop"
          hide-tabs
        ></tableau-viz>
      )}
      {tab === 3 && (
        <tableau-viz
          id="tableauViz"
          src="https://prod-useast-a.online.tableau.com/#/site/learnup/views/freetime/Sheet1?:iid=1"
          device="desktop"
          hide-tabs
        ></tableau-viz>
      )}
    </>
  );
};

export default TeacherStudentDashboard;
