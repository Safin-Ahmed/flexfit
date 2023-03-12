'use client';

import Workouts from '@components/Customizable-Workout/Workouts';
import DashboardLayout from '@layout/DashboardLayout';
import PageHead from '@shared/head';

const WorkoutsPage = (): JSX.Element => {
  return (
    <>
      <PageHead title="Dashboard | User Workouts" />

      <DashboardLayout>
        <Workouts />
      </DashboardLayout>
    </>
  );
};

export default WorkoutsPage;
