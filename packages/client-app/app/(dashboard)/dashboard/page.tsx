"use client";

import PieChart from "@components/pie-chart/pie-chart";
import { useAppSelector } from "@hooks/reduxHooks";
import DashboardLayout from "@layout/DashboardLayout";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { useGetAllWorkoutsQuery } from "@redux/features/api/workouts-api";
import PageHead from "@shared/head";
import styles from "@styles/dashboard.module.scss";
import { getWorkoutProgress } from "@utils/getWorkoutProgress";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = (): JSX.Element => {
  const auth = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Get all workouts
  // @ts-ignore
  const { data: workoutData } = useGetAllWorkoutsQuery();

  // Get workout progress
  const workoutInfo = getWorkoutProgress(workoutData);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.replace("/");
      return;
    }
    setIsLoading(false);
    return;
  }, [auth.isAuthenticated]);

  return (
    <>
      <PageHead title="Dashboard" />

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <DashboardLayout>
            <Box className={styles.content__wrapper}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Dashboard
              </Typography>
              <Divider />

              <Typography className={styles.wc__msg} variant="h4">
                Welcome {auth?.name}
              </Typography>

              <Box className={styles.content}>
                <Box className={styles.progress__chart}>
                  <PieChart workoutData={workoutData} />
                </Box>

                <Box className={styles.curr__workout}>
                  <Typography variant="h5" marginBottom={2}>
                    Running Workout
                  </Typography>

                  <Card>
                    <CardContent className={styles.workout__card}>
                      <Box className={styles.title__wrap}>
                        <Typography>
                          {/* @ts-ignore */}
                          {workoutInfo?.currentWorkout?.title}
                        </Typography>

                        <Chip
                          label={
                            // @ts-ignore
                            workoutInfo?.currentWorkout?.isCompleted
                              ? "Completed"
                              : "Incomplete"
                          }
                          color={
                            // @ts-ignore
                            workoutInfo?.currentWorkout?.isCompleted
                              ? "success"
                              : "error"
                          }
                        />
                      </Box>

                      <Box className={styles.routines__wrapper}>
                        <Typography fontWeight={600}>Routines List</Typography>

                        {/* @ts-ignore */}
                        {workoutInfo?.currentWorkout?.routines?.data?.map(
                          (routine: any) => (
                            <Box
                              className={styles.routine}
                              key={routine?.id}
                              sx={{ boxShadow: 1, m: 1, mb: 2 }}
                            >
                              <Typography>
                                {routine?.attributes?.title}
                              </Typography>

                              <Chip
                                label={
                                  // @ts-ignore
                                  routine?.attributes?.isCompleted
                                    ? "Completed"
                                    : "Incomplete"
                                }
                                color={
                                  // @ts-ignore
                                  routine?.attributes?.isCompleted
                                    ? "success"
                                    : "error"
                                }
                              />
                            </Box>
                          )
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Box>
          </DashboardLayout>
        </>
      )}
    </>
  );
};

export default Dashboard;
