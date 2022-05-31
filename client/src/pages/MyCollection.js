import React from 'react'
import { useContext, useEffect, useState} from "react";
import { Context } from "..";
import axios from "axios";
import jwt_decode from "jwt-decode";


export  function MyCollection() {
  const {user}=useContext(Context);
  const [name, setName]=useState("");
  const [lastName, setLastName]=useState("");
  const [email, setEmail]=useState("");
  const [role, setRole]=useState("");

  async function fetchUsers() {
    const response = await axios.get(`http://localhost:5000/api/user/auth/${user._dataUser.id}`);
    user.setDataUser(response.data);
    console.log(response.data)
    console.log("userData", user);
    setName(user._dataUser.name);
    setLastName(user._dataUser.lastName)
    setEmail(user._dataUser.email)
    setRole(user._dataUser.role)
  }
  useEffect(() => {
    fetchUsers();
  }, []);

    
  return (
    <div className="ms-5" >
      <div>
      <h2 className="fs-2 mt-5">
     {name}
    </h2> 
    <h2 className="fs-2 mt-2">
      {lastName}
    </h2> 
    </div>
    <div className="fs-4 mt-5 ">
       email: {email}
    </div> 
    <div className="fs-4 mt-3" >
       role: {role}
    </div> 
    </div>
  )
}
