import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  name: string;
  email: string;
  avatar: string;
  token: string;
  isAuthenticated: boolean;
};

type loginPayload = {
  name: string;
  email: string;
  avatar: string;
  token: string;
};

const initialState: InitialState = {
  name: "",
  email: "",
  avatar: "",
  token: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<loginPayload>) => {
      state = {
        ...action.payload,
        isAuthenticated: true,
      };
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
