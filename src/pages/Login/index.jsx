import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../../context/Auth";
import { createContext } from "react";
import "./style.scss";
import axios from "../../api/axios";

const LOGIN_URL = "'https://fakestoreapi.com/auth/login";

const index = () => {
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      // console.log(user, pwd);
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("UnAutorization");
      } else {
        setErrMsg("login failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h2>Your are logged in!</h2>
          <br />
          <p>
            <a href="/">Go to home</a>
          </p>
        </section>
      ) : (
        // }
        <div className="d-flex bg-white py-4 flex-column justify-content-center align-items-center">
          <div className="login-top d-flex flex-column aling-items-center w-50 justify-content-center">
            <h1 className="text-warning text-center">Log in </h1>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <p className="text-center my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur necessitatibus suscipit molestiae architecto expedita
              omnis, in magnam iste rem, mollitia, nam non provident quisquam
              animi. Animi rerum similique ratione natus!
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="form-admin d-flex justify-content-between align-items-start flex-column  w-50"
          >
            <label className="w-100 my-3">
              Email address
              <input
                className="form-control w-100 mt-2"
                type="text"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                autoComplete={"off"}
                ref={userRef}
                required
                placeholder="Enter email"
              />
            </label>
            <label className="label w-100 my-2">
              Password
              <input
                className="form-control w-100 my-2"
                type="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                placeholder="Password"
              />
            </label>
            <div className="d-flex justify-content-start gap-2 align-items-center w-100">
              <button className="w-25 btn btn-warning btn-submit" type="submit">
                Submit
              </button>
              <NavLink to="/sign" className="sign-in btn btn-outline-warning">
                Sign In
              </NavLink>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default index;
