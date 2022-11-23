import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";

const DistrictMapView = () => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/map" style={{ marginBottom: "10px" }}>
        <Nav.Item>
          <Nav.Link
            eventkey="map"
            onClick={(e) => {
              e.preventDefault();
              setTab(1);
            }}
          >
            Enrollment Distribution Map
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventkey="genderclass"
            onClick={(e) => {
              e.preventDefault();
              setTab(2);
            }}
          >
            Gender Classwise Distribution
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventkey="suggestions"
            onClick={(e) => {
              e.preventDefault();
              setTab(3);
            }}
          >
            Suggestions
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {tab === 1 && <>DistrictMapView</>}
      {tab === 2 && <>Gender Distribution and ClassWise Net Enrollment Rate</>}
      {tab === 3 && <>Suggestions</>}
    </>
  );
};

export default DistrictMapView;
