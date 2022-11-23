import React, { useEffect, useState, useContext } from "react";
import Select from "react-select";

import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FiEdit } from "react-icons/fi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "../../../../styles/Dashboard/feedback.module.css";
import { feedbackCategories } from "../../../../Utils/constants";
// import eventContext from "context/event/eventContext";

const initialState = {
  id: "",
  date: "",
  category: "",
  subcategory: "",
  alter: "",
  previousResults: "",
  details: "",
};

const EditFeedback = ({ feedback, handleClose, setFeedback }) => {
  const [tempFeedbacks, setTempFeedbacks] = useState(feedback);

  const handleSubmit = () => {
    tempFeedbacks?.map((feedbk, idx) => {
      if (
        !feedbk.date ||
        !feedbk.category ||
        !feedbk.subcategory ||
        !feedbk.alter ||
        !feedbk.previousResults ||
        !feedbk.details
      ) {
        toast.error("Please fill all the fields");
        return;
      }
    });
    setFeedback(tempFeedbacks);
    handleClose();
  };

  const handleOnchange = (id, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, ":", value);
    const updatedFeedbacks = tempFeedbacks.map((feedbk) => {
      if (id === feedbk.id) {
        feedbk[name] = value;
      }
      return feedbk;
    });
    setTempFeedbacks(updatedFeedbacks);
  };

  const handleAddNewFeedback = () => {
    const newFeedback = { ...initialState, id: tempFeedbacks.length + 1 };
    setTempFeedbacks([...tempFeedbacks, newFeedback]);
  };

  return (
    <>
      <Modal
        size={"lg"}
        show={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {tempFeedbacks.map((feedbck, index) => {
            return (
              <Container
                style={{ borderBottom: "1px dashed light gray", margin: "20px 0" }}
                key={`fb-${feedbck?.id}`}
              >
                <Row>
                  <Col xs={12}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>Today's Date</InputGroup.Text>
                      <Form.Control
                        type="date"
                        defaultValue={feedbck?.date}
                        name={"date"}
                        onChange={(e) => handleOnchange(feedbck?.id, e)}
                        placeholder={"Enter Company Name"}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>Category</InputGroup.Text>
                      <Form.Select
                        defaultValue={feedbck?.category}
                        name={"category"}
                        onChange={(e) => handleOnchange(feedbck?.id, e)}
                      >
                        <option>Select Category Type</option>
                        <option value="scholarship">Scholarship</option>
                        <option value="curriculum">Curriculum</option>
                        <option value="exam">Exams</option>
                        <option value="faculty">Faculty</option>
                        <option value="books">Study Material</option>
                        <option value="other">other</option>
                      </Form.Select>
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>Specific </InputGroup.Text>
                      <Form.Control
                        type="text"
                        defaultValue={feedbck?.subcategory}
                        name={"subcategory"}
                        onChange={(e) => handleOnchange(feedbck?.id, e)}
                        placeholder={"Enter the issue specifically"}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>Improvements on Existing Schemes/Policies?</InputGroup.Text>
                      <Form.Check
                        style={{ marginLeft: "10px", marginTop: "5px" }}
                        inline
                        label="Yes"
                        value="yes"
                        name="alter"
                        type={"radio"}
                        defaultChecked={feedbck?.alter === "yes"}
                        onChange={(e) => handleOnchange(feedbck?.id, e)}
                      />
                      <Form.Check
                        inline
                        style={{ marginLeft: "10px", marginTop: "5px" }}
                        label="No"
                        value="no"
                        name="rating"
                        type={"radio"}
                        defaultChecked={feedbck?.alter === "no"}
                        onChange={(e) => handleOnchange(feedbck?.id, e)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>Detailed Plan</InputGroup.Text>
                      <Form.Control
                        as="textarea"
                        placeholder="Suggest detailed plan (min 200 words)"
                        style={{ height: "100px" }}
                        defaultValue={feedbck?.details}
                        name={"details"}
                        onChange={(e) => handleOnchange(feedbck?.id, e)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>Proof of Success</InputGroup.Text>
                      <Form.Control
                        as="textarea"
                        placeholder="Explain evidence of past outcomes in a region"
                        style={{ height: "100px" }}
                        defaultValue={feedbck?.previousResults}
                        name={"previousResults"}
                        onChange={(e) => handleOnchange(feedbck?.id, e)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Container>
            );
          })}
        </Modal.Body>
        <Modal.Body style={{ width: "max-content", margin: "-15px auto 10px auto", padding: "0" }}>
          <Button variant="primary" onClick={handleAddNewFeedback}>
            Add Feedback
          </Button>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const StudentSuggestions = () => {
  //   const [country, setCountry] = useState(null);
  //   const [type, setType] = useState(null);
  const [editFeedback, setEditFeedback] = useState(false);
  const [feedback, setFeedback] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //   const newObj = { ...feedback, type: type.value };
    //   createEvent(newObj);
    toast.success("Feedback Added Successfully!");
    //   setFeedback(initialState);
    //   setType(null);
    //   setCountry(null);
  };
  return (
    <Card className={styles.card}>
      <Card.Body>
        <div className={styles.sectionHeader}>
          <Card.Title>Student Suggestions</Card.Title>
          <FiEdit
            size={20}
            className={styles.editSection}
            onClick={() => {
              setEditFeedback(!editFeedback);
            }}
          />
        </div>
        <div className={styles.eduContainer}>
          {feedback?.length > 0 ? (
            <>
              {feedback.map((feedbck, index) => {
                return (
                  <div className={styles.singleEduContainer} key={`${feedbck}-${index}`}>
                    <div className={styles.eduDetails}>
                      <p>
                        <b>Category : </b> {" " + feedbck?.category}
                      </p>
                      <p>
                        <b>Suggestion Title : </b>
                        {feedbck?.subcategory}
                      </p>
                      {feedbck?.detailss && (
                        <>
                          <p>
                            <b>Improvements : </b>
                            {"  " + feedbck?.details}
                          </p>
                          <p>
                            <b>Improvements : </b>
                            {"  " + feedbck?.details}
                          </p>
                        </>
                      )}
                    </div>
                    <div className={styles.edu_date_grade}>
                      <p>
                        <b>Date : </b>
                        {"  " + feedbck?.date}
                      </p>
                    </div>
                  </div>
                );
              })}
              <Button variant="secondary" onClick={handleSubmit} style={{}}>
                Submit
              </Button>
            </>
          ) : (
            <p className={styles.noParsedData}>No Feedback added yet</p>
          )}
        </div>
      </Card.Body>
      {editFeedback && (
        <EditFeedback
          feedback={feedback}
          handleClose={() => {
            setEditFeedback(!editFeedback);
          }}
          setFeedback={setFeedback}
        />
      )}
    </Card>
  );
};

export default StudentSuggestions;
