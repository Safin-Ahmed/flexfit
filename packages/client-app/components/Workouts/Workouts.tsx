'use client';
import * as React from 'react';
import { Button, Chip, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SingleWorkout from '../SingleWorkout/SingleWorkout';
import { WorkoutData } from './types';
import WorkoutForm from './WorkoutForm';
const shortid = require('shortid');

const Workouts = () => {
  const [workouts, setWorkouts] = React.useState<WorkoutData[]>([]);
  const [isAdd, setIsAdd] = React.useState(false);

  //lift and create workouts
  //////////////////////
  const liftCreateWorkouts = (formData: object) => {
    let updatedIdAndOrder = workouts.length + 1;
    setWorkouts([
      ...workouts,
      {
        id: shortid.generate(),
        order: updatedIdAndOrder,
        //@ts-ignore
        title: formData.title,
        startDate: new Date(),
        //@ts-ignore
        endDate: formData.endDate,
      },
    ]);
    //closing the workout form
    setIsAdd(false);
  };

  //delete a single workout
  //////////////////////////////
  const deleteWorkout = (id: string) => {
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

      <Button
        variant="contained"
        color="info"
        sx={{ my: '1rem' }}
        onClick={() => setIsAdd(!isAdd)}
      >
        Add Your Workouts
      </Button>

      {isAdd && <WorkoutForm liftCreateWorkouts={liftCreateWorkouts} />}

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
              <Grid item xs={12} sm={12} md={12} key={workout.id}>
                <SingleWorkout
                  deleteWorkout={deleteWorkout}
                  workout={workout}
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
