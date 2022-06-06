import React, {useState, useEffect} from "react";

import {UserData} from "../components/UserData";

export const UserPage = () => {
  const [ref, setRef] = useState("");
 
  useEffect(() => {
      setRef(window.location.href.split('/',4));
       console.log(window.location.href.split(''));
      setRef(ref); 
      console.log(ref);
    //   console.log(ref.split(''));
     
    // console.log(ref);
  }, []);

  return (
    <div className=" ms-3 mt-3 p-3 user-data">
      <div>agsgagragag</div>
      <UserData id={ref[4]}/>
      {ref}
    </div>
  );
};
