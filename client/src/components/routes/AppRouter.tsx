import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../../routes.tsx";

const isAuth = true

const AppRouter = () => {
  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Component}) => <Route key={path} path={path} element={Component} />)}
      {publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={Component} />)}
      <Route path='*' element={<Navigate to={'/'}/>} />
    </Routes>
  );
};

export default AppRouter;