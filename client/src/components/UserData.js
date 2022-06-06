import React from 'react'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
import {Icon} from "../components/Icon";

export const UserData=(id) =>{

    const i=useParams();
    console.log(i)
    const [data, setData] = useState(false);
  
    async function fetchUser() {
      const response = await axios.get(
        `http://localhost:5000/api/user/auth/${id}`
      );
      setData(response.data);
    }
   
    useEffect(() => {
      fetchUser();
    }, []);

  return (
   
       < div className=" ms-3 mt-3 p-3 user-data">
        <div >
        <div className="d-flex">
          <Icon/>
          <div className="ms-3">
          <h2 className="fs-2">{data.name}</h2>
          <h2 className="fs-2 mt-2">{data.lastName}</h2>
          </div>
        </div>
      
        <div className="fs-4 mt-4 ">email: {data.email}</div>
      </div>
    </div>
  )
}
