import React, {useEffect} from 'react';
import {Navigate, NavigateFunction, Route, Routes, useNavigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../../routes.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {userAPI} from "../../services/UserAPI.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {userSlice} from "../../store/reducers/UserSlice.ts";

const isAuth = true

const AppRouter = () => {
  const {isAuth} = useAppSelector(state => state.userReducer)
  const {setAuth, setUser} = userSlice.actions
  const dispatch = useAppDispatch()
  const {error, isLoading, refetch, } = userAPI.useRefreshQuery()

  const navigate: NavigateFunction = useNavigate()

  useEffect(() => {
    try {
      async function fetchData() {
        const user = await refetch()

        dispatch(setAuth(true))
        dispatch(setUser(user.data?.user))
        console.log(user.data?.user)

        if (error) {
          navigate('/login')
        }
      }
      fetchData()
    } catch (e) {
      console.log(error)
    }
  }, [])

  if (isLoading) return <h1>Загрузка...</h1>

  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Component}) => <Route key={path} path={path} element={Component} />)}
      {publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={Component} />)}
      <Route path='*' element={<Navigate to={'/'}/>} />
    </Routes>
  );
};

export default AppRouter;