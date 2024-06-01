import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts.ts";
import Home from "./pages/Home/Home.tsx";
import Registration from "./pages/Registration/Registration.tsx";
import Auth from "./pages/Auth/Auth.tsx";

interface IRoute {
  path: string,
  Component: JSX.Element
}

export const authRoutes: IRoute[] = [
  {
    path: HOME_ROUTE,
    Component: <Home/>
  }
]

export const publicRoutes: IRoute[] = [
  {
    path: LOGIN_ROUTE,
    Component: <Auth/>
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth/>
  }
]