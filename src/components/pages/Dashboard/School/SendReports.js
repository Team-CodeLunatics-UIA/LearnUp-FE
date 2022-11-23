import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";

const SendReports = () => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/academic" style={{ marginBottom: "10px" }}>
        <Nav.Item>
          <Nav.Link
            href="/academic"
            onClick={(e) => {
              e.preventDefault();
              setTab(1);
            }}
          >
            Academic
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/infrastructure"
            onClick={(e) => {
              e.preventDefault();
              setTab(2);
            }}
          >
            Infrastructure
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {tab === 1 && (
        <>
          Total Enrollments, Total Dropouts, Total Passouts, Education Board, Elementary
          Enrollments, Secondary Enrollments, High Sec. Enrollments.
        </>
      )}
      {tab === 2 && (
        <>
          Proper Sanitation Facilities, Drinking Water, Electricity, Library, Computer Lab, Science,
          Books, Equipments, Furniture, Playground, Sports, etc.
        </>
      )}
    </>
  );
};

export default SendReports;
