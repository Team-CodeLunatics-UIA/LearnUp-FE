import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";

import FillAcademicDetails from "./FillAcademicDetails";
import FillInfraDetails from "./FillInfraDetails";

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
          <FillAcademicDetails />
        </>
      )}
      {tab === 2 && (
        <>
          Proper Sanitation Facilities, Drinking Water, Electricity, Library, Computer Lab, Science,
          Books, Equipments, Fsurniture, Playground, Sports, etc.
          <FillInfraDetails />
        </>
      )}
    </>
  );
};

export default SendReports;
