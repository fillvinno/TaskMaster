import React, {useEffect} from 'react';
import {Navigate, NavigateFunction, Route, Routes, useNavigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../../routes.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {userAPI} from "../../services/UserAPI.ts";

const isAuth = true

const AppRouter = () => {
  const {isAuth} = useAppSelector(state => state.userReducer)
  const {data, error, isLoading, refetch} = userAPI.useRefreshQuery()
  const navigate: NavigateFunction = useNavigate()

  useEffect(() => {
    try {
      // console.log(data)
      // console.log(error)
      console.log(isAuth)
    } catch (e) {
      console.log(e)
    }
  }, [isAuth])

  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Component}) => <Route key={path} path={path} element={Component} />)}
      {publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={Component} />)}
      <Route path='*' element={<Navigate to={'/'}/>} />
    </Routes>
  );
};

export default AppRouter;