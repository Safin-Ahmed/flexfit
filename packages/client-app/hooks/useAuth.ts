import { login, logout } from "@redux/features/Auth";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import React, { useState } from "react";

export const useAuth = (data: any) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");
  const auth = useAppSelector((state) => state.auth);
  const { identifier, password, username } = data;

  const loginHandler = async () => {
    if (!identifier || !password) {
      setError("Please enter all the required fields");
      return;
    }
    setError("");
    const response = await fetch(`http://localhost:1337/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: data.identifier,
        password: data.password,
      }),
    });

    const user = await response.json();
    if (!user) {
      setError("Login Failed!");
      return;
    }
    dispatch(login(user));

    return user;
  };

  const registerHandler = async () => {
    if (!identifier || !password || !username) {
      setError("Please enter all the required fields");
      return;
    }

    setError("");

    const response = await fetch(
      `http://localhost:1337/api/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: identifier,
          password,
          username,
        }),
      }
    );

    const user = await response.json();
    dispatch(login(user));
    return user;
  };

  const logoutHandler = () => {
    dispatch(logout());
    setTimeout(() => console.log(auth.isAuthenticated), 1000);
  };
  return {
    auth,
    loginHandler,
    error,
    registerHandler,
    logoutHandler,
  };
};
