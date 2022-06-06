import "bootstrap/dist/css/bootstrap.min.css";
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/AppRouter";
import React from "react";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {useContext, useEffect, useState} from "react";
import {check} from "./http/userAPI";
import {Container} from "react-bootstrap";
import jwt_decode from "jwt-decode";
import {SideBar} from "./components/Side-bar";

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading]=useState(true)

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
        user.setDataUser(jwt_decode(localStorage.token))
      })
      .catch((e) => console.log(e.response.data))
.finally(()=>{setLoading(false)})
  }, []);

  

  console.log(user);

  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <div className="main">
          {user._isAuth&&<SideBar />}
          <AppRouter />
        </div>
      </Container>
      <Footer />
    </BrowserRouter>
  );
});
export default App;
