import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function MyForm() {
  const initalFormData = {
    email: "",
    password: "",
    age: "",
  };

  const ageRef = useRef(null);
  const passRef = useRef(null);

  const [formData, setFormData] = useState({ ...initalFormData });

  const [err, setErr] = useState({
    email: null,
    password: null,
    age: null,
  });

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const changeHandler = (e) => {
    if (e.target.name === "email" && !emailRegex.test(e.target.value)) {
      setErr({
        ...err,
        email: `email should have format like name@email.com`,
        // [e.target.name]: `${e.target.name} should have format like this 'name@email.com' `,
      });
    } else if (e.target.name === "age" && e.target.value < 18) {
      setErr({
        ...err,
        [e.target.name]: `${e.target.name} must be +18, Adults only.`,
      });
    } else if (e.target.name === "password" && e.target.value.length <= 8) {
      setErr({
        ...err,

        [e.target.name]: `${e.target.name} must be more than 8 characters.`,
      });
    } else {
      setErr({
        ...err,
        [e.target.name]: null,
      });
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !err.email &&
      !err.age &&
      !err.password &&
      emailRegex.test(formData.email) &&
      formData.password.length > 8 &&
      formData.age >= 18
    ) {
      setFormData({
        ...initalFormData,
      });
      alert("Successful!");
    } else {
      alert("You can not submit before typing your data correctly!");
    }
  };
  return (
    <div className="mt-4 bg-light py-3">
        <br></br>
      <h1 className="text-center text-dark "> Sign Up </h1>
      <br></br>
    <Form
      className="customHeight text-light text-center  d-flex flex-column justify-content-center align-items-center"
      onSubmit={submitHandler}
       id='my_Form'
    >
      <Form.Group className="col-lg-8  mb-3 " controlId="formBasicEmail">
        <Form.Label>Enter Ur Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={changeHandler}
          value={formData.email}
        />
        <Form.Text
          className={err.email ? "text-danger fs-5" : "text-muted"}
        >
          {err.email
            ? err.email
            : " Don't be afraid, your password is completely protected by us ."}
        </Form.Text>
      </Form.Group>

      <Form.Group
        ref={passRef}
        className="col-lg-8 mb-3"
        controlId="formBasicPassword"
      >
        <Form.Label>Enter Ur Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.password}
          placeholder="Password"
          name="password"
          onChange={changeHandler}
        />
        <Form.Text
          className={err.password ? "text-danger fs-5" : "text-muted"}
        >
          {err.password
            ? err.password
            : "For Ur safety Password has to be more than 8 characters."}
        </Form.Text>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group
        className="col-lg-8 mb-3"
        controlId="formBasicAge"
        ref={ageRef}
      >
        <Form.Label>Enter Ur Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Your Age"
          value={formData.age}
          name="age"
          onChange={changeHandler}
        />
        <Form.Text
          className={err.age ? "text-danger fs-5" : "text-muted"}
        >
          {err.age ? err.age : "  Your Age must be +18."}
        </Form.Text>
      </Form.Group>

      <Button
        variant="light"       
        className="col-lg-5 mt-1 p-1"
        type="submit">
         <h3>Submit</h3>                   
      </Button>
    </Form>
    <br></br>
    <br></br>
    </div>
  );
}
