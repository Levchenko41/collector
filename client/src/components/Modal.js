import React, {useContext, useState} from "react";
import {Context} from "..";
import "../style/modal.css";
import {Form, Button} from "react-bootstrap";
import axios from "axios";

const Modal = ({setActive, userData}) => {
  const {user} = useContext(Context);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(userData.role);


  const changeUser = async (index, name, lastName, email, role) => {
   await axios
      .put(`http://localhost:5000/api/user/update/${index}`, {
        name,
        lastName,
        role,
        email,
      })
      .then((response) => {
     
        user.setDataUser(response.data);
      })
      .catch((err) => alert(err.response.data));
  };
  return (
    <div className="" id="modal" onClick={() => setActive(false)}>
      <div id="modal-content" onClick={(e) => e.stopPropagation()}>
        <Form>
          <Form.Label className="fs-2 mb-3">
            Enter the data you want to change
          </Form.Label>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>

            <Form.Control
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a new name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter a new Last name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter a new email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select
              onChange={(e) => {
                setRole(e.target.value);
              }}>
              <option>USER</option>
              <option>ADMIN</option>
            </Form.Select>
          </Form.Group>
          <Button
            type="primary"
            size="lg"
            onClick={() => {
              changeUser(user.dataUser.id, name, lastName, email, role);

              setActive(false);
            }}>
            Сhange
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Modal;
