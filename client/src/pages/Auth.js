import React from "react";
import "../style/auth-page.css";
import {Container, Form, Button} from "react-bootstrap";
import logo from "../logo.svg";

export function Auth() {
  return (
    <Container id="auth-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center w-100">
        <img id="logo-page-auth" className="mb-4 " src={logo} alt="logo" />
        <h1 className="fs-3 mb-3 fw-normal"> Please sign in </h1>
        <Form.Group className="mb-3" controlId="sign-in-email-address">
          <Form.Control type="email" size="lg" placeholder="Email address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control type="password" size="lg" placeholder="Password" />
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-center mb-4"
          controlId="remember-me">
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid">
          <Button type="primary" size="lg">
            Sing in
          </Button>
        </div>
      </Form>
    </Container>
  );
}
