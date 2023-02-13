import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth";
import themeReducer from "../features/theme";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
