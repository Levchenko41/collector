import React from "react";
import "../style/auth-page.css";
import {Container, Form, Button} from "react-bootstrap";
import logo from "../logo.svg";
import { login, registration } from "../http/userAPI";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import { MYCOLLECTION_ROUTE } from "../utils/consts";


export const Auth=observer(()=>{
 const {user}=useContext(Context)
 const location =useLocation()
 const history = useNavigate()

const [email, setEmail]=useState('')
const [password, setPassword]=useState('')


const signIn=async()=>{
  try{
   let data;
  data = await login(email, password);
  console.log(data)
  user.setUser(user)
  user.setIsAuth(true)
  console.log(user)
  history(MYCOLLECTION_ROUTE)
}catch(e){
  alert(e.response.data.message)
}
}

  return (
    <Container id="auth-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center w-100">
        <img id="logo-page-auth" className="mb-4 " src={logo} alt="logo" />
        <h1 className="fs-3 mb-3 fw-normal"> Please sign in </h1>
        <Form.Group className="mb-3" controlId="sign-in-email-address">
          <Form.Control type="email" size="lg" placeholder="Email address" value={email} onChange={e=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control type="password" size="lg" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-center mb-4"
          controlId="remember-me">
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid">
          <Button type="primary" size="lg" onClick={signIn}>
            Sing in
          </Button>
        </div>
        <div>{email}</div>
        <div>{password}</div>
      </Form>
    </Container>
  );
}
)