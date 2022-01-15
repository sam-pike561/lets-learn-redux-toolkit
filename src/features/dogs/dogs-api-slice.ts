import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DOGS_API_KEY = '2aef72ee-27ce-43d0-aae2-e8cead7ab725';

interface Breed {
  id: string;
  name: string;
  image: {
    url: string
  }
}
// API Slice

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);

      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      })
    }
  }
})
// creates custom query hook from provided endpoint fields
export const { useFetchBreedsQuery,  } = apiSlice;