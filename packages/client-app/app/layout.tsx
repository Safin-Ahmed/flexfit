"use client";
import { Provider } from "react-redux";
import store from "redux/store";
import "react-circular-progressbar/dist/styles.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "@redux/features/api";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
        <html lang="en">
          {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
          <head />
          <body>{children}</body>
        </html>
      </ApiProvider>
    </Provider>
  );
}
