import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import styles from "../../../../../styles/Dashboard/Teachers/forms.module.css";

const FillAcademicDetails = () => {
  return (
    <div className={styles.container}>
      <h2 style={{}}>Fill Academic Details</h2>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Elementary Enrollments
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" placeholder="Enter Count" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Secondary Enrollments
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" placeholder="Enter Count" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            High Sec. Enrollments
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" placeholder="Enter Count" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Total Enrollments
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" placeholder="Enter Count" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Education Board
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Eg: CBSE, ICSE etc" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Total Dropouts
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" placeholder="Enter Count" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Total Passouts
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="number" placeholder="Enter Count" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FillAcademicDetails;
