import React, {useContext} from "react";
import {Routes, Route} from "react-router-dom";
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../routes";

export const AppRouter = () => {
  const {user} = useContext(Context);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({path, element}) => (
          <Route key={path} path={path} element={element} exact />
        ))}
      {publicRoutes.map(({path, element}) => (
        <Route key={path} path={path} element={element} exact />
      ))}
    </Routes>
  );
};
