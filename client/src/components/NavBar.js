import React from "react";
import {useContext} from "react";
import {Navbar, Nav, Button, Form, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import "../style/navBar.css";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export const NavBar = observer(() => {
  const {user} = useContext(Context);
  return (
    <>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <img style={{width: 45}} src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/users">Users</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form.Group className="me-4">
            <Form.Control type="text" className="me-2" placeholder="Search" />
          </Form.Group>
          {user.isAuth ? (
            <Button
              variant="primary"
              className="me-2"
              onClick={() => user.setIsAuth(false)}>
              Sing out
            </Button>
          ) : (
            <Nav>
              <Link to={LOGIN_ROUTE}>
                <Button variant="primary" className="me-2">
                  Sign in
                </Button>
              </Link>
              <Link to={REGISTRATION_ROUTE}>
                <Button
                  variant="primary"
                  className="me-2"
                  onClick={() => user.setIsAuth(true)}>
                  Sign up
                </Button>
              </Link>
              <div></div>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});
