import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../features/Auth";
import themeReducer from "../features/theme";

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
