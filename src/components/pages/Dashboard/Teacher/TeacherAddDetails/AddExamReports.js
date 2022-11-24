import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "../../../../../styles/Dashboard/Teachers/forms.module.css";

const initialState = {
  name: "",
  class: "",
  rollno: "",
  age: "",
  gender: "",
  maths: [],
  physics: [],
  chemistry: [],
  attendance: [],
};

const AddExamReports = () => {
  const [tab, setTab] = useState(1);
  const [examReports, setExamReports] = useState(initialState);

  const handleOnchange = (id, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, ":", value);
    // const examReports = examReports.map((report) => {
    // if (id === report.id) {
    if (name === "maths" || name === "physics" || name === "chemistry" || name === "attendance") {
      setExamReports({ ...examReports, [name]: [...name, value] });
    } else {
      setExamReports({ ...examReports, [name]: value });
    }
    // }
    // return report;
    // });
  };

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
            <Form.Control placeholder="Name" name="name" onChange={(e) => handleOnchange(e)} />
          </InputGroup>
          <InputGroup className="mb-3" style={{ width: "55%" }}>
            <InputGroup.Text id="basic-addon1">Class</InputGroup.Text>
            <Form.Control placeholder="Class" name="class" onChange={(e) => handleOnchange(e)} />
          </InputGroup>
          <InputGroup className="mb-3" style={{ width: "50%" }}>
            <InputGroup.Text id="basic-addon1">Roll No.</InputGroup.Text>
            <Form.Control
              placeholder="Roll No."
              name="rollno"
              onChange={(e) => handleOnchange(e)}
            />
          </InputGroup>
          <InputGroup className="mb-3" style={{ width: "50%" }}>
            <InputGroup.Text id="basic-addon1">Age</InputGroup.Text>
            <Form.Control placeholder="Age" name="age" onChange={(e) => handleOnchange(e)} />
          </InputGroup>
          <InputGroup className="mb-3" style={{ width: "50%" }}>
            <InputGroup.Text id="basic-addon1">Gender</InputGroup.Text>
            <Form.Control placeholder="Gender" name="gender" onChange={(e) => handleOnchange(e)} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Maths</InputGroup.Text>
            <Row>
              <Col xs="3">
                <Form.Control placeholder="Jan" name="maths" onChange={(e) => handleOnchange(e)} />
              </Col>
              <Col xs="3">
                <Form.Control placeholder="Feb" name="maths" onChange={(e) => handleOnchange(e)} />
              </Col>
              <Col xs="3">
                <Form.Control placeholder="Mar" name="maths" onChange={(e) => handleOnchange(e)} />
              </Col>
            </Row>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Physics</InputGroup.Text>
            <Row>
              <Col xs="3">
                <Form.Control
                  placeholder="Jan"
                  name="physics"
                  onChange={(e) => handleOnchange(e)}
                />
              </Col>
              <Col xs="3">
                <Form.Control
                  placeholder="Feb"
                  name="physics"
                  onChange={(e) => handleOnchange(e)}
                />
              </Col>
              <Col xs="3">
                <Form.Control
                  placeholder="Mar"
                  name="physics"
                  onChange={(e) => handleOnchange(e)}
                />
              </Col>
            </Row>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Chemistry</InputGroup.Text>
            <Row>
              <Col xs="3">
                <Form.Control
                  placeholder="Jan"
                  name="chemistry"
                  onChange={(e) => handleOnchange(e)}
                />
              </Col>
              <Col xs="3">
                <Form.Control
                  placeholder="Feb"
                  name="chemistry"
                  onChange={(e) => handleOnchange(e)}
                />
              </Col>
              <Col xs="3">
                <Form.Control
                  placeholder="Mar"
                  name="chemistry"
                  onChange={(e) => handleOnchange(e)}
                />
              </Col>
            </Row>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Attendance</InputGroup.Text>
            <Row>
              <Col xs="3">
                <Form.Control
                  placeholder="Jan"
                  name="attendance"
                  onChange={(e) => handleOnchange(e)}
                />
              </Col>
              <Col xs="3">
                <Form.Control
                  placeholder="Feb"
                  name="attendance"
                  onChange={(e) => handleOnchange(e)}
                />
              </Col>  
              <Col xs="3">
                <Form.Control
                  placeholder="Mar"
                  name="attendance"
                  onChange={(e) => handleOnchange(e)}
                />
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
