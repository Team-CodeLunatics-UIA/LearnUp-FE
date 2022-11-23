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

import styles from "../../../../../styles/Dashboard/reviewReport.module.css";

const data = [
  {
    subject: "Coursework",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Projects",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Management",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Events",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Fitness",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Other",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const data02 = [
  {
    name: "Assignments",
    level: 4000,
    amt: 4000,
  },
  {
    name: "Exams",
    level: 3000,
    amt: 3000,
  },
  {
    name: "Sports",
    level: 2000,
    amt: 2000,
  },
  {
    name: "Projects",
    level: 2780,
    amt: 2780,
  },
  {
    name: "Extra-Curricular",
    level: 1890,
    amt: 1890,
  },
  {
    name: "Homework",
    level: 2390,
    amt: 2390,
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const ReviewReports = ({ handleClose, candidate }) => {
const ReviewReport = ({ handleClose }) => {
  return (
    <>
      <Modal
        size={"xl"}
        show={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Staff Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className={styles.profile_card_container}>
              <Col md={6} className={styles.profile_left}>
                <Modal.Title as="h5">Report Summary</Modal.Title>
                <Modal.Body>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Name of Program : </b>
                      {/* {candidate?.name} */}
                      Individualized Education Program
                    </span>
                  </Row>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Stakeholders Count : </b> 20
                    </span>
                  </Row>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Student Footfall : </b> 250
                    </span>
                  </Row>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Preparation Period : </b> 3 weeks
                    </span>
                  </Row>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Project Manager : </b>
                      Dr. Radhakrishnan
                    </span>
                  </Row>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Languages Learned : </b>
                      English, French, Arabic
                    </span>
                  </Row>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Total Cost : </b> Rs 15,000
                    </span>
                  </Row>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Targetted Classes : </b>I to III
                    </span>
                  </Row>
                  <Row className={styles.profile_single_detail}>
                    <span>
                      <b>Detailed Statistics and Report : </b>
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1jVgrCLSlOnn-DKFobm8rQmuM-assVctG/view?usp=share_link"
                      >
                        Click Here
                      </a>
                    </span>
                  </Row>
                </Modal.Body>
              </Col>
              <Col md={6} className={styles.profile_right}>
                <Row>
                  <Modal.Title as="h5">Sector-wise Engagement</Modal.Title>
                  <ResponsiveContainer width="100%" height="100%" aspect={2 / 1}>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis />
                      <Radar
                        name="Mike"
                        dataKey="A"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </Row>
                <hr />
                <Row>
                  <Modal.Title as="h5">Progress Distribution</Modal.Title>
                  <ResponsiveContainer aspect={2 / 1}>
                    <BarChart
                      data={data02}
                      margin={{
                        top: 30,
                        right: 40,
                        left: 0,
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

export default ReviewReport;
