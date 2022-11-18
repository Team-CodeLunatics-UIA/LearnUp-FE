import { useState, useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../../../assets/icons/learnup.png";
import HomeNavbar from "../Navbar/HomeNavbar";
import Footer from "../Footer";

import styles from "../../../styles/Forms/Signup.module.css";
import authContext from "../../../context/auth/authContext";

const Login = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const { isAuthenticated, user: loggedUser, error, login, clearError } = useContext(authContext);

  useEffect(() => {
    if (isAuthenticated === true) {
      if (user.role === "student") props.history?.push("/student/feedback");
      else props.history?.push("/admin/overview");
    }
  }, [isAuthenticated, props.history]);

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
      await login(user);
      if (!error) toast.success("Logged in Successfully");
    } catch (err) {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (error) {
      setLoggingIn(false);
      toast.error(error);
      clearError();
    }
  }, [error]);

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
            <button type="submit" className={styles.submit} disabled={loggingIn}>
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
