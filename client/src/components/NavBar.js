import React from "react";
import {useContext} from "react";
import {Navbar, Nav, Button, Container} from "react-bootstrap";
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
      <Navbar className="navbar"  variant="dark">
        <Container>
          <Navbar.Brand>
            <img className="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         
            <Nav className="me-auto">
              <Nav className="me-2 fs-4" >
                <Link className="link-nav" to="/">Home</Link>
              </Nav>
              <Nav className="me-2 fs-4">
                <Link className="link-nav" to="/users">Users</Link>
              </Nav>
              <Nav className="me-2 fs-4 ">
                <Link className="link-nav" to="/mycollection">My collection</Link>
              </Nav>
            </Nav>
          
          {user.isAuth ? (
            <Button
              variant="primary"
              className="me-2"
              onClick={() => signOut()}>
              Sing out
            </Button>
          ) : (
            <Nav className="btn-header">
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
