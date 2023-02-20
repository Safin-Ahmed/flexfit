"use client";

import DashboardLayout from "@layout/DashboardLayout";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PageHead from "@shared/head";
import styles from "@styles/dashboard.module.scss";
import Link from "next/link";

const navLinks = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <OtherHousesOutlinedIcon />,
  },
  {
    name: "Workout",
    link: "/dashboard/workout",
    icon: <FitnessCenterOutlinedIcon />,
  },
  {
    name: "Progress",
    link: "/dashboard/progress",
    icon: <InsightsOutlinedIcon />,
  },
  {
    name: "Reminder",
    link: "/dashboard/reminder",
    icon: <NotificationsActiveOutlinedIcon />,
  },
];

const Dashboard = (): JSX.Element => {
  return (
    <>
      <PageHead title="Dashboard" />

      <DashboardLayout>
        <h3>Dashboard</h3>
     </DashboardLayout>
    </>
  );
};

export default Dashboard;
