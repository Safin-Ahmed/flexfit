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

  return (
    <>
      <PageHead title="Home Page" />
      <main>
        <Workouts />
      </main>
    </>
  );
}
