import React from "react";
import axios from "axios";
import {useState} from "react";
import {Table, Container, Button} from "react-bootstrap";
import {useEffect} from "react";

import Modal from "../components/Modal";


export const Users = () => {
  const [users, setUsers] = useState("");

  const [id, setId] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const apiUrl = "http://localhost:5000/api/user/authAll";
  


  async function fetchUsers() {
    const response = await axios.get(apiUrl);
    setUsers(response.data);
    console.log("ddfd");
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

  console.log(modalActive);
  return (
    <Container>
      <h2 className="mb-3 mt-4 text-center">List of all users</h2>
      {users ? (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created user</th>
              <th>Updated user</th>
              <th>Delete user</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.updatedAt}</td>
                  <td>
                    {" "}
                    <Button onClick={() => deleteUser(user.id)}>Delete</Button>
                  </td>
                  <td>
                    {" "}
                    <Button
                      onClick={() => {
                        setModalActive(true);
                        setId(user.id);
                      }}>
                      Сhange
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}

      <Button
        onClick={() => {
          fetchUsers();
        }}>
        Update table
      </Button>

      {modalActive && <Modal setActive={setModalActive} userId={id} />}
    </Container>
  );
};
