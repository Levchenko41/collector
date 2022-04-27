import {
  ADMIN_ROUTE,
  REGISTRATION_ROUTE,
  MYCOLLECTION_ROUTE,
  LOGIN_ROUTE,
  COLLECTION_ROUTE,
} from "./utils/consts";

import {MyCollection} from "./pages/MyCollection";
import {Admin} from "./pages/Admin";
import {Auth} from "./pages/Auth";
import {Registration} from "./pages/Registration";
import {Collection} from "./pages/Collection";


export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin/>,
  },
  {
    path: MYCOLLECTION_ROUTE,
    element: <MyCollection />,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <Auth/>,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Registration/>,
  },
  {
    path: COLLECTION_ROUTE,
    element: <Collection/>,
  },
];
