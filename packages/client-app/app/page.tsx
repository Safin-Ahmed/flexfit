import TestComponent from '@components/test';
import Workouts from '@components/Workouts/Workouts';
import { Inter } from '@next/font/google';
import PageHead from '@shared/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <PageHead title="Home Page" />
      <main>
        <TestComponent />
        <Workouts />
      </main>
    </>
  );
}
