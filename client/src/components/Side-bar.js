import React from 'react'
import {Link} from "react-router-dom";

export const SideBar =()=> {
  return (
    <div  className="mt-3 fs-4 side-bar" >
        <ul>
        <li>
          <Link className="side-bar-nav" to="/mycollection">
            My profile
          </Link>
        </li>
        <li>
          <Link className="side-bar-nav" to="/allusers">
            All users
          </Link>
        </li>
        </ul>
        <hr/>
        </div>
  )
}
