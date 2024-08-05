import React, {useEffect, useState} from 'react';
import {Navigate, NavigateFunction, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../../routes.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {userAPI} from "../../services/UserAPI.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {userSlice} from "../../store/reducers/UserSlice.ts";
import {UserDto} from "../../../../server/dtos/user.dto.ts";
import Loader from "../loader/Loader.tsx";
import {skipToken} from "@reduxjs/toolkit/query";

const AppRouter = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate: NavigateFunction = useNavigate()

  const {error, refetch, data, isLoading, isFetching, isError} = userAPI.useRefreshQuery()
  const {setAuth, setUser} = userSlice.actions
  const {isAuth} = useAppSelector(state => state.userReducer)

  let response: any

  useEffect(() => {
    console.log('isauth => ', isAuth)
    if (!isAuth) navigate('/login')

    async function fetchData() {
      try {
        if (localStorage.getItem('token')) {
          response = await refetch()
          console.log('12333 = ', data)
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
        console.log(data)
        if (isError) {
          dispatch(setAuth(false))
          dispatch(setUser({} as UserDto))
          navigate('/login')
        }
        if (isAuth) navigate('/')
      })
  }, [isAuth])

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