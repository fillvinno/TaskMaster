import React, {useEffect, useState} from 'react';
import {Navigate, NavigateFunction, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../../routes.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {userAPI} from "../../services/UserAPI.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {userSlice} from "../../store/reducers/UserSlice.ts";
import {UserDto} from "../../../../server/dtos/user.dto.ts";
import Loader from "../Loader/Loader.tsx";
import {skipToken} from "@reduxjs/toolkit/query";

const AppRouter = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate: NavigateFunction = useNavigate()

  const {refetch, data, isFetching, isError} = userAPI.useRefreshQuery()
  const {setAuth, setUser} = userSlice.actions
  const {isAuth} = useAppSelector(state => state.userReducer)

  let response: any

  useEffect(() => {
    console.log('isauth => ', isAuth)
    async function fetchData() {
      try {
        if (localStorage.getItem('token')) {
          response = await refetch()
          dispatch(setAuth(true))
          dispatch(setUser(response?.data?.user))
        } else if (isError) {
          dispatch(setAuth(false))
          dispatch(setUser({} as UserDto))
          navigate('/login')
        }
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
      .then(() => {
        if (isError) {
          dispatch(setAuth(false))
          dispatch(setUser({} as UserDto))
          navigate('/login')
        }
        if (isAuth) navigate('/')
        if (!isAuth) {
          if (location.pathname === '/login') navigate('/login')
          if (location.pathname === '/registration') navigate('/registration')
        }
      })
  }, [])

  return (
    isFetching
      ?
        <Loader/>
      :
        <Routes>
          {isAuth && authRoutes.map(({path, Component}) => <Route key={path} path={path} element={Component} />)}
          {publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={Component} />)}
          {isAuth
            ? <Route path='*' element={<Navigate to={'/'}/>}/>
            : <Route path='*' element={<Navigate to={'/login'}/>}/>
          }
        </Routes>
  );
};

export default AppRouter;