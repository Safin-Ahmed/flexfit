import { apiSlice } from '..';

const userExerciseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUserExercises: builder.query<any, void>({
      query: () => 'user-exercises?populate=*',
      transformResponse: (res: any) => {
        return res.data.sort((a: any, b: any) => b.id - a.id);
      },
      providesTags: ['Exercises'],
    }),
    getUserExercise: builder.query<number, void>({
      query: (id) => `user-exercises/${id}`,
    }),
    addUserExercise: builder.mutation({
      query: (userExercise) => ({
        url: `user-exercises`,
        method: 'POST',
        body: userExercise,
      }),
      invalidatesTags: ['Exercises'],
    }),
    updateUserExercise: builder.mutation({
      query: ({ id, data }) => ({
        url: `user-exercises/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Exercises'],
    }),
    deleteUserExercise: builder.mutation({
      query: (id) => ({
        url: `user-exercises/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Exercises'],
    }),
  }),
});

export const {
  useAddUserExerciseMutation,
  useDeleteUserExerciseMutation,
  useGetAllUserExercisesQuery,
  useGetUserExerciseQuery,
  useUpdateUserExerciseMutation,
} = userExerciseApi;

export default userExerciseApi;
