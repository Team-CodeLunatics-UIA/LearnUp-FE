import React from "react";
import { Card, CardGroup } from "react-bootstrap";

import Dashboard from "../../../assets/home/info/infodashboard.jpg";


import styles from "../../../styles/Home/cards.module.css";
import styles2 from "../../../styles/Home/info.module.css";

const Info = () => {
    return (
        <>
            <div className={styles2.container}>
                <CardGroup>
                    <Card className={styles.card}>

                        <Card.Body className={styles.cardBody} >
                            <Card.Title>
                                Additional Info
                            </Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Interactive dashboard enabling users to assess the performance of educational institutions and comparing it with other, as well as for relevant officials to monitor performance and offer helpful feedback for improving current  policies.</li>
                                    <li>Early Prediction of Student Failure or Dropout using ML Models.</li>
                                    <li>Easy to view and access analysis of data and its visualizations and take actions for either changes/improvements on past based decisions or creating new policies.</li>
                                    <li>Minimalist User Interface for improved User Experience, Accessibility features considering people with special needs, real time translation using Google Translate API, and responsive design for almost all screen resolutions.</li>
                                    <li>Easy to view and access analysis of data and its visualizations and take actions for either changes/improvements on past based decisions or creating new policies.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className={styles.card}>
                        <Card.Img src={Dashboard} />
                    </Card>
                </CardGroup>
            </div>
        </>
    );
};

export default Info;
