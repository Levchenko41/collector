import {
  ADMIN_ROUTE,
  MYCOLLECTION_ROUTE,
  LOGIN_ROUTE,
  COLLECTION_ROUTE,
  USERS_ROUTE
} from "./utils/consts";
import React from 'react';
import {MyCollection} from "./pages/MyCollection";
import {Admin} from "./pages/Admin";
import {Auth} from "./pages/Auth";
import {Registration} from "./pages/Registration";
import {Collection} from "./pages/Collection";
import { Users } from "./pages/Users";
import { Cusers } from "./pages/Cusers";
import { AboutProject } from "./pages/AboutProject";
import {UserPage} from "./pages/UserPage";


export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin/>,
  },
  {
    path: '/aboutProject',
    element: <AboutProject/>,
  },
  {
    path: MYCOLLECTION_ROUTE,
    element: <MyCollection/>,
  },
  {
    path: USERS_ROUTE,
    element:<Users/>
  },
  {
    path: COLLECTION_ROUTE,
    element: <Collection/>,
  },
  {
    path: '/user/:id',
    element: <UserPage/>,
  },
  {
    path:'/allusers',
    element: <Cusers/>
  }
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <Auth/>,
  },
  {
    path: '/registration',
    element: <Registration/>,
  },
  {
    path: COLLECTION_ROUTE,
    element: <Collection/>,
  },
  {
    path: '/aboutProject',
    element: <AboutProject/>,
  },
  {
    path: '/user/:id',
    element: <UserPage/>,
  },
];
