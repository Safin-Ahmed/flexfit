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

export interface WorkoutData {
  attributes: {
    id: number;
    order: number;
    title: string;
    recurringDate: RecurringData;
    exercises: ExerciseData[];
  };
}
[];
type RecurringData = { startDate: Date; finishDate: Date };
export interface ExerciseData {
  id: number;
  partName: string;
}
[];

const Workouts = () => {
  const [createWorkouts, setCreateWorkouts] = React.useState<WorkoutData[]>([]);
  const [createExercise, setCreateExercise] = React.useState<ExerciseData[]>(
    []
  );

  const [inputValue, setInputValue] = React.useState('');

  const handleBodyPart = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    let exerciseId = createExercise.length + 1;
    // @ts-ignore
    let value = e.target.innerText;
    setCreateExercise([...createExercise, { id: exerciseId, partName: value }]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    let updatedIdAndOrder = createWorkouts.length + 1;
    setCreateWorkouts([
      ...createWorkouts,
      {
        attributes: {
          id: updatedIdAndOrder,
          order: updatedIdAndOrder,
          title: inputValue,
          recurringDate: {
            finishDate: new Date(),
            startDate: new Date(),
          },
          exercises: [...createExercise],
        },
      },
    ]);
    setInputValue('');
    setCreateExercise([]);
    console.log(createWorkouts);
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
        <Stack direction={'row'} justifyContent={'start'} gap={2}>
          <Typography
            boxShadow={2}
            p={3}
            mt={2}
            borderRadius={2}
            sx={{ cursor: 'pointer' }}
            onClick={handleBodyPart}
          >
            Chest
          </Typography>
          <Typography
            boxShadow={2}
            p={3}
            mt={2}
            borderRadius={2}
            sx={{ cursor: 'pointer' }}
            onClick={handleBodyPart}
          >
            Legs
          </Typography>
        </Stack>

        <Button
          variant="contained"
          sx={{ display: 'block', marginTop: '.5rem' }}
          onClick={handleClick}
        >
          Create
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
        {createWorkouts &&
          createWorkouts.map((workout) => (
            <SingleWorkout
              workout={workout}
              handleBodyPart={handleBodyPart}
              key={workout.attributes.id}
            />
          ))}
      </Stack>
    </Container>
  );
};

export default Workouts;
