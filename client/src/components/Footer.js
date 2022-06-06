import React from "react";
import vk from "../assets/vk.png";
import git from "../assets/git.png";
import ln from "../assets/in.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
import {Navbar, Nav,  Container} from "react-bootstrap";



export const  Footer=()=> {
  return (
     
    <div className="navbar footer mt-3"  variant="dark">
         <Container>
        <Navbar className="container-footer d-flex justify-content-center me-auto">
<div className="footer-text fs-3 me-5 ">My social networks</div>
<Nav className="d-flex " >
    <li className="me-3"><a href="https://t.me/Levchencko41"><img className="logo" src={telegram} alt="telegram"/></a></li>
    <li className="me-3"><a href="https://github.com/Levchenko41"><img className="logo" src={git} alt="git"/></a></li>
    <li className="me-3"><a href="https://www.linkedin.com/in/vasily-levchenko-a68b72218/"><img className="logo" src={ln} alt="linkedIn"/></a></li>
    <li className="me-3"><a href="https://www.instagram.com/levchencko41/?hl=ru"><img className="logo" src={instagram} alt="instagram"/></a></li>
    <li className="me-3"><a href="https://vk.com/id188894103"><img className="logo" src={vk} alt="vk"/></a></li>
</Nav>
        </Navbar>
      </Container>
    </div>
    
  )
}
