import React from "react";
import "../style/iconSmall.css";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";

export const IconSmall = observer((name) => {
  const [letterSmall, setLetterSmall] = useState("");
  useEffect(() => {
    if (name) {
      setLetterSmall(name.name.split("", 1));
    }
  }, []);

  return (
    <div>
      <div className="spase-letter-small">
        <div className="letter-small">{letterSmall}</div>
      </div>
    </div>
  );
});
