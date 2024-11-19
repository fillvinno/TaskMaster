import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Card} from "../../../server/models.ts";


export const cardAPI = createApi({
  reducerPath: 'cardAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + '/card'
  }),
  endpoints: (builder) => ({
    getAll: builder.query<Card, void>({
      query: (arg) => ({
        url: '/',
        credentials: 'include'
      })
    })
  })
})