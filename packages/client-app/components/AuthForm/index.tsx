"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@hooks/useAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState({
    identifier: "",
    password: "",
    username: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const router = useRouter();
  const { loginHandler, error, registerHandler, logoutHandler } = useAuth(data);
  const handleLogin = async () => {
    const user = await loginHandler();
    if (user && !error) {
      router.push("/dashboard");
    }
  };

  const handleRegister = async () => {
    const user = await registerHandler();
    if (user && !error) {
      router.push("/dashboard");
    }
  };

  return (
    <Card>
      <CardContent sx={{ display: "flex", padding: "0 !important" }}>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography marginBottom={4} variant="h4">
            {isLogin ? "Login" : "Register"}
          </Typography>
          {!isLogin && (
            <TextField
              sx={{ width: "70%", mb: 2 }}
              label="Username*"
              type="text"
              value={data.username}
              name="username"
              onChange={handleChange}
            />
          )}
          <TextField
            sx={{ width: "70%", mb: 2 }}
            label="Email*"
            type="email"
            value={data.identifier}
            name="identifier"
            onChange={handleChange}
          />
          <br />
          <TextField
            sx={{ width: "70%" }}
            label="Password*"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <br />

          <FormControlLabel
            label="Need an account?"
            control={
              <Checkbox
                checked={!isLogin}
                onChange={(e) => setIsLogin(!e.target.checked)}
              />
            }
          ></FormControlLabel>
          <br />
          {isLogin ? (
            <Button
              sx={{ width: "70%", bgcolor: "#000" }}
              variant="contained"
              onClick={handleLogin}
            >
              Login
            </Button>
          ) : (
            <Button
              sx={{ width: "70%", bgcolor: "#000" }}
              variant="contained"
              onClick={handleRegister}
            >
              Register
            </Button>
          )}

          {error && <p style={{ color: "red" }}>{error}</p>}
        </Box>
        <Box sx={{ width: "50%" }}>
          <Image
            style={{ width: "100%", objectFit: "cover", height: "100%" }}
            src={"/auth.jpg"}
            width={500}
            height={700}
            alt="auth"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
