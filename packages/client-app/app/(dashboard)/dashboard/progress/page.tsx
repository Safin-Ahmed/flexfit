"use client";

import PieChart from "@components/pie-chart/pie-chart";
import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";
import PageHead from "@shared/head";
import { getRoutineProgress } from "@utils/getRoutineProgress";
import { getWorkoutProgress } from "@utils/getWorkoutProgress";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import styles from "./progress.module.scss";

const Progress: React.FC = () => {
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    const getWorkoutInfo = async () => {
      const res = await fetch(
        "http://localhost:1337/api/workouts?populate=deep",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
          },
        }
      );
      const workoutInfo = await res.json();
      setWorkoutData(workoutInfo.data);
    };
    getWorkoutInfo();
  }, []);

  // @ts-ignore
  const result = getRoutineProgress(workoutData);

  return (
    <>
      <PageHead title="Dashboard || User Progress" />
      <Box className={styles.progress__wrapper}>
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
    </>
  );
};

export default Progress;
