import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import styles from "../../../styles/Home/faq.module.css";

const Faq = () => {
    return (
        <div className={styles.faq} id='faq'>
            <h1>Frequently Asked Questions</h1>
            <Accordion className="col-md-10 mx-auto">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How do I sign up to the system?</Accordion.Header>
                    <Accordion.Body>
                        Click the "Sign Up button" on the top right of the page. You have to provide your government issued ID and your role. The moderation team will review your registration and contact you when your profile has been validated.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Can I sign up if I am not a School Official?</Accordion.Header>
                    <Accordion.Body>
                        No. Only School Officials with a government issued licence can be registered to the system. You can still provide your email and we will contact if your service is needed.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>As a School Official, why should I sign up to your system?</Accordion.Header>
                    <Accordion.Body>
                        The data you will be providing will help the education system all over the world. Your contribution would be much appreciated
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
export default Faq;