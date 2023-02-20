'use client';
//@ts-ignore
import * as React from 'react';
import { Button, Chip, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SingleWorkout from '../SingleWorkout/SingleWorkout';
import WorkoutForm from './WorkoutForm';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAddWorkoutMutation } from '@redux/features/api/workouts-api';

const Workouts = () => {
  const [addWorkout, { isError, isLoading, isSuccess }] =
    useAddWorkoutMutation();
  console.log(isError);
  // console.log(isSuccess);

  const [workouts, setWorkouts] = React.useState([]);
  const [isAdd, setIsAdd] = React.useState(false);

  // For Update States
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [workoutId, setWorkoutId] = React.useState('');

  //lift and create workouts
  //////////////////////
  const liftCreateWorkouts = (formData: object) => {
    //@ts-ignore
    setWorkouts([...workouts, formData]);
    //closing the workout form
    setIsAdd(false);
    const payload = {
      data: {
        //@ts-ignore
        title: formData.title,
        //@ts-ignore
        endDate: formData.endDate,
        //@ts-ignore
        startDate: formData.startDate,
      },
    };
    addWorkout(payload);
    // console.log();
  };

  // get workout id
  const getWorkoutId = (id: string) => {
    setWorkoutId(id);
    setIsUpdate(!isUpdate);
  };

  //edit or update your workouts
  ///////////////////////////////
  const updateWorkout = (formData: object) => {
    setIsUpdate(!isUpdate);
    //@ts-ignore
    const updatedWorkout = workouts.map((workout) => {
      //@ts-ignore
      if (workout.id === workoutId) {
        //@ts-ignore
        return {
          //@ts-ignore
          ...workout,
          //@ts-ignore
          title: !formData.title ? workout.title : formData.title,
          //@ts-ignore
          endDate: !formData.endDate ? workout.endDate : formData.endDate,
        };
      }
      return workout;
    });
    //@ts-ignore
    setWorkouts(updatedWorkout);
  };

  //delete a single workout
  //////////////////////////////
  const deleteWorkout = (id: string) => {
    //@ts-ignore
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(updatedWorkouts);
  };

  return (
    <Container>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Workouts
      </Typography>
      <Divider variant="middle" />

      <Typography variant="h5" my={3}>
        Create & Customize your Workouts
      </Typography>

      {!isAdd ? (
        <Button
          variant="contained"
          color="info"
          sx={isUpdate ? { display: 'none' } : { my: '1rem', display: 'block' }}
          onClick={() => setIsAdd(!isAdd)}
          disabled={isUpdate}
        >
          Add Your Workouts
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="warning"
          sx={{ my: '1rem' }}
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

      <Divider sx={{ marginY: '2rem' }}>
        <Chip label="Your Workout List" />
      </Divider>

      {workouts.length ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {workouts &&
            workouts.map((workout) => (
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
    </Container>
  );
};

export default Workouts;
