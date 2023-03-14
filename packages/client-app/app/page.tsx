"use client";

import AuthForm from "@components/AuthForm";
import { Container } from "@mui/material";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
