import { useState, useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "react-select";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../../../assets/icons/learnup.png";
import HomeNavbar from "../Navbar/HomeNavbar";
import Footer from "../Footer";

import styles from "../../../styles/Forms/Signup.module.css";
import authContext from "../../../context/auth/authContext";

const roleOptions = [
  {
    value: "student",
    label: "Enrolled Student",
  },
  {
    value: "alumni",
    label: "Alumni",
  },
];

const StudentSignup = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [registering, setRegistering] = useState(false);

  const [user, setUser] = useState({
    studentID: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [role, setRole] = useState(null);
  const { studentID, name, email, password, confirmPassword } = user;
  const { signup, registered, error, clearError } = useContext(authContext);

  useEffect(() => {
    if (registered) {
      toast.info(
        "A Verification Link has been sent to your email address. Please verify to continue"
      );
      props.history.push("/login");
    }
  }, [registered]);

  useEffect(() => {
    if (error) {
      setRegistering(false);
      toast.error(error);
      clearError();
    }
  }, [error]);

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPassword = (e) => {
    e.preventDefault();
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!role) {
      toast.error("Please select a role");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Both Passwords don't match!");
      return;
    }
    setRegistering(true);
    await signup({ ...user, role: role.value });
    setRegistering(false);
  };

  return (
    <Fragment>
      <HomeNavbar />
      <div className={styles.container}>
        <div className={styles.loginPageContainer}>
          <div className={styles.logoIcon}>
            <img src={Logo} alt="" />
          </div>

          <p className={styles.loginTitle}>Sign Up</p>

          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <label htmlFor="id">
                STUDENT ID <span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                id="studentID"
                name="studentID"
                value={studentID}
                onChange={onChange}
                placeholder="Student ID"
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="id">
                NAME <span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="Name"
                required
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="email">
                EMAIL <span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Email Address"
                required
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="password">
                PASSWORD <span style={{ color: "red" }}> *</span>
              </label>
              <div className={styles.inputPassword}>
                <input
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Password"
                  required={true}
                  autoComplete="off"
                />
                <div className={styles.showPassword} onClick={togglePassword}>
                  {passwordShown ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                      alt="show-password"
                    />
                  ) : (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/565/565655.png"
                      alt="hide-password"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="confirm-password">
                VERIFY PASSWORD <span style={{ color: "red" }}> *</span>
              </label>
              <div className={styles.inputPassword}>
                <input
                  type={confirmPasswordShown ? "text" : "password"}
                  id="confirm-password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChange}
                  placeholder="Verify Password"
                  required={true}
                  autoComplete="off"
                />
                <div className={styles.showPassword} onClick={toggleConfirmPassword}>
                  {confirmPasswordShown ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                      alt="show-confirm-password"
                    />
                  ) : (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/565/565655.png"
                      alt="hide-confirm-password"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="role">
                STATUS <span style={{ color: "red" }}> *</span>
              </label>
              <Select
                className={styles.select}
                options={roleOptions}
                value={role}
                onChange={(value) => {
                  setRole(value);
                }}
                name="role"
                id="role"
                placeholder="Select Status"
                required
              />
            </div>
            <button
              type="submit"
              className={styles.submit}
              // disabled={registering}
            >
              {registering ? "Registering.." : "Sign Up"}
            </button>
          </form>

          <div className={styles.footer}>
            <p>
              Already have an Account? <Link to="/login">Log In</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default StudentSignup;
