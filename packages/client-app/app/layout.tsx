"use client";
import { Provider } from "react-redux";
import store from "redux/store";
import "react-circular-progressbar/dist/styles.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>{children}</body>
      </html>
    </Provider>
  );
}
