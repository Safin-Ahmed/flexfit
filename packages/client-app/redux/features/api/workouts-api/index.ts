import { apiSlice } from '..';
const workoutsApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //@ts-ignore
    getAllWorkouts: builder.query<any, void>({
<<<<<<< HEAD
      query: () => 'workouts',
=======
      query: () => "/workouts?populate=deep",
>>>>>>> fe8b6f417bc5780fd521450478ba1c34ebe73002
      transformResponse: (res: any) => {
        return res.data.sort((a: any, b: any) => b.id - a.id);
      },
      providesTags: ['Workouts'],
    }),
    //@ts-ignore
    getWorkout: builder.query<number, void>({
<<<<<<< HEAD
      query: (workoutId: any) => `workouts/${workoutId}`,
    }),
    addWorkout: builder.mutation({
      query: (workout: any) => ({
        url: `workouts`,
        method: 'POST',
=======
      query: (workoutId) => `/workouts/${workoutId}`,
    }),
    addWorkout: builder.mutation({
      query: (workout) => ({
        url: `/workouts`,
        method: "POST",
>>>>>>> fe8b6f417bc5780fd521450478ba1c34ebe73002
        body: workout,
      }),
      invalidatesTags: ['Workouts'],
    }),
    updateSingleWorkout: builder.mutation({
<<<<<<< HEAD
      query: ({ workoutId, data }: any) => ({
        url: `workouts/${workoutId}`,
        method: 'PUT',
=======
      query: ({ workoutId, data }) => ({
        url: `/workouts/${workoutId}`,
        method: "PUT",
>>>>>>> fe8b6f417bc5780fd521450478ba1c34ebe73002
        body: data,
      }),
      invalidatesTags: ['Workouts'],
    }),
    deleteSingleWorkout: builder.mutation({
<<<<<<< HEAD
      query: (id: any) => ({
        url: `workouts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Workouts'],
=======
      query: (id) => ({
        url: `/workouts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Workouts"],
>>>>>>> fe8b6f417bc5780fd521450478ba1c34ebe73002
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
