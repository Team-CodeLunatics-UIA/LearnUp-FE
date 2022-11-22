import React, { useEffect, useReducer } from "react";
import axios from "axios";

import setAuthToken from "../../Utils/SetAuthToken";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import {
  SIGNUP_USER,
  LOGIN_USER,
  GET_USER,
  AUTH_FAIL,
  SET_LOADING,
  CLEAR_ERROR,
  LOGOUT_USER,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    user: null,
    loading: false,
    isAuthenticated: null,
    error: null,
    registered: false,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const url = "http://localhost:5000";

  // Set token and load user
  const loadUser = async () => {
    dispatch({ type: SET_LOADING });
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get(url + "/auth");
      dispatch({
        type: GET_USER,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_FAIL });
    }
  };

  // Signup
  const signup = async (user) => {
    try {
      dispatch({ type: SET_LOADING });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(url + "/signupschool", user, config);
      dispatch({
        type: SIGNUP_USER,
        payload: res.data.data,
      });
      // loadUser();
    } catch (err) {
      dispatch({
        type: AUTH_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login
  const login = async (user) => {
    try {
      dispatch({ type: SET_LOADING });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(url + "/loginschool", user, config);
      dispatch({
        type: LOGIN_USER,
        payload: res.data.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: AUTH_FAIL,
        payload: err.response.data.msg,
      });
      throw new Error(err.response.data.msg);
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT_USER });
  };

  const clearError = () => {
    dispatch({
      type: CLEAR_ERROR,
    });
  };

  // useEffect(() => {
  //   loadUser();
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        loading: state.loading,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        registered: state.registered,
        error: state.error,
        signup,
        login,
        logout,
        clearError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
