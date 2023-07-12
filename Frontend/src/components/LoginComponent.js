import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../utils/authSlice";
import { useFormik } from "formik";
import axios from "axios";
import { addUser } from "../../utils/userSlice";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) =>
      axios
        .post("http://localhost:8000/login", values)
        .then((res) => {
          if (res?.data === "Failed") alert("NO RECORD");
          else if (res?.data?.length > 0) {
            dispatch(addUser(res?.data));
            dispatch(login());
            navigate("/");
          }
        })
        .catch((err) => console.log(err)),
  });
  return (
    <div className="f-container">
      <div className="f-wrapper">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="f-input-box">
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="f-input-box">
            <input
              type="password"
              placeholder="Create password"
              name="password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="f-input-box f-button">
            <input type="Submit" value="Login" />
          </div>
          <div className="f-text">
            <h3>
              Already have an account? <Link to="/register">Register Here</Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
