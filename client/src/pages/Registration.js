import React from "react";
import "../style/registration-page.css";
import {Container, Form, Button} from "react-bootstrap";
import logo from "../logo.svg";

export function Registration() {
  return (
    <Container id="registration-container" className="d-grid h-100">
    
      <Form className="registration  w-100">

        <div className="d-flex justify-content-center mb-5">
          <img id="logo-page-auth"   src={logo} alt="logo" />
          </div>
      <div className="d-flex justify-content-center mb-4"> <h2>Registration</h2> </div>
        <Form.Group className="mb-3 " controlId="registration-firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="First name" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="registration-lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Last name" />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="registration-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="registration-password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="registration-password">
          <Form.Label>Repeat password</Form.Label>
          <Form.Control type="password" placeholder="Repeat password" />
        </Form.Group>
        <div className="d-grid">
          <Button type="primary" size="lg">
            Create Account
          </Button>
        </div>
      </Form>
    </Container>
  );
}
