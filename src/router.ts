import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./login/Login";
import Sponsors from "./sponsors/Sponsors";

const router: RouteObject[] = [
  {
    path: "/",
    Component: App,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/sponsors",
    Component: Sponsors,
  },
];

export default createBrowserRouter(router);
