"use client";

import { useAppSelector } from "@hooks/reduxHooks";
import DashboardLayout from "@layout/DashboardLayout";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import PageHead from "@shared/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  const auth = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.replace("/auth");
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
        <DashboardLayout>
          <h3>Dashboard</h3>
        </DashboardLayout>
      )}
    </>
  );
};

export default Dashboard;
