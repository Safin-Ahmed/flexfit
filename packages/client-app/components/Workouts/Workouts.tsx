'use client';
import * as React from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  TextField,
  ToggleButton,
  Typography,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import SingleWorkout from '../SingleWorkout/SingleWorkout';

function randomId(): string {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}

export interface WorkoutData {
  id: string;
  order: number;
  title: string;
  recurringDate: RecurringData;
  details: ExerciseData[];
}
[];
type RecurringData = { startDate: Date; finishDate: Date };
export interface ExerciseData {
  id: string;
  partName: string;
  exercises: IndividualExercise[];
}
[];

interface IndividualExercise {
  name: string;
  exerciseId: string;
  workoutId: string;
  sets: string;
  reps: string;
  time: string;
}
[];

const Workouts = () => {
  const [createWorkouts, setCreateWorkouts] = React.useState<WorkoutData[]>([]);
  const [createBodyParts, setBodyParts] = React.useState<ExerciseData[]>([]);
  const [createExercises, setCreateExercises] = React.useState<
    IndividualExercise[]
  >([]);

  const [inputValue, setInputValue] = React.useState('');
  const [toggle, setToggle] = React.useState<boolean>(false);

  //Individual exercise data
  const handleSingleExercise = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    //@ts-ignore
    let value = e.target.innerText;
    setCreateExercises([
      ...createExercises,
      {
        name: value,
        exerciseId: randomId(),
        reps: 'Demo',
        sets: 'Demo',
        time: 'Demo',
        workoutId: randomId(),
      },
    ]);
    console.log({ createExercises });
  };

  //Body part data
  const handleBodyPart = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    // @ts-ignore
    let value = e.target.value;
    setToggle(!toggle);

    setBodyParts([
      ...createBodyParts,
      { id: randomId(), partName: value, exercises: [...createExercises] },
    ]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //create workouts
  const handleClick = () => {
    let updatedIdAndOrder = createWorkouts.length + 1;
    setCreateWorkouts([
      ...createWorkouts,
      {
        id: randomId(),
        order: updatedIdAndOrder,
        title: inputValue,
        recurringDate: {
          finishDate: new Date(),
          startDate: new Date(),
        },
        details: [...createBodyParts],
      },
    ]);
    setInputValue('');
    setBodyParts([]);

    console.log(createWorkouts);
  };

  //delete a particular workout
  const deleteWorkout = (id: string) => {
    setCreateWorkouts(createWorkouts.filter((workout) => workout.id !== id));
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
        <Stack direction={'row'} justifyContent={'start'} gap={2} mt={2}>
          <ToggleButton
            value={'legs'}
            sx={
              toggle === true
                ? { backgroundColor: '#5C6BC0' }
                : { cursor: 'pointer' }
            }
            onChange={handleBodyPart}
          >
            Legs
          </ToggleButton>
          <ToggleButton value={'chest'} onChange={handleBodyPart}>
            Chest
          </ToggleButton>
          <ToggleButton value={'biceps'} onChange={handleBodyPart}>
            Biceps
          </ToggleButton>
        </Stack>

        {toggle === true ? (
          <Box>
            <Stack direction={'row'} justifyContent={'start'} gap={2}>
              <Typography
                boxShadow={2}
                p={3}
                mt={2}
                borderRadius={2}
                bgcolor={'skyblue'}
                sx={{ cursor: 'pointer' }}
                onClick={handleSingleExercise}
              >
                Pushups
              </Typography>
              <Typography
                boxShadow={2}
                p={3}
                mt={2}
                bgcolor={'skyblue'}
                borderRadius={2}
                sx={{ cursor: 'pointer' }}
                onClick={handleSingleExercise}
              >
                chest press
              </Typography>
            </Stack>
          </Box>
        ) : (
          ''
        )}

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
