import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from "axios";
import { postAdminUser } from "../../helpers/axiosHelper";
import { ToastContainer, toast } from "react-toastify";

export const RegistrationForm = () => {
  const [form, setForm] = useState({});
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log(form);

    if (form.password !== form.confirmPassword) {
      return toast.error("password and confirm password doesnt match");
    }

    const { confirmPassword, ...rest } = form;
    const { status, message } = await postAdminUser(rest);
    console.log(form);

    // const result = await postAdminUser(rest);
    toast[status](message);
    // console.log(result);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h3>Register new user</h3>
      <hr />
      <br />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name :</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          name="fName"
          placeholder="Sam"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last name :</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          name="lName"
          placeholder="Smith"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone :</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          name="phone"
          placeholder="0412345678"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="date"
          name="dob"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address : </Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          name="address"
          placeholder="Somewhere around Sydney"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="password"
          name="password"
          placeholder="**********"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="password"
          name="confirmPassword"
          placeholder="**********"
          required
        />
      </Form.Group>

      <br />

      <Button variant="primary" type="submit">
        Register
      </Button>

      <div className="text-end">
        Already Registered?
        <Link to="/">Login </Link>
        Now
      </div>
    </Form>
  );
};
