import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TUserData} from '../../../server/controllers/user.controller.ts'
import {IUserFormLogin, IUserFormRegistration} from "../models/IUser.ts";

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + '/user',
  }),
  tagTypes: ['User'],
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
    refresh:  builder.query<TUserData, void>({
      query: () => ({
        url: `/refresh`,
        credentials: 'include'
      }),
    })
  })
})