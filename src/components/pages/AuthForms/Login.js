import { useState, useContext, useEffect, Fragment } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import Logo from "../../../assets/icons/learnup.png";
import HomeNavbar from "../Navbar/HomeNavbar";
import Footer from "../Footer";

import styles from "../../../styles/Forms/Signup.module.css";
// import authContext from "../../../context/auth/authContext";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const history = useHistory();
  // const existingUser = JSON.parse(localStorage.getItem("user"));
  // const { isAuthenticated, user: loggedUser, error, login, clearError } = useContext(authContext);

  // useEffect(() => {
  //   if (existingUser) {
  //     if (existingUser.status === "teacher") props.history?.push("/teacher/student-dashboard");
  //     else if (existingUser.status === "district") {
  //       props.history?.push("/distict/overview");
  //     } else if (existingUser.status === "state") {
  //       props.history?.push("/state/overview");
  //     }
  //   }
  // }, []);

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);
    try {
      // await login(user);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("http://localhost:5000/login", user, config);

      JSON.parse(localStorage.setItem("user", JSON.stringify(res.data.data)));

      //
      toast.success("Logged in Successfully");
      setLoggingIn(false);
    } catch (err) {
      toast.error(err);
      setLoggingIn(false);
    }
    if (localStorage.getItem("user").status === "teacher")
      history?.push("/teacher/student-dashboard");
    else if (localStorage.getItem("user").status === "district") {
      history?.push("/distict/overview");
    } else if (localStorage.getItem("user").status === "school") {
      history?.push("/school/overview");
    }
    history?.push("/district/overview");
  };

  // useEffect(() => {
  //   if (error) {
  //     setLoggingIn(false);
  //     toast.error(error);
  //     clearError();
  //   }
  // }, [error]);

  return (
    <Fragment>
      <HomeNavbar />
      <div className={styles.container}>
        <div className={styles.loginPageContainer}>
          <div className={styles.logoIcon}>
            <img src={Logo} alt="" />
          </div>

          <div className={styles.headers}>
            <p className={styles.loginTitle}>Log In</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
                placeholder="Email Address"
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
                  required
                  onChange={onChange}
                  autoComplete="off"
                  placeholder="Password"
                />
                <div className={styles.showPassword} onClick={togglePassword}>
                  {passwordShown ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={styles.submit}
              disabled={loggingIn}
              onClick={handleSubmit}
            >
              {loggingIn ? "Logging In.." : "Log In"}
            </button>
            <div className={styles.form__footer}>
              <div className={`${styles.row} ${styles.links}`}>
                <Link to="/signup" className={styles.link}>
                  <p>Create Account</p>
                </Link>
                <Link to="/" className={styles.link}>
                  <p>Forgot Password</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Login;
