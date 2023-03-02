import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  name: string;
  email: string;
  token: string;
  isAuthenticated: boolean;
};

type loginPayload = {
  jwt: string;
  user: {
    email: string;
    id: number;
    username: string;
  };
};

const initialState: InitialState = {
  name: "",
  email: "",
  token: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<loginPayload>) => {
      console.log(action.payload);
      return (state = {
        name: action.payload.user.username,
        email: action.payload.user.email,
        token: action.payload.jwt,
        isAuthenticated: true,
      });
    },
    logout: (state) => {
      console.log(state.isAuthenticated);
      return (state = {
        ...initialState,
      });
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
