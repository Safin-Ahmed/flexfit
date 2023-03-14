"use client";

import DashboardLayout from "@layout/DashboardLayout";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  useGetUserProfileQuery,
  useUpdateProfileMutation,
} from "@redux/features/api/profile/profileApi";
import PageHead from "@shared/head";
import styles from "@styles/profile.module.scss";
import { useEffect, useState } from "react";

const Profile = (): JSX.Element => {
  const { data: userData, isSuccess } = useGetUserProfileQuery();

  const [gender, setGender] = useState("");
  const [level, setLevel] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phoneNumber: "",
    age: 0,
    gender: "",
    level: "",
  });

  // Update profile mutation
  const [
    updateProfile,
    {
      isLoading: isUpdateLoading,
      isSuccess: isUpdateSuccess,
      isError: isUpdateError,
      error: updateError,
    },
  ] = useUpdateProfileMutation();

  // Handle input change
  const handleInputChange = (e: any) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Handle gender select
  const handleGenderSelect = (e: any) => {
    setGender(e.target.value);
  };

  // Handle level select
  const handleLevelSelect = (e: any) => {
    setLevel(e.target.value);
  };

  // Handle profile info update
  const handleProfileUpdate = (e: any) => {
    e.preventDefault();
    const id = userData?.id;

    const payload = {
      username: formData.username || userData?.username,
      phoneNumber: formData.phoneNumber || userData?.phoneNumber,
      age: formData.age || userData?.age,
      gender: gender || userData?.gender,
      level: level || userData?.level,
    };

    updateProfile({ id, payload });
  };

  useEffect(() => {
    if (isSuccess) {
      setGender(userData?.gender);
      setLevel(userData?.level);
    }
  }, []);

  useEffect(() => {
    if (isUpdateSuccess) {
      alert("Profile Update");
    }

    if (isUpdateError) {
      alert("Something went wrong");
    }
  }, []);

  return (
    <>
      <PageHead title="Dashboard | User Profile" />

      <DashboardLayout>
        <Box className={styles.content__wrapper}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Profile
          </Typography>
          <Divider />

          <Box className={styles.profile__box}></Box>

          <Box
            component={"form"}
            onSubmit={handleProfileUpdate}
            className={styles.info__form}
          >
            <TextField
              name="username"
              placeholder="Username"
              fullWidth
              className={styles.input__field}
              defaultValue={userData?.username}
              value={formData.username}
              onChange={handleInputChange}
            />
            <TextField
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email Address"
              fullWidth
              className={styles.input__field}
              value={userData?.email}
              disabled
            />
            <TextField
              name="password"
              onChange={handleInputChange}
              type="password"
              placeholder="Password"
              value={formData.password}
              fullWidth
              className={styles.input__field}
            />
            <TextField
              name="phoneNumber"
              onChange={handleInputChange}
              type="phone"
              placeholder="Phone Number"
              fullWidth
              className={styles.input__field}
              defaultValue={userData?.phoneNumber}
              value={formData.phoneNumber}
            />
            <TextField
              name="age"
              onChange={handleInputChange}
              type="number"
              placeholder="Age"
              fullWidth
              className={styles.input__field}
              defaultValue={userData?.age}
              value={formData.age}
            />

            <FormControl fullWidth className={styles.input__field}>
              <InputLabel id="gender">Select Gender</InputLabel>
              <Select
                value={gender}
                onChange={handleGenderSelect}
                labelId="gender"
                label="Select Gender"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth className={styles.input__field}>
              <InputLabel id="level">Select Your Level</InputLabel>
              <Select
                labelId="='level"
                onChange={handleLevelSelect}
                label="Select Your Level"
              >
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              className={styles.save__button}
              variant="contained"
              disableRipple
              disabled={isUpdateLoading}
            >
              Save Changed
            </Button>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  );
};

export default Profile;
