"use client";

import PieChart from "@components/pie-chart/pie-chart";
import DashboardLayout from "@layout/DashboardLayout";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
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

  // Get workout progress
  const workoutInfo = getWorkoutProgress(workoutData);

  // @ts-ignore
  const result = getRoutineProgress(workoutData);
  const exercisesLists =
    result?.activeRoutine?.attributes?.exercise_lists?.data;

  return (
    <>
      <PageHead title="Dashboard | User Progress" />

      <DashboardLayout>
        <Box className={styles.progress__wrapper}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Progress
          </Typography>
          <Divider />

          <Grid container className={styles.progress__content}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className={styles["progress--chart"]}
            >
              <Box sx={{ width: "90%", height: "90%" }}>
                <PieChart workoutData={workoutData} />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className={`${styles["progress--chart"]} ${styles["circular--progress"]}`}
            >
              <Typography variant="h5">Current Workout</Typography>

              <CircularProgressbar
                // @ts-ignore
                value={workoutInfo?.progress || 0}
                // @ts-ignore
                text={`${workoutInfo?.progress || 0}%`}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className={styles["progress--chart"]}
            >
              <Typography className={styles.routine__title} variant="h5">
                Today Routine
              </Typography>
              <Card className={styles.routine__content}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
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

                  <Box className={styles.exercise__list}>
                    {exercisesLists?.length > 0 ? (
                      <Box>
                        <Typography fontWeight={600}>Exercises List</Typography>
                        {exercisesLists.map((exercise: any) => (
                          <Box
                            className={styles.exercise}
                            key={exercise.id}
                            sx={{ boxShadow: 1, m: 1 }}
                          >
                            <Typography>
                              {
                                exercise?.attributes?.exercise?.data?.attributes
                                  ?.title
                              }
                            </Typography>
                            <Chip
                              label={
                                exercise?.attributes?.isCompleted
                                  ? "Completed"
                                  : "Incomplete"
                              }
                              color={
                                exercise?.attributes?.isCompleted
                                  ? "success"
                                  : "error"
                              }
                            />
                          </Box>
                        ))}
                      </Box>
                    ) : (
                      <Typography>There are no exercises</Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </DashboardLayout>
    </>
  );
};

export default Progress;
