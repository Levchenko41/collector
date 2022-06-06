import React from "react";
import axios from "axios";
import {useState} from "react";
import {Container, Button} from "react-bootstrap";
import {useEffect} from "react";
import Modal from "../components/Modal";

export const Users = () => {
  const [users, setUsers] = useState("");
  const [user, setUser] = useState("");

  const [modalActive, setModalActive] = useState(false);
  const apiUrl = "http://localhost:5000/api/user/authAll";

  async function fetchUsers() {
    const response = await axios.get(apiUrl);
    setUsers(response.data);
  }

  useEffect(() => {
    fetchUsers();
  }, [modalActive]);

  const deleteUser = async (index) => {
    const response = await axios.delete(
      `http://localhost:5000/api/user/delete/${index}`
    );
    fetchUsers();
    if (response.data.message) {
      alert(response.data.message);
    }
  };
  return (
    <Container className="d-block">
      <h2 className="mb-3 fs-2 mt-4 text-center">List of all users</h2>
      {users ? (
        <div>
          <div>
            <div className="user-con">
              {users.map((user, index) => {
                return (
                  <div key={index} className="user-one mb-3">
                    <div className="fs-3">id: {user.id}</div>
                    <div className="fs-3">Name: {user.name}</div>
                    <div className="fs-3">Last: Name: {user.lastName}</div>
                    <div className="fs-3">Email: {user.email}</div>
                    <div className="fs-3">Role: {user.role}</div>
                    <div className="fs-3">Created user: {user.createdAt}</div>
                    <div className="fs-3">Updated user: {user.updatedAt}</div>
                    <div>
                      {" "}
                      <Button
                        className="mb-3"
                        onClick={() => deleteUser(user.id)}>
                        Delete
                      </Button>
                    </div>
                    <div>
                      {" "}
                      <Button
                        onClick={() => {
                          setModalActive(true);
                          setUser(user);
                         
                        }}>
                        Сhange
                      </Button>
                      <hr />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      <Button
        onClick={() => {
          fetchUsers();
        }}>
        Update table
      </Button>

      {modalActive && <Modal setActive={setModalActive} userData={user} />}
    </Container>
  );
};
