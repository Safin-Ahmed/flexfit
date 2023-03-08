import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "workoutsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api",
    prepareHeaders: async (headers, { getState }) => {
      const token = process.env.NEXT_PUBLIC_USER_AUTH_TOKEN;
      console.log("Token: ", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Workouts", "Routines", "Exercises", "Profile"],
  endpoints: (builder) => ({}),
});
