import React from "react";
import "../style/registration-page.css";
import {Container, Form, Button} from "react-bootstrap";
import logo from "../logo.svg";
import {registration} from "../http/userAPI";
import {useContext} from "react";
import {Context} from "..";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {MYCOLLECTION_ROUTE} from "../utils/consts";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const Registration = observer(() => {
  const history = useNavigate();
  

  const {user} = useContext(Context);
  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("Field cannot be empty");

  const [lastName, setLastName] = useState("");
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [lastNameError, setLastNameError] = useState("Field cannot be empty");

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Field cannot be empty");

  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState("Field cannot be empty");

  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || passwordError || repeatPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError, repeatPasswordError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    const re = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
    if (!re.test(String(e.target.value.toLowerCase()))) {
      setNameError("Invalid name");
    } else {
      setNameError("");
    }
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    const re = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
    if (!re.test(String(e.target.value.toLowerCase()))) {
      setLastNameError("Invalid name");
    } else {
      setLastNameError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!re.test(String(e.target.value.toLowerCase()))) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
    if (!re.test(String(e.target.value))) {
      setPasswordError(
        "Invalid password. Password must contain uppercase and lowercase letters, numbers"
      );
    } else {
      setPasswordError("");
    }
  };

  const repeatPasswordHandler = (e) => {
    setRepeatPassword(e.target.value);
    if (e.target.value !== password) {
      setRepeatPasswordError("Passwords do not match");
    } else {
      setRepeatPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;

      case "lastName":
        setLastNameDirty(true);
        break;

      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const signUpe = async () => {
    const response = await axios
      .post("http://localhost:5000/api/user/registration", {
        name,
        lastName,
        email,
        password,
        role: "USER",
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  const signUp = async () => {
    try {
      let newUser;
      newUser = await registration(name, lastName, email, password);
      console.log(newUser);
      user.setUser(user);
      user.setIsAuth(true);
      user.setDataUser(jwt_decode(localStorage.token))
      console.log("user");
      console.log(user);
    } catch (e) {
    alert(e.response.data.message);
    }
  };
  return (
    <Container id="registration-container" className="d-grid h-100">
      <Form className="registration  w-100">
        <div className="d-flex justify-content-center mb-5">
          <img id="logo-page-auth" src={logo} alt="logo" />
        </div>
        <div className="d-flex justify-content-center mb-4">
          {" "}
          <h2>Registration</h2>{" "}
        </div>

        <Form.Group className="mb-3 " controlId="registration-firstName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            onBlur={(e) => blurHandler(e)}
            placeholder="Name"
            value={name}
            onChange={(e) => {
              nameHandler(e);
              setName(e.target.value);
            }}
          />
          {nameDirty && nameError && (
            <div style={{color: "red"}}>{nameError}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 " controlId="registration-lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            name="lastName"
            onBlur={(e) => blurHandler(e)}
            placeholder="Last name"
            value={lastName}
            onChange={(e) => {
              lastNameHandler(e);
              setLastName(e.target.value);
            }}
          />
          {lastNameDirty && lastNameError && (
            <div style={{color: "red"}}>{lastNameError}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3  " controlId="registration-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onBlur={(e) => blurHandler(e)}
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              emailHandler(e);
            }}
          />
          {emailDirty && emailError && (
            <div style={{color: "red"}}>{emailError}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 " controlId="registration-password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onBlur={(e) => blurHandler(e)}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              passwordHandler(e);
            }}
          />
          {passwordDirty && passwordError && (
            <div style={{color: "red"}}>{passwordError}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 " controlId="registration-password">
          <Form.Label>Repeat password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repeat password"
            value={repeatPassword}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
              repeatPasswordHandler(e);
            }}
          />
          <div>{password}</div>
          <div>{repeatPassword}</div>
          {repeatPasswordError && (
            <div style={{color: "red"}}>{repeatPasswordError}</div>
          )}
        </Form.Group>
        <div className="d-grid">
          <Button
            type="primary"
            disabled={!formValid}
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              signUp();
            }}>
            Create Account
          </Button>
        </div>
      </Form>
    </Container>
  );
});
