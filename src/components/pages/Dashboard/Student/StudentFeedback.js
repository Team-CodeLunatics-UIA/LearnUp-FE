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
  rating: "",
  requirement: "",
};

const EditFeedback = ({ feedback, handleClose, setFeedback }) => {
  const [tempFeedbacks, setTempFeedbacks] = useState(feedback);

  const handleSubmit = () => {
    tempFeedbacks?.map((feedbk, idx) => {
      if (
        !feedbk.date ||
        !feedbk.category ||
        !feedbk.subcategory ||
        !feedbk.rating ||
        !feedbk.requirement
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
                      <InputGroup.Text>Specific Issue Name</InputGroup.Text>
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
                      <InputGroup.Text>Overall Rating</InputGroup.Text>
                      <Form.Check
                        style={{ marginLeft: "10px", marginTop: "5px" }}
                        inline
                        label="1"
                        value="1"
                        name="rating"
                        type={"radio"}
                        defaultChecked={feedbck?.rating === "1"}
                        onChange={(e) => handleOnchange(feedbck?.id, e)}
                      />
                      <Form.Check
                        inline
                        style={{ marginLeft: "10px", marginTop: "5px" }}
                        label="2"
                        value="2"
                        name="rating"
                        type={"radio"}
                        defaultChecked={feedbck?.rating === "2"}
                        onChange={(e) => handleOnchange(feedbck?.id, e)}
                      />
                      <Form.Check
                        inline
                        style={{ marginLeft: "10px", marginTop: "5px" }}
                        label="3"
                        value="3"
                        name="rating"
                        type={"radio"}
                        defaultChecked={feedbck?.rating === "3"}
                        onChange={(e) => handleOnchange(feedbck?.id, e)}
                      />
                      <Form.Check
                        inline
                        style={{ marginLeft: "10px", marginTop: "5px" }}
                        label="4"
                        value="4"
                        name="rating"
                        type={"radio"}
                        defaultChecked={feedbck?.rating === "4"}
                        onChange={(e) => handleOnchange(feedbck?.id, e)}
                      />
                      <Form.Check
                        inline
                        style={{ marginLeft: "10px", marginTop: "5px" }}
                        label="5"
                        value="5"
                        name="rating"
                        type={"radio"}
                        defaultChecked={feedbck?.rating === "5"}
                        onChange={(e) => handleOnchange(feedbck?.id, e)}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>Any other requirements</InputGroup.Text>
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                        defaultValue={feedbck?.requirement}
                        name={"requirement"}
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

const StudentFeedback = () => {
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
          <Card.Title>Student Feedback Form</Card.Title>
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
                        <b>Issue : </b>
                        {feedbck?.subcategory}
                      </p>
                      {feedbck?.requirements && (
                        <p>
                          <b>Requirements : </b>
                          {"  " + feedbck?.requirement}
                        </p>
                      )}
                    </div>
                    <div className={styles.edu_date_grade}>
                      <p>
                        <b>Date : </b>
                        {"  " + feedbck?.date}
                      </p>
                      <p>
                        <b>Rating : </b>
                        {"  " + feedbck?.rating} stars
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

export default StudentFeedback;
