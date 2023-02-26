import { apiSlice } from '..';
const workoutsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllWorkouts: builder.query<any, void>({
      query: () => "/workouts?populate=deep",
      transformResponse: (res: any) => {
        return res.data.sort((a: any, b: any) => b.id - a.id);
      },
      providesTags: ["Workouts"],
    }),
    getWorkout: builder.query<number, void>({
      query: (workoutId) => `/workouts/${workoutId}`,
    }),
    addWorkout: builder.mutation({
      query: (workout) => ({
        url: `/workouts`,
        method: "POST",
        body: workout,
      }),
      invalidatesTags: ["Workouts"],
    }),
    updateSingleWorkout: builder.mutation({
      query: ({ workoutId, data }) => ({
        url: `/workouts/${workoutId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Workouts"],
    }),
    deleteSingleWorkout: builder.mutation({
      query: (id) => ({
        url: `/workouts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Workouts"],
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
