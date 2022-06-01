import "bootstrap/dist/css/bootstrap.min.css";
import {NavBar} from "./components/NavBar";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/AppRouter";
import React from "react";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {useContext, useState, useEffect} from "react";
import { check } from "./http/userAPI";
import {Container} from "react-bootstrap";
import axios from "axios";
import jwt_decode from "jwt-decode";

const App = observer(() => {

  const {user} = useContext(Context);
 
  const [loading, setLoading] = useState(true);

console.log(localStorage)






  useEffect(()=>{
    
check()
.then(data=>{
  console.log("qqq")
  user.setUser(true)
  user.setIsAuth(true)
  user.setDataUser(jwt_decode(localStorage.token))
})
.catch(e=>console.log(e.response.data.message))
 },[])

 console.log(user)



 

  return (
    <BrowserRouter>
      <NavBar />
      <Container>
      <AppRouter />
      </Container>
    </BrowserRouter>
  );
});
export default App;
