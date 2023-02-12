"use client";

import { userWorkoutInfo } from "@data/userWorkoutInfo";
import { Box, Typography } from "@mui/material";
import PageHead from "@shared/head";
import { currentWorkoutProgress } from "@utils/getPercentage";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import { CircularProgressbar } from "react-circular-progressbar";
import styles from "./progress.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const completedWorkouts = userWorkoutInfo.workouts.filter(
  (workout) => workout.isCompleted
);
const inCompletedWorkouts = userWorkoutInfo.workouts.filter(
  (workout) => workout.isCompleted === false
);

const data = {
  labels: ["Total Workouts", "Completed Workout", "InCompleted Workout"],
  datasets: [
    {
      label: "Number of Workouts",
      data: [
        userWorkoutInfo.workouts.length,
        completedWorkouts.length,
        inCompletedWorkouts.length,
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "#4bb5437a",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "#4bb543",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Progress: React.FC = () => {
  return (
    <>
      <PageHead title="Dashboard || User Progress" />
      <Box className={styles.progress__wrapper}>
        <Box className={styles.progress__content}>
          <Box className={styles["progress--chart"]}>
            <Pie data={data} />
          </Box>

          <Box
            className={`${styles["progress--chart"]} ${styles["circular--progress"]}`}
          >
            <Typography variant="h5">Current Workout</Typography>

            <CircularProgressbar
              value={currentWorkoutProgress(userWorkoutInfo)}
              text={`${currentWorkoutProgress(userWorkoutInfo)}%`}
            />
          </Box>

          <Box className={styles["progress--chart"]}></Box>
        </Box>
      </Box>
    </>
  );
};

export default Progress;
