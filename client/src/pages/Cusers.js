import React from "react";
import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";
import { IconSmall } from "../components/IconSmall";
import { Link } from "react-router-dom";


export const Cusers=()=>{
    const [users, setUsers] = useState("");
    const [link, setLink] = useState("/user/");

    async function fetchUsers() {
        const response = await axios.get("http://localhost:5000/api/user/authAll");
        setUsers(response.data);
      }

useEffect(()=>{
    fetchUsers()
},[])

    return(
<div className="p-3 m-3 cusers">
{users&&users.map((user,index)=>{
    return(
        
        <div key={index} className="pb-3 mb-3 fs-4 d-flex user-users" >
           <Link to={link+user.id} > <IconSmall name={user.name}/></Link>
            <div className="ms-3">
        <div >{user.name}</div>
        <div >{user.lastName}</div>
        {link+user.id}
        
        </div>
       
        </div>
        
    )
})}

</div>
    )
}