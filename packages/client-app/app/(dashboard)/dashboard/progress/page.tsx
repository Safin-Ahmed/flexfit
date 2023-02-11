"use client";

import { userWorkoutInfo } from "@data/userWorkoutInfo";
import { Box, Typography } from "@mui/material";
import PageHead from "@shared/head";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Progress: React.FC = () => {
  const test = userWorkoutInfo.workouts
  console.log(test)

  return (
    <>
      <PageHead title="Dashboard || Progress" />
      <Box>
        <Typography variant="h4">Progress Page</Typography>
        <Box sx={{ width: "200px", height: "200px" }}>
          <Pie data={data} />
        </Box>
      </Box>
    </>
  );
};

export default Progress;
