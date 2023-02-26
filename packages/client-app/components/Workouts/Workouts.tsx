"use client";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  useAddWorkoutMutation,
  useDeleteSingleWorkoutMutation,
  useGetAllWorkoutsQuery,
  useUpdateSingleWorkoutMutation,
} from "@redux/features/api/workouts-api";
import * as React from "react";
import SingleWorkout from "../SingleWorkout/SingleWorkout";
import WorkoutForm from "./WorkoutForm";

const Workouts = () => {
  //RTK===================
  //create
  const [addWorkout, { isError, isLoading, isSuccess }] =
    useAddWorkoutMutation();

  //get
  const { data: allWorkouts } = useGetAllWorkoutsQuery();

  //delete
  const [deleteSingleWorkout, { isSuccess: isDeleteSuccess }] =
    useDeleteSingleWorkoutMutation();

  //update
  const [updateSingleWorkout, { isSuccess: isUpdateSuccess }] =
    useUpdateSingleWorkoutMutation();
  //RTK===================

  const [isAdd, setIsAdd] = React.useState(false);

  // For Update States
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [workoutId, setWorkoutId] = React.useState(0);

  //lift and create workouts
  ///////////////////////////
  const liftCreateWorkouts = (formData: object) => {
    //closing the workout form
    setIsAdd(false);
    const payload = {
      data: {
        //@ts-ignore
        title: formData.title,
        //@ts-ignore
        endDate: formData.endDate,
      },
    };
    addWorkout(payload);
  };

  // get workout id to update the workout
  const getWorkoutId = (id: number) => {
    setWorkoutId(id);
    setIsUpdate(!isUpdate);
  };

  //edit or update your workouts
  ///////////////////////////////
  const updateWorkout = (formData: object) => {
    setIsUpdate(!isUpdate);

    const payload = {
      data: {
        //@ts-ignore
        title: formData.title,
        //@ts-ignore
        endDate: formData.endDate,
      },
    };

    updateSingleWorkout({ workoutId, data: payload });
  };

  //delete a single workout
  //////////////////////////////
  const deleteWorkout = (id: number) => {
    deleteSingleWorkout(id);
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Workouts
      </Typography>
      <Divider />

      <Typography variant="h5" my={3}>
        Create & Customize your Workouts
      </Typography>

      {!isAdd ? (
        <Button
          variant="contained"
          color="info"
          sx={isUpdate ? { display: "none" } : { my: "1rem", display: "block" }}
          onClick={() => setIsAdd(!isAdd)}
          disabled={isUpdate}
        >
          Add Your Workouts
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="warning"
          sx={{ my: "1rem" }}
          onClick={() => setIsAdd(!isAdd)}
          disabled={isUpdate}
        >
          <CancelIcon /> Cancel
        </Button>
      )}

      {isUpdate && (
        <Button
          variant="outlined"
          color="warning"
          onClick={() => setIsUpdate(!isUpdate)}
        >
          <CancelIcon /> Cancel Update
        </Button>
      )}

      {!isUpdate && isAdd && (
        <WorkoutForm
          liftCreateWorkouts={liftCreateWorkouts}
          updateWorkout={updateWorkout}
          isUpdate={isUpdate}
        />
      )}

      {!isAdd && isUpdate && (
        <WorkoutForm
          liftCreateWorkouts={liftCreateWorkouts}
          updateWorkout={updateWorkout}
          isUpdate={isUpdate}
        />
      )}

      <Divider sx={{ marginY: "2rem" }}>
        <Chip label="Your Workout List" />
      </Divider>

      {allWorkouts?.length ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {allWorkouts &&
            allWorkouts.map((workout: any) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                //@ts-ignore
                key={workout.id}
              >
                <SingleWorkout
                  deleteWorkout={deleteWorkout}
                  workout={workout}
                  getWorkoutId={getWorkoutId}
                />
              </Grid>
            ))}
        </Grid>
      ) : (
        <Typography>Nothing to show. Please create one...</Typography>
      )}
    </Box>
  );
};

export default Workouts;
