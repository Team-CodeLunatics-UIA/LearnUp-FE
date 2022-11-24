import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";

import AddExamReports from "./AddExamReports";

const TeacherAddDetails = () => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/exam" style={{ marginBottom: "10px" }}>
        <Nav.Item>
          <Nav.Link
            href="/exam"
            onClick={(e) => {
              e.preventDefault();
              setTab(1);
            }}
          >
            Add Student Exam Reports
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/attendance"
            onClick={(e) => {
              e.preventDefault();
              setTab(2);
            }}
          >
            Add Students Attendance
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {tab === 1 && (
        <>
          <AddExamReports />
        </>
      )}
      {tab === 2 && <>Student Attendance : Upload xls, csv or Fill Manually</>}
      {tab === 3 && <>Suggestions</>}
      {tab === 4 && <>Alerts</>}
    </>
  );
};

export default TeacherAddDetails;
