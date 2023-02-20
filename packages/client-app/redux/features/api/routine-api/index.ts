import { apiSlice } from "..";

export const routinesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRoutines: builder.query<any, void>({
      query: () => "routines",
      providesTags: ["Routines"],
    }),
    createRoutine: builder.mutation({
      query: (routine) => ({
        url: "routines",
        method: "POST",
        body: routine,
      }),
      invalidatesTags: ["Routines"],
    }),
  }),
});

export const { useGetAllRoutinesQuery, useCreateRoutineMutation } = routinesApi;
