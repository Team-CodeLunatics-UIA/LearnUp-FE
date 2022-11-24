import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "../../../../../styles/Dashboard/Teachers/forms.module.css";

const initialState = {
  id: "",
  fullname: "",
  rollno: "",
  present: "",
};
const AddAttendance = () => {
  const [students, setStudents] = useState([]);

  const handleOnchange = (id, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, ":", value);
    const updatedStudents = students.map((student) => {
      if (id === student.id) {
        student[name] = value;
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const handleAddNewStudent = () => {
    const newStudent = { ...initialState, id: students.length + 1 };
    setStudents([...students, newStudent]);
  };

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
            <Form.Label>Upload the Students Attendance xls or csv file</Form.Label>
            <Form.Control type="file" />
            <Button variant="primary" type="submit" style={{ margin: "15px auto" }}>
              Submit
            </Button>
          </Form.Group>
        </div>
      )}
      {tab === 2 && (
        <div className={styles.formContainer}>
          <Row>
            <Col lg={4}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Class</InputGroup.Text>
                <Form.Control placeholder="Class" />
              </InputGroup>
            </Col>
            <Col lg={4}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Date</InputGroup.Text>
                <Form.Control type="date" />
              </InputGroup>
            </Col>
          </Row>
          <hr />

          {students.map((student, index) => (
            <Row key={index}>
              <Col lg={4}>
                <InputGroup className="mb-3">
                  <InputGroup.Text name="fullname" id="basic-addon1">
                    Name
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Name"
                    onChange={(e) => {
                      handleOnchange(student?.id, e);
                    }}
                  />
                </InputGroup>
              </Col>
              <Col lg={4}>
                <InputGroup className="mb-3">
                  <InputGroup.Text name="rollno" id="basic-addon1">
                    Roll No.
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Roll No."
                    onChange={(e) => {
                      handleOnchange(student?.id, e);
                    }}
                  />
                </InputGroup>
              </Col>
              <Col lg={4}>
                <InputGroup className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Present"
                    name="present"
                    placeholder="Present"
                    onChange={(e) => {
                      handleOnchange(student?.id, e);
                    }}
                  />
                </InputGroup>
              </Col>
            </Row>
          ))}

          <Row>
            <Col></Col>
            <Col lg="4">
              <Button variant="primary" onClick={handleAddNewStudent}>
                Add Student
              </Button>
            </Col>

            <Col></Col>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddAttendance;
