import React from "react";
import {useContext} from "react";
import {Navbar, Nav, Button, Form, Container} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import logo from "../logo.svg";
import "../style/navBar.css";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, COLLECTION_ROUTE} from "../utils/consts";

export const NavBar = observer(() => {
  const {user} = useContext(Context);
  const navigate = useNavigate();
  const signOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  localStorage.clear();
  navigate(COLLECTION_ROUTE)
  };

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
              <Nav className="me-2">
                <Link to="/">Home</Link>
              </Nav>
              <Nav className="me-2">
                <Link to="/users">Users</Link>
              </Nav>
              <Nav className="me-2">
                <Link to="/mycollection">My collection</Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
          <Form.Group className="me-4">
            <Form.Control type="text" className="me-2" placeholder="Search" />
          </Form.Group>
          {user.isAuth ? (
            <Button
              variant="primary"
              className="me-2"
              onClick={() => signOut()}>
              Sing out
            </Button>
          ) : (
            <Nav>
              <Button
                variant="primary"
                className="me-2"
                onClick={() => navigate(LOGIN_ROUTE)}>
                Sign in
              </Button>

              <Link to={REGISTRATION_ROUTE}>
                <Button variant="primary" className="me-2">
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
