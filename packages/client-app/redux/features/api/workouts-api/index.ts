import { apiSlice } from '..';
const workoutsApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //@ts-ignore
    getAllWorkouts: builder.query<any, void>({
      query: () => 'workouts',
      transformResponse: (res: any) => {
        return res.data.sort((a: any, b: any) => b.id - a.id);
      },
      providesTags: ['Workouts'],
    }),
    //@ts-ignore
    getWorkout: builder.query<number, void>({
      query: (workoutId: any) => `workouts/${workoutId}`,
    }),
    addWorkout: builder.mutation({
      query: (workout: any) => ({
        url: `workouts`,
        method: 'POST',
        body: workout,
      }),
      invalidatesTags: ['Workouts'],
    }),
    updateSingleWorkout: builder.mutation({
      query: ({ workoutId, data }: any) => ({
        url: `workouts/${workoutId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Workouts'],
    }),
    deleteSingleWorkout: builder.mutation({
      query: (id: any) => ({
        url: `workouts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Workouts'],
    }),
  }),
});

export const {
  useAddWorkoutMutation,
  useGetAllWorkoutsQuery,
  useDeleteSingleWorkoutMutation,
  useGetWorkoutQuery,
  useUpdateSingleWorkoutMutation,
} = workoutsApi;

export default workoutsApi;
