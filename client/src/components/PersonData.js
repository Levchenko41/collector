import React from 'react'
import {useContext, useEffect, useState} from "react";
import {Context} from "..";
import axios from "axios";
import {Icon} from "../components/Icon";
import {Button} from "react-bootstrap";
import Modal from "../components/Modal";
import {observer} from "mobx-react-lite";


export const PersonData =observer(()=> {
    const {user} = useContext(Context);
    const [modalActive, setModalActive] = useState(false);
  
    async function fetchUser() {
      const response = await axios.get(
        `http://localhost:5000/api/user/auth/${user._dataUser.id}`
      );
      user.setDataUser(response.data);
    }
   
    useEffect(() => {
      fetchUser();
    }, []);
  return (
    <div className=" ms-3 mt-3 p-3 person-data">
        <div >
        <div className="d-flex">
          <Icon/>
          <div className="ms-3">
          <h2 className="fs-2">{user.dataUser.name}</h2>
          <h2 className="fs-2 mt-2">{user.dataUser.lastName}</h2>
          </div>
        </div>
      
        <div className="fs-4 mt-4 ">email: {user.dataUser.email}</div>
        <div className="fs-4 mt-3">role: {user.dataUser.role}</div>
        <Button
          onClick={() => {
            setModalActive(true);
          }}>
          Edit data
        </Button>
      </div>
      {modalActive && (
        <Modal setActive={setModalActive}  userData={user.dataUser} />
      )}
        </div>
  )
})