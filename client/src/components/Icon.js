import React from "react";
import "../style/icon.css";
import {useContext, useEffect, useState} from "react";
import {Context} from "..";
import {observer} from "mobx-react-lite";

export const Icon = observer(() => {
  const {user} = useContext(Context);

  const [letter, setLetter] = useState("");
  useEffect(() => {
    if (user.dataUser.name) {
      setLetter(user.dataUser.name.split("", 1));
    }
  }, [user.dataUser.name]);

  return (
    <div>
      <div className="spase-letter">
        <div className="letter">{letter}</div>
      </div>
    </div>
  );
});
