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

// interface Workout {
//   id: number;
//   title: string;
//   bodyParts: BodyPartsType;
//   //   exerciseData: {}[];
//   recurringData: null | RecurringInterface;
// }

// interface RecurringInterface {
//   startData: Date;
//   finishData: Date;
// }

// type BodyPartsType = 'chest' | 'legs' | 'back';
const exercise = [
  {
    id: '1',
    order: '1',
    workoutId: '1',
    title: 'Chest Workout',
    chest: [],
  },
  {
    id: '2',
    order: '2',
    title: 'Second Workout',
    recurringDate: {
      startDate: new Date(),
      finishDate: new Date(),
    },
    exercises: [
      {
        id: '2',
        order: '2',
        workoutId: '2',
        title: 'Chest Workout',
        chest: [],
      },
    ],
  },
];

interface WorkoutData {
  id: number;
  order: number;
  title: string;
  recurringDate: RecurringData;
}
[];
type RecurringData = { startDate: Date; finishDate: Date };

const workouts: WorkoutData[] = [
  {
    id: 1,
    order: 1,
    title: 'First Workout',
    recurringDate: {
      finishDate: new Date(),
      startDate: new Date(),
    },
  },
];

const Workouts = () => {
  const [createWorkouts, setCreateWorkouts] = React.useState<WorkoutData[]>([]);

  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    let updatedIdAndOrder = createWorkouts.length + 1;
    setCreateWorkouts([
      ...createWorkouts,
      {
        id: updatedIdAndOrder,
        order: updatedIdAndOrder,
        title: inputValue,
        recurringDate: {
          finishDate: new Date(),
          startDate: new Date(),
        },
      },
    ]);
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
            <Box boxShadow={2} padding={2} borderRadius={1} key={workout.id}>
              <Typography variant="h6">{workout.title}</Typography>
              <Stack direction="row" mt={2} justifyContent="space-between">
                <Typography variant="caption" mr={1}>
                  Starts:{' '}
                  {workout?.recurringDate?.startDate.toLocaleDateString()}
                </Typography>
                <Typography variant="caption">
                  Ends:{' '}
                  {workout?.recurringDate?.finishDate.toLocaleDateString()}
                </Typography>
              </Stack>
            </Box>
          ))}
      </Stack>
    </Container>
  );
};

export default Workouts;
