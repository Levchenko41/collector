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


const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

console.log(localStorage)



console.log(user )
  useEffect(()=>{
check().then(data=>{
  user.setUser(true)
  user.setIsAuth(true)
})
 },[])

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});
export default App;
