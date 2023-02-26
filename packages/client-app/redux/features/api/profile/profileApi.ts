import { apiSlice } from "..";

const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<any, void>({
      query: () => "/users/me?populate=*",
    }),
  }),
});

export const { useGetUserProfileQuery } = profileApi;
export default profileApi;
