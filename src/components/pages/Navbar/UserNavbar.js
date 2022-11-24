import React from "react";

// Bootstrap Imports
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

// React Icons Import
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";

import styles from "../../../styles/Dashboard/userNavbar.module.css";
import { useHistory } from "react-router-dom";

const UserNavbar = ({ toggleShowSidebar }) => {
  // console.log(props);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
    <Navbar className={styles.container}>
      <Container className={styles.navbarContainer}>
        <Nav className={"me-auto " + styles.navItems1}>
          <Nav.Item className={styles.menuIcon} onClick={toggleShowSidebar}>
            <GiHamburgerMenu size="1.4rem" />
          </Nav.Item>
          <InputGroup className={styles.searchBar}>
            <Form.Control className={styles.searchInput} placeholder="Search anything" />
            <Button variant="outline-secondary" className="d-flex align-items-center">
              <AiOutlineSearch />
            </Button>
          </InputGroup>
        </Nav>
        <Nav className={styles.navItems2}>
          <Nav.Link to="/" className={styles.notification}>
            <AiFillBell size="1.4rem" style={{ color: "#fff" }} />
          </Nav.Link>
          <Nav.Item className={styles.userDropdown}>
            {
              <NavDropdown
                align="end"
                title={<FaUserCircle size="1.4rem" style={{ color: "#fff" }} />}
                id="nav-dropdown-light-example"
                menuVariant="light"
              >
                {/* <NavDropdown.Item>Welcome! {user && user?.name} </NavDropdown.Item> */}
                <NavDropdown.Item>Welcome! User </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Edit Profile</NavDropdown.Item>
                <NavDropdown.Item href="#">Help</NavDropdown.Item>
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            }
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
