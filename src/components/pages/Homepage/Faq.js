import React from 'react';
import Accordion from 'react-bootstrap/Accordion';



const Faq = () => {
    return (
        <div className='container' id='faq'>
            <h1>Frequently Asked Questions</h1>
            <Accordion className="col-md-10 mx-auto">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>As a student, how can I submit a feedback?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>As a student, how does my feedback affect the education system?</Accordion.Header>
                    <Accordion.Body>
                        Your feedback will be analysed by our algorism and sent to school and district officials. 
                        The school and district officials will then take your feeback in
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
export default Faq;