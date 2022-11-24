import { useState, useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "react-select";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import Logo from "../../../assets/icons/learnup.png";
import HomeNavbar from "../Navbar/HomeNavbar";
import Footer from "../Footer";

import styles from "../../../styles/Forms/Signup.module.css";
// import authContext from "../../../context/auth/authContext";
import { roleOptions } from "../../../Utils/constants";

const Signup = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [registering, setRegistering] = useState(false);

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [selectedOption, setSelectedOption] = useState(null);

  const { name, email, password, confirmPassword, id } = user;
  // const { signup, registered, error, clearError } = useContext(authContext);

  useEffect(() => {
    // if (isAuthenticated === true) {
    //   if (user.role === "ICCRUser") props.history?.push("user/events");
    //   else props.history?.push("user/dashboard");
    // }
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      props.history.push("/");
    }
  }, []);

  // useEffect(() => {
  //   if (error) {
  //     setRegistering(false);
  //     toast.error(error);
  //     clearError();
  //   }
  // }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegistering(true);
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setRegistering(false);
      return;
    }
    if (selectedOption === null) {
      toast.error("Please select a role");
      setRegistering(false);
      return;
    }
    try {
      const newUser = {
        name,
        email,
        password,
        status: selectedOption.value,
        id,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("http://localhost:5000/signup", newUser, config);
      // localStorage.setItem("user", JSON.stringify(...res.data.data));
      toast.success("Registration successful");
      props.history.push("/");
      setRegistering(false);
    } catch (err) {
      toast.error(err.response.data.error);
      setRegistering(false);
    }
  };

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
              <label htmlFor="id">Licence ID</label>
              <input
                type="text"
                id="id"
                name="id"
                value={id}
                onChange={onChange}
                placeholder="Licence ID"
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="id">Name</label>
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
              <label htmlFor="email">EMAIL</label>
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
              <label htmlFor="password">PASSWORD</label>
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
              <label htmlFor="confirm-password">VERIFY PASSWORD</label>
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
              <Select
                className={styles.select}
                value={selectedOption}
                onChange={setSelectedOption}
                options={roleOptions}
                placeholder="Select your role"
              />
            </div>
            <button
              type="submit"
              className={styles.submit}
              disabled={registering}
              onClick={handleSubmit}
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

export default Signup;
