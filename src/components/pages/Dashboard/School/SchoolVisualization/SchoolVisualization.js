import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";

const SchoolVisualization = () => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/score" style={{ marginBottom: "10px" }}>
        <Nav.Item>
          <Nav.Link
            href="/score"
            onClick={(e) => {
              e.preventDefault();
              setTab(1);
            }}
          >
            Students Subject-wise Score
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/passing"
            eventkey="passing"
            onClick={(e) => {
              e.preventDefault();
              setTab(2);
            }}
          >
            Passing Students Scores Ratio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/suggestions"
            onClick={(e) => {
              e.preventDefault();
              setTab(3);
            }}
          >
            Suggestions
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/alerts"
            onClick={(e) => {
              e.preventDefault();
              setTab(4);
            }}
          >
            Alerts
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {tab === 1 && (
        <>
          Student Subject-wise Score Distribution: LineChart, LevelBar Graph (1 subject [count vs
          Months [Bars - Pass, Fail (Threshold indicator - Gap)]]), LevelBar Graph (1 month [count
          vs subjects [Bars - Pass, Fail]] )
          <tableau-viz
            id="tableauViz"
            src="https://prod-useast-a.online.tableau.com/#/site/learnup/views/monthlyperformance/Sheet1?:iid=1"
            device="desktop"
            hide-tabs
          ></tableau-viz>
        </>
      )}
      {tab === 2 && <>Graph with levels (score %) with count of students passing in each subject</>}
      {tab === 3 && <>Suggestions</>}
      {tab === 4 && <>Alerts</>}
    </>
  );
};

export default SchoolVisualization;
