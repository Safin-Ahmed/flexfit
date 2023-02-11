import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isDark: boolean;
};

const initialState: InitialState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export default themeSlice.reducer;
export const { toggle } = themeSlice.actions;
