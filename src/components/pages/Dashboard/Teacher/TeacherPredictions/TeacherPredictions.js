import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
import RiskStudentList from "./RiskStudentList";

const TeacherPredictions = () => {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/prediction" style={{ marginBottom: "10px" }}>
        <Nav.Item>
          <Nav.Link
            href="/prediction"
            onClick={(e) => {
              e.preventDefault();
              setTab(1);
            }}
          >
            Student Prediction Scores v/s Months Distribution
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/list"
            onClick={(e) => {
              e.preventDefault();
              setTab(2);
            }}
          >
            List of Student in risk of Failure
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {tab === 1 && (
        <>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
            width="1050"
            height="580"
            src="https://charts.mongodb.com/charts-project-0-muiir/embed/charts?id=637f4e8d-86af-45fa-8297-c00c49e55762&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </>
      )}
      {tab === 2 && (
        <>
          <RiskStudentList />
        </>
      )}
    </div>
  );
};

export default TeacherPredictions;
