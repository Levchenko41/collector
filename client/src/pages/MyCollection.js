import React from "react";
import { PersonData } from "../components/PersonData";
import { AboutProject } from "./AboutProject";

export const MyCollection=()=> {

  return (
    <div className="myPage">
      <div> <PersonData/></div>
      <div><AboutProject/></div>
     
      
      
    </div>
  );
}
