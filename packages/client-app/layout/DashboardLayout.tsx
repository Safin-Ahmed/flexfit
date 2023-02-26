import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import {
  Avatar,
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
import { useGetUserProfileQuery } from "@redux/features/api/profile/profileApi";
import { SwitchButton } from "@shared/switch";
import styles from "@styles/dashboard-layout.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <OtherHousesOutlinedIcon />,
  },
  {
    name: "Workouts",
    link: "/dashboard/workouts",
    icon: <FitnessCenterOutlinedIcon />,
  },
  {
    name: "Progress",
    link: "/dashboard/progress",
    icon: <InsightsOutlinedIcon />,
  },
];

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  // Path name
  const pathName = usePathname();

  // Get user profile info
  const { data: profileInfo } = useGetUserProfileQuery();
  console.log(profileInfo?.avatar?.url);

  return (
    <Grid container spacing={2}>
      <Grid item md={2}>
        <Drawer
          sx={{
            width: 220,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 220,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
          className={styles.sidebar}
        >
          <Box>
            <Typography
              className={styles.sidebar__logo}
              variant="h5"
              align="center"
              fontWeight={700}
            >
              FlexFit
            </Typography>
            <Divider />
          </Box>

          <Box className={styles.profile}>
            <Link href="/dashboard/profile" className={styles.link}>
              <Box component="center">
                {profileInfo?.avatar ? (
                  <Image
                    src={profileInfo?.avatar?.url}
                    width={80}
                    height={80}
                    alt="Profile Picture"
                  />
                ) : (
                  <Avatar sx={{ width: 80, height: 80 }} />
                )}
              </Box>
            </Link>

            <Box component="center" sx={{ mt: 2 }}>
              <SwitchButton />
            </Box>
          </Box>

          <List>
            {navLinks.map((route) => (
              <Link
                key={Math.random()}
                className={styles.link}
                href={route.link}
              >
                <ListItemButton
                  className={
                    pathName === route.link
                      ? `${styles.list} ${styles.active}`
                      : styles.list
                  }
                  disableRipple
                >
                  <ListItemIcon>{route.icon}</ListItemIcon>
                  <ListItemText className={styles.text} primary={route.name} />
                </ListItemButton>
              </Link>
            ))}

            <ListItemButton
              className={`${styles.list} ${styles.logout__btn}`}
              disableRipple
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText className={styles.text} primary="Logout" />
            </ListItemButton>
          </List>
        </Drawer>
      </Grid>
      <Grid item md={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
