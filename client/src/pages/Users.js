import React from "react";
import axios from "axios";
import {useState} from "react";
import {Table, Container, Button} from "react-bootstrap";
import {useEffect} from "react";
import UpdateModalWindow from "../components/UpdateModalWindow";
import Modal from "../components/Modal";

export const Users = () => {
  const [users, setUsers] = useState("");
  const [count, setCount]=useState(0)
  const [post, setPost]=useState('')
  const [modalActive,setModalActive]=useState(false)
  const apiUrl = "http://localhost:5000/api/user/authAll";

  async function fetchUsers() {
    const response = await axios.get(apiUrl);
    setUsers(response.data);
   
    console.log('ddfd');
  }


  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (index) => {
    const response = await axios.delete(
      `http://localhost:5000/api/user/delete/${index}`
    );
    fetchUsers();
    if (response.data.message) {
      alert(response.data.message);
    }
  };
  const changeUser=async(index, name, lastName, role, email)=>{
    const response=await axios
    .put(`http://localhost:5000/api/user/update/${index}`, {name, lastName, role, email})
    .then(response=>setPost(response.data))
    .catch(err=>setPost(err.response.data));
  }
  
console.log(post)

  return (
    <Container>
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
                    <Button onClick={ ()=>changeUser(11,"vasya","vasya0","vasya","33333")}>Сhange</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}

<Button onClick={()=>{setCount(prev=>prev+1)
setModalActive(true)}}>Count: {count}</Button>
<UpdateModalWindow/>
{modalActive&&<Modal active={modalActive} setActive={setModalActive}/>}
</Container>
  );
};
