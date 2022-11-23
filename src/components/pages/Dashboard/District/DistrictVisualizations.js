import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
// import styles from "../../../../styles/Dashboard/District/visualizations.module.css";

const DistrictVisualizations = () => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/dropout" style={{ marginBottom: "10px" }}>
        <Nav.Item>
          <Nav.Link
            eventkey="dropout"
            onClick={(e) => {
              e.preventDefault();
              setTab(1);
            }}
          >
            Dropouts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventkey="graduation"
            onClick={(e) => {
              e.preventDefault();
              setTab(2);
            }}
          >
            Graduation Rate
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {tab === 1 && (
        <tableau-viz
          id="tableauViz"
          src="https://public.tableau.com/shared/WF9P3ZZWT?:display_count=n&:origin=viz_share_link"
          device="desktop"
          hide-tabs
        ></tableau-viz>
      )}
      {tab === 2 && (
        <tableau-viz
          id="tableauViz"
          src="https://public.tableau.com/shared/XYGPDW8GW?:display_count=n&:origin=viz_share_link"
          device="desktop"
          hide-tabs
        ></tableau-viz>
      )}
    </>
  );
};

export default DistrictVisualizations;
