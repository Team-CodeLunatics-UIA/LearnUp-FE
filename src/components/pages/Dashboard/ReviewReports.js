import React from "react";

import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

import styles from "../../../styles/Dashboard/reviewReport.module.css";

const data = [
  {
    subject: "Development",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Linkedin",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Resume",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Skills",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Experience",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Certifications",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const data02 = [
  {
    name: "Java",
    level: 4000,
    amt: 4000,
  },
  {
    name: "Python",
    level: 3000,
    amt: 3000,
  },
  {
    name: "C++",
    level: 2000,
    amt: 2000,
  },
  {
    name: "C",
    level: 2780,
    amt: 2780,
  },
  {
    name: "C#",
    level: 1890,
    amt: 1890,
  },
  {
    name: "JavaScript",
    level: 2390,
    amt: 2390,
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


// const ReviewReports = ({ handleClose, candidate }) => {
const ReviewReports = ({ handleClose }) => {
  return (
    <>
      <Modal size={"lg"} show={true} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Profile Analysis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className={styles.profile_card_container}>
              <Col md={6} className={styles.profile_left}>
                <Modal.Title as="h5">Details</Modal.Title>
                <Modal.Body>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Name: </b>
                      {/* {candidate?.name} */}
                      Lorem Ipsum
                    </span>
                  </Row>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Number: </b> 999
                    </span>
                  </Row>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Email: </b> lorem@ipsum.com
                    </span>
                  </Row>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Preferred Location: </b>
                      {/* {candidate?.location} */}
                    </span>
                  </Row>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Company: </b>
                      {/* {candidate?.company} */}
                    </span>
                  </Row>
                </Modal.Body>
              </Col>
              <Col md={6} className={styles.profile_right}>
                <Row>
                  <Modal.Title as="h5">Report Analysis</Modal.Title>
                  <ResponsiveContainer width="100%" height="100%" aspect={2 / 1}>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis />
                      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                  </ResponsiveContainer>
                </Row>
                <hr />
                <Row>
                  <Modal.Title as="h5">Skills Distribution</Modal.Title>
                  <ResponsiveContainer aspect={2 / 1}>
                    <BarChart
                      data={data02}
                      margin={{
                        top: 30,
                        right: 40,
                        left: -15,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar dataKey="level" fill="#8884d8">
                        {data02.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                      <XAxis dataKey="name" interval={-1} />
                      <YAxis />
                      <Tooltip />
                    </BarChart>
                  </ResponsiveContainer>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewReports;
