import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { RegisterSchema } from "../schemas";
import axios from "axios";

const RegisterComponent = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RegisterSchema,
      onSubmit: (values) =>
        axios
          .post("http://localhost:8000/register", values)
          .then((res) => navigate("/login"))
          .catch((err) => console.log(err)),
    });
  return (
    <div className="f-container">
      <div className="f-wrapper">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="f-input-box">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.name && touched.name ? (
            <p className="f-error">{errors.name}</p>
          ) : null}
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
          {errors.email && touched.email ? (
            <p className="f-error">{errors.email}</p>
          ) : null}
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
          {errors.password && touched.password ? (
            <p className="f-error">{errors.password}</p>
          ) : null}
          <div className="f-input-box">
            <input
              type="password"
              placeholder="Confirm password"
              name="confirm_password"
              autoComplete="off"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.confirm_password && touched.confirm_password ? (
            <p className="f-error">{errors.confirm_password}</p>
          ) : null}
          <div className="f-input-box f-button">
            <input type="Submit" value="Register Now" />
          </div>
          <div className="f-text">
            <h3>
              Already have an account? <Link to="/login">Login now</Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
