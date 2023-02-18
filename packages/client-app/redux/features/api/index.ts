import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "workoutsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
  }),
  tagTypes: ["Workouts"],
  endpoints: (builder) => ({}),
});
