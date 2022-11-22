import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import Icon1 from "../../../assets/home/cards/dashboard.png";
import Icon2 from "../../../assets/home/cards/dataflow.jpg";
import Icon3 from "../../../assets/home/cards/userinterface.jpg";

import styles from "../../../styles/Home/cards.module.css";

const Cards = () => {
  return (
    <>
      <Row className={styles.cardContainer}>
        <Col xs={12} lg={3} className={styles.singleCardContainer}>
          <Card className={styles.card}>
            <Card.Img variant="top" src={Icon1} style={{ width: "150px" }} />
            <Card.Body className={styles.cardBody}>
              <Card.Title style={{ textAlign: "center", marginBottom: "15px" }}>
                Interactive and User-friendly Dashboard
              </Card.Title>
              <Card.Text>
                Easy to view dashboard enabling users to assess the performance of educational
                institutions, as well as for relevant officials to monitor performance and offer
                helpful feedback for improving current policies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={3}>
          <Card className={styles.card}>
            <Card.Img variant="top" src={Icon2} style={{ width: "150px" }} />
            <Card.Body className={styles.cardBody}>
              <Card.Title style={{ textAlign: "center", marginBottom: "15px" }}>
                Easy Data Flow and Work Distribution
              </Card.Title>
              <Card.Text>
                Distributed Roles and their assigned divisions makes sure Easy Data Flow and Work
                Distribution at Various Levels, providing data variables which are needed depending
                on their requirement at each User Roles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={3}>
          <Card className={styles.card}>
            <Card.Img variant="top" src={Icon3} style={{ height: "150px", width: "auto" }} />
            <Card.Body className={styles.cardBody}>
              <Card.Title style={{ textAlign: "center", marginBottom: "15px" }}>
                Minimalist User Interface
              </Card.Title>
              <Card.Text>
                Minimalist User Interface for improved User Experience, along with Accessibility
                features considering people with special needs, real time translation using Google
                Translate API, and responsive design for almost all screen resolutions
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cards;
