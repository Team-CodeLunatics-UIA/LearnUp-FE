import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "../../../../../styles/Dashboard/Teachers/forms.module.css";

const AddExamReports = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className={styles.container}>
      <div className={styles.checkboxContainer}>
        <Form.Check
          inline
          label="Upload Existing Report"
          name="tab"
          type={"radio"}
          id={`inline-1`}
          defaultChecked="yes"
          onClick={() => setTab(1)}
        />
        <Form.Check
          inline
          label="Fill Manually"
          name="tab"
          type={"radio"}
          id={`inline-2`}
          onClick={() => setTab(2)}
        />
      </div>

      {tab === 1 && (
        <div className={styles.formContainer}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload the Students Exam Reports xls or csv file</Form.Label>
            <Form.Control type="file" />
            <Button variant="primary" type="submit" style={{ margin: "15px auto" }}>
              Submit
            </Button>
          </Form.Group>
        </div>
      )}
      {tab === 2 && (
        <div classname={styles.formContainer}>
          <InputGroup className="mb-3" style={{ width: "55%" }}>
            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            <Form.Control placeholder="Name" />
          </InputGroup>
          <InputGroup className="mb-3" style={{ width: "55%" }}>
            <InputGroup.Text id="basic-addon1">Class</InputGroup.Text>
            <Form.Control placeholder="Class" />
          </InputGroup>
          <InputGroup className="mb-3" style={{ width: "50%" }}>
            <InputGroup.Text id="basic-addon1">Roll No.</InputGroup.Text>
            <Form.Control placeholder="Roll No." />
          </InputGroup>
          <InputGroup className="mb-3" style={{ width: "50%" }}>
            <InputGroup.Text id="basic-addon1">Age</InputGroup.Text>
            <Form.Control placeholder="Age" />
          </InputGroup>
          <InputGroup className="mb-3" style={{ width: "50%" }}>
            <InputGroup.Text id="basic-addon1">Gender</InputGroup.Text>
            <Form.Control placeholder="Gender" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Maths</InputGroup.Text>
            <Row>
              <Col xs="3">
                <Form.Control placeholder="Jan" />
              </Col>
              <Col xs="3">
                <Form.Control placeholder="Feb" />
              </Col>
              <Col xs="3">
                <Form.Control placeholder="Mar" />
              </Col>
            </Row>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Physics</InputGroup.Text>
            <Row>
              <Col xs="3">
                <Form.Control placeholder="Jan" />
              </Col>
              <Col xs="3">
                <Form.Control placeholder="Feb" />
              </Col>
              <Col xs="3">
                <Form.Control placeholder="Mar" />
              </Col>
            </Row>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Chemistry</InputGroup.Text>
            <Row>
              <Col xs="3">
                <Form.Control placeholder="Jan" />
              </Col>
              <Col xs="3">
                <Form.Control placeholder="Feb" />
              </Col>
              <Col xs="3">
                <Form.Control placeholder="Mar" />
              </Col>
            </Row>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Attendance</InputGroup.Text>
            <Row>
              <Col xs="3">
                <Form.Control placeholder="Jan" />
              </Col>
              <Col xs="3">
                <Form.Control placeholder="Feb" />
              </Col>
              <Col xs="3">
                <Form.Control placeholder="Mar" />
              </Col>
            </Row>
          </InputGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddExamReports;
