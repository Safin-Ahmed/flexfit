import { apiSlice } from "..";

export const routinesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRoutines: builder.query<any, void>({
      query: () => "routines",
    }),
    createRoutine: builder.mutation({
      query: (routine) => ({
        url: "routines",
        method: "POST",
        body: routine,
      }),
    }),
  }),
});

export const { useGetAllRoutinesQuery, useCreateRoutineMutation } = routinesApi;
