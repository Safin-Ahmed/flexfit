<<<<<<< HEAD
"use client";
import AuthForm from "@components/AuthForm";
import { Container } from "@mui/material";
import React from "react";
=======
'use client';

import Workouts from '@components/Customizable-Workout/Workouts';
import { Inter } from '@next/font/google';
import { useGetAllRoutinesQuery } from '@redux/features/api/routine-api';
import { useGetAllWorkoutsQuery } from '@redux/features/api/workouts-api';
import PageHead from '@shared/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // const { data: allWorkouts } = useGetAllWorkoutsQuery();
  // const { data: allRoutines } = useGetAllRoutinesQuery();
>>>>>>> ea113996ffa5b05c13bf3537e083903a45d00a37

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
