"use client";

import PieChart from "@components/pie-chart/pie-chart";
import DashboardLayout from "@layout/DashboardLayout";
import {
  Box,
  Card,
  CardContent,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useGetAllWorkoutsQuery } from "@redux/features/api/workouts-api";
import PageHead from "@shared/head";
import styles from "@styles/progress.module.scss";
import { getRoutineProgress } from "@utils/getRoutineProgress";
import { getWorkoutProgress } from "@utils/getWorkoutProgress";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const Progress: React.FC = () => {
  // Get all workouts
  const { data: workoutData } = useGetAllWorkoutsQuery();

  // @ts-ignore
  const result = getRoutineProgress(workoutData);

  return (
    <>
      <PageHead title="Dashboard | User Progress" />

      <DashboardLayout>
        <Box className={styles.progress__wrapper}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Progress
          </Typography>
          <Divider />

          <Box className={styles.progress__content}>
            <Box className={styles["progress--chart"]}>
              <PieChart workoutData={workoutData} />
            </Box>

            <Box
              className={`${styles["progress--chart"]} ${styles["circular--progress"]}`}
            >
              <Typography variant="h5">Current Workout</Typography>

              <CircularProgressbar
                value={getWorkoutProgress(workoutData)}
                text={`${getWorkoutProgress(workoutData)}%`}
              />
            </Box>

            <Box className={styles["progress--chart"]}>
              <Typography className={styles.routine__title} variant="h5">
                Today Routine
              </Typography>
              <Card className={styles.routine__content}>
                <CardContent>
                  <Typography variant="h6">
                    {/* @ts-ignore */}
                    {result?.activeRoutine
                      ? // @ts-ignore
                        result?.activeRoutine?.attributes?.title
                      : "No active routine"}
                  </Typography>

                  <LinearProgress
                    className={styles.progress}
                    variant="determinate"
                    // @ts-ignore
                    value={result?.progress ? result.progress : 0}
                    // @ts-ignore
                    title={result?.progress && result.progress}
                  />
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  );
};

export default Progress;
