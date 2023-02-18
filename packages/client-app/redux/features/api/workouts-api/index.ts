import { apiSlice } from "..";
const workoutsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllWorkouts: builder.query<any, void>({
      query: () => "workouts",
      transformResponse: (res: any) => {
        return res.data.sort((a: any, b: any) => b.id - a.id);
      },
    }),
    getWorkout: builder.query<number, void>({
      query: (workoutId) => `workouts/${workoutId}`,
    }),
    addWorkout: builder.mutation({
      query: (workout) => ({
        url: `workouts`,
        method: "POST",
        body: workout,
      }),
    }),
    updateWorkout: builder.mutation({
      query: (workout) => ({
        url: `workouts/${workout.id}`,
        method: "PATCH",
        body: workout,
      }),
    }),
    deleteWorkout: builder.mutation({
      query: ({ id }) => ({
        url: `workouts/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const {
  useAddWorkoutMutation,
  useGetAllWorkoutsQuery,
  useDeleteWorkoutMutation,
  useGetWorkoutQuery,
  useUpdateWorkoutMutation,
} = workoutsApi;

export default workoutsApi;
