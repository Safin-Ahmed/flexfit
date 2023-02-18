'use client';
import * as React from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import SingleWorkout from '../SingleWorkout/SingleWorkout';
const shortid = require('shortid');

export interface WorkoutData {
  id: string;
  order: number;
  title: string;
  startDate: Date;
  finishDate: string;
}
[];

const Workouts = () => {
  const [workouts, setWorkouts] = React.useState<WorkoutData[]>([]);

  const [inputValue, setInputValue] = React.useState('');
  const [inputDate, setInputDate] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(inputDate);
  };

  //create workouts
  //////////////////////
  const createWorkouts = () => {
    let updatedIdAndOrder = workouts.length + 1;
    setWorkouts([
      ...workouts,
      {
        id: shortid.generate(),
        order: updatedIdAndOrder,
        title: inputValue,
        startDate: new Date(),
        finishDate: inputDate,
      },
    ]);

    setInputValue('');

    console.log({ workouts });
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

      <Box>
        <Typography variant="h5" my={3}>
          Create & Customize your Workouts
        </Typography>

        <TextField
          label="Title"
          name="title"
          variant="filled"
          color="primary"
          focused
          value={inputValue}
          onChange={handleChange}
        />
        <br />
        <br />
        {/* <input type={'date'} value={inputDate} onChange={handleChangeDate} /> */}

        <Button
          variant="contained"
          sx={{ display: 'block', marginTop: '.5rem' }}
          onClick={createWorkouts}
        >
          Create Workout
        </Button>
      </Box>

      <Divider sx={{ marginY: '2rem' }}>
        <Chip label="Your Workout List" />
      </Divider>

      <Stack
        direction="row"
        mt={4}
        justifyContent="start"
        alignItems="center"
        spacing={3}
      >
        {workouts &&
          workouts.map((workout) => (
            <SingleWorkout
              deleteWorkout={deleteWorkout}
              workout={workout}
              key={workout.id}
            />
          ))}
      </Stack>
    </Container>
  );
};

export default Workouts;
