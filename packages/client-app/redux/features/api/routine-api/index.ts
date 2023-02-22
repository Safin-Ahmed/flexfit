import { apiSlice } from '..';

export const routinesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRoutines: builder.query<any, void>({
      query: () => `routines?populate=*`,
      providesTags: ['Routines'],
    }),
    getRoutine: builder.query<number, void>({
      query: (id) => `routines/${id}`,
    }),
    createRoutine: builder.mutation({
      query: (routine) => ({
        url: 'routines',
        method: 'POST',
        body: routine,
      }),
      invalidatesTags: ['Routines'],
    }),
    updateSingleRoutine: builder.mutation({
      query: ({ routineId, data }) => ({
        url: `routines/${routineId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Routines'],
    }),
    deleteSingleRoutine: builder.mutation({
      query: (id) => ({
        url: `routines/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Routines'],
    }),
  }),
});

export const {
  useGetAllRoutinesQuery,
  useCreateRoutineMutation,
  useDeleteSingleRoutineMutation,
  useGetRoutineQuery,
  useUpdateSingleRoutineMutation,
} = routinesApi;
