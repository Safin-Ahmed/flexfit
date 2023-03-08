"use client";

import PieChart from "@components/pie-chart/pie-chart";
import DashboardLayout from "@layout/DashboardLayout";
import { Box, Divider, Typography } from "@mui/material";
import { useGetUserProfileQuery } from "@redux/features/api/profile/profileApi";
import { useGetAllWorkoutsQuery } from "@redux/features/api/workouts-api";
import PageHead from "@shared/head";
import styles from "@styles/dashboard.module.scss";

const Dashboard = (): JSX.Element => {
  // Get user profile
  const { data: userInfo } = useGetUserProfileQuery();

  // Get all workouts
  const { data: workoutData } = useGetAllWorkoutsQuery();

  return (
    <>
      <PageHead title="Dashboard" />

      <DashboardLayout>
        <Box className={styles.content__wrapper}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Dashboard
          </Typography>
          <Divider />

          <Typography className={styles.wc__msg} variant="h4">
            Welcome {userInfo?.username || "Brother"}
          </Typography>

          <Box className={styles.content}>
            <Box className={styles["progress__chart"]}>
              <PieChart workoutData={workoutData} />
            </Box>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
