"use client";
import AuthForm from "@components/AuthForm";
import { Container } from "@mui/material";
import React from "react";

const AuthPage = () => {
  return (
    <div>
      <Container>
        <AuthForm />
      </Container>
    </div>
  );
};

export default AuthPage;
