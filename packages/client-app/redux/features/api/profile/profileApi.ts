import { apiSlice } from "..";

const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<any, void>({
      query: () => "/users/me?populate=*",
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateProfileMutation } = profileApi;
export default profileApi;
