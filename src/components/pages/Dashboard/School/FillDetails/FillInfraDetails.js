import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import styles from "../../../../../styles/Dashboard/Teachers/forms.module.css";
import styles2 from "../../../../../styles/Forms/fillAcademic.module.css";


const initialState = {
  sanitisation: "no",
  water: "no",
  electricity: "no",
  library: "no",
  computer: "no",
  science: "no",
  books: "no",
  equipments: "no",
  furniture: "no",
  playground: "no",
  sport: "no",
  sanitisationC: "satisfactory",
  waterC: "1",
  electricityC: "satisfactory",
  libraryC: "satisfactory",
  computerC: "satisfactory",
  scienceC: "satisfactory",
  booksC: "satisfactory",
  equipmentsC: "satisfactory",
  furnitureC: "satisfactory",
  playgroundC: "satisfactory",
  sportC: "satisfactory"
};


const FillInfraDetails = () => {
  const [infra, setInfra] = useState([]);


  const handleOnchange = (id, e) => {


    const { name, value } = e.target;
    console.log(name, ":", value, "",);
    if (value === "yes"){
      switch(name){
        case "sanitation": document.getElementById('sanitationC').disabled=false;
        break;
        case "water": document.getElementById('waterC').disabled=false;;
        break;
        case "electricity":document.getElementById('electricityC').disabled=false; ;
        break;
        case "library": document.getElementById('libraryC').disabled=false;;
        break;
        case "computer":document.getElementById('computerC').disabled=false; ;
        break;
        case "science": document.getElementById('scienceC').disabled=false;;
        break;
        case "books": document.getElementById('booksC').disabled=false;;
        break;
        case "equipments": document.getElementById('equipmentsC').disabled=false;;
        break;
        case "furniture": document.getElementById('furnitureC').disabled=false;;
        break;
        case "playground": document.getElementById('playgroundC').disabled=false;;
        break;
        case "sport": document.getElementById('sportC').disabled=false;;
        break;
      }
    }
    const updatedInfra = infra.map((infra) => {
      if (id === infra.id) {
        infra[value] = value;
      }
      return infra;
    });
    setInfra(updatedInfra);
  };


  return (
    <div className={styles.container}>
      
      <h2 style={{}}>Fill Academic Details</h2>

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Proper Sanitation facilities
          </Form.Label>
          <Col sm={4} className={styles2.infra}>

            {['radio'].map((type) => (
              <div key={`inline`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="sanitation"
                  type={type}
                  value="yes"
                  id={`inline-1`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}></Form.Check>

                <Form.Check
                  inline
                  label="No"
                  name="sanitation"
                  value="no"
                  type={type}
                  defaultChecked
                  id={`inline-2`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                ></Form.Check>

              </div>
            ))}
            <div>
              <Form.Label inline column>
                Condition
              </Form.Label>
              <Form.Select inline id="sanitationC" aria-label="Default select example" name="sanitationC"  disabled>

                <option value="good">good</option>
                <option value="satisfactory">satisfactory</option>
                <option value="bad">bad</option>
              </Form.Select>
            </div>

          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Drinking Water
          </Form.Label>
          <Col sm={4} className={styles2.infra}>

            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="water"
                  value="yes"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  name="water"
                  value="no"
                  defaultChecked
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
              </div>
            ))}

            <div>
            <Col sm={4}>
              <Form.Label column>
                PH level of water
              </Form.Label>
              <Form.Select id="waterC" aria-label="Default select example" name="waterC"  disabled>

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
              </Form.Select>
              </Col>
            </div>

          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Electricity
          </Form.Label>
          <Col sm={4} className={styles2.infra}>

            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="electricity"
                  type={type}
                  value="yes"
                  id={`inline-${type}-1`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  name="electricity"
                  defaultChecked
                  type={type}
                  value="no"
                  id={`inline-${type}-2`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
              </div>
            ))}


            <div>
              <Form.Label column sm={3}>
                Condition
              </Form.Label>

              <Form.Select id="electricityC" aria-label="Default select example" name="electricityC"  disabled>

                <option value="good">good</option>
                <option value="satisfactory">satisfactory</option>
                <option value="bad">bad</option>
              </Form.Select>


            </div>

          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Library
          </Form.Label>
          <Col sm={4} className={styles2.infra}>

            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="library"
                  value="yes"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  name="library"
                  defaultChecked
                  value="no"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
              </div>
            ))}

            <div>
              <Form.Label column sm={3}>
                Condition
              </Form.Label>

              <Form.Select id="libraryC" aria-label="Default select example" name="libraryC"  disabled>

                <option value="good">good</option>
                <option value="satisfactory">satisfactory</option>
                <option value="bad">bad</option>
              </Form.Select>
            </div>

          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Computer Lab
          </Form.Label>
          <Col sm={4} className={styles2.infra}>

            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="computer"
                  value="yes"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  name="computer"
                  value="no"
                  defaultChecked
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
              </div>
            ))}

            <div>
              <Form.Label column sm={3}>
                Condition
              </Form.Label>

              <Form.Select id="computerC" aria-label="Default select example" name="computerC"  disabled>

                <option value="good">good</option>
                <option value="satisfactory">satisfactory</option>
                <option value="bad">bad</option>
              </Form.Select>
            </div>

          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Science Lab
          </Form.Label>
          <Col sm={4} className={styles2.infra}>

            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="science"
                  value="yes"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  name="science"
                  defaultChecked
                  value="no"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
              </div>
            ))}

            <div>
              <Form.Label column sm={3}>
                Condition
              </Form.Label>

              <Form.Select id="scienceC" aria-label="Default select example" name="scienceC"  disabled>

                <option value="good">good</option>
                <option value="satisfactory">satisfactory</option>
                <option value="bad">bad</option>
              </Form.Select>
            </div>

          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Books
          </Form.Label>
          <Col sm={4} className={styles2.infra}>

            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="books"
                  value="yes"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  name="books"
                  defaultChecked
                  value="no"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
              </div>
            ))}

            <div>
              <Form.Label column sm={3}>
                Condition
              </Form.Label>

              <Form.Select id="booksC" aria-label="Default select example" name="bookC"  disabled>

                <option value="good">good</option>
                <option value="satisfactory">satisfactory</option>
                <option value="bad">bad</option>
              </Form.Select>
            </div>

          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Equipments
          </Form.Label>
          <Col sm={4} className={styles2.infra}>

            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="equipments"
                  value="yes"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  name="equipments"
                  value="no"
                  defaultChecked
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
              </div>
            ))}

            <div>
              <Form.Label column sm={3}>
                Condition
              </Form.Label>

              <Form.Select id="equipmentsC" aria-label="Default select example" name="equipmentsC"  disabled>

                <option value="good">good</option>
                <option value="satisfactory">satisfactory</option>
                <option value="bad">bad</option>
              </Form.Select>

            </div>


          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Furniture
          </Form.Label>
          <Col sm={4} className={styles2.infra}>

            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="furniture"
                  value="yes"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  name="furniture"
                  defaultChecked
                  value="no"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
              </div>
            ))}

            <div>
              <Form.Label column sm={3}>
                Condition
              </Form.Label>

              <Form.Select id="furnitureC" aria-label="Default select example" name="furnitureC"  disabled>

                <option value="good">good</option>
                <option value="satisfactory">satisfactory</option>
                <option value="bad">bad</option>
              </Form.Select>
            </div>

          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Playground
          </Form.Label>
          <Col sm={4} className={styles2.infra}>

            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="playground"
                  value="yes"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  name="playground"
                  defaultChecked
                  type={type}
                  value="no"
                  id={`inline-${type}-2`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
              </div>
            ))}

            <div>
              <Form.Label column sm={3}>
                Condition
              </Form.Label>

              <Form.Select id="playgroundC" aria-label="Default select example" name="playgroudC"  disabled>

                <option value="good">good</option>
                <option value="satisfactory">satisfactory</option>
                <option value="bad">bad</option>
              </Form.Select>
            </div>

          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Sport
          </Form.Label>
          <Col sm={4} className={styles2.infra}>

            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="sport"
                  type={type}
                  value="yes"
                  id={`inline-${type}-1`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  name="sport"
                  value="no"
                  defaultChecked
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={(e) => {
                    handleOnchange(infra?.id, e);
                  }}
                />
              </div>
            ))}

            <div>
              <Form.Label column sm={3}>
                Condition
              </Form.Label>
              <Form.Select id="sportsC" aria-label="Default select example" name="sportC"  disabled>

                <option value="good">good</option>
                <option value="satisfactory">satisfactory</option>
                <option value="bad">bad</option>
              </Form.Select>
            </div>

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

export default FillInfraDetails;
