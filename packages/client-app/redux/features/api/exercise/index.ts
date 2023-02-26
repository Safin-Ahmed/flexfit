import { apiSlice } from '..';

const exerciseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllExercises: builder.query<any, void>({
      query: () => 'exercises',
      transformResponse: (res: any) => {
        return res.data.sort((a: any, b: any) => b.id - a.id);
      },
      providesTags: ['Exercises'],
    }),
  }),
});

export const { useGetAllExercisesQuery } = exerciseApi;

export default exerciseApi;
