import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TUserData} from '../../../server/controllers/user.controller.ts'
import {IUserFormLogin, IUserFormRegistration} from "../models/IUser.ts";
import {UserDto} from "../../../server/dtos/user.dto.ts";

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + '/user',
    // prepareHeaders: (headers) => {
    //   headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    // }
  }),
  endpoints: (builder) => ({
    login:  builder.mutation<TUserData, IUserFormLogin>({
      query: (user) => ({
        url: `/login`,
        method: 'POST',
        body: user,
        credentials: 'include'
      }),
    }),
    registration:  builder.mutation<TUserData, IUserFormRegistration>({
      query: (user) => ({
        url: `/registration`,
        method: 'POST',
        body: user,
        credentials: 'include'
      }),
    }),
    refresh:  builder.query<UserDto, void>({
      query: () => ({
        url: `/refresh`,
        credentials: 'include'
      }),
    })
  })
})