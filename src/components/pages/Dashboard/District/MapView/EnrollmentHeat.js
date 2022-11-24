import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "../../../../../styles/Dashboard/Teachers/forms.module.css";

const EnrollmentHeat = () => {
  const [tab, setTab] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.checkboxContainer}>
        <Form.Check
          inline
          label="Enrollment Heat Map"
          name="tab"
          type={"radio"}
          id={`inline-1`}
          defaultChecked="yes"
          onClick={() => setTab(1)}
        />
        <Form.Check
          inline
          label="School Distribution Fees & Dropout-wise"
          name="tab"
          type={"radio"}
          id={`inline-2`}
          onClick={() => setTab(2)}
        />
        <Form.Check
          inline
          label="Infrastructure-wise Schools"
          name="tab"
          type={"radio"}
          id={`inline-2`}
          onClick={() => setTab(4)}
        />
      </div>
      {tab === 1 && (
        <div>
          <tableau-viz
            id="tableauViz"
            src="https://prod-useast-a.online.tableau.com/#/site/learnup/views/StudentEnrollmentMap1/DualAxisMap?:iid=1"
            device="desktop"
            hide-tabs
          ></tableau-viz>
        </div>
      )}
      {tab === 2 && (
        <div>
          <tableau-viz
            id="tableauViz"
            src="https://prod-useast-a.online.tableau.com/#/site/learnup/views/hjf/Sheet1?:iid=1"
            device="desktop"
            hide-tabs
          ></tableau-viz>
        </div>
      )}
    </div>
  );
};

export default EnrollmentHeat;
