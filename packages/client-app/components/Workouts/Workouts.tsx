'use client';
import * as React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

interface WorkoutData {
  attributes: {
    id: number;
    order: number;
    title: string;
    recurringDate: RecurringData;
    exercises: ExerciseData[];
    // exercise_datum: {
    //   [key: string]: ExerciseDatum;
    // };
  };
}
[];
type RecurringData = { startDate: Date; finishDate: Date };
interface ExerciseData {
  id: number;
  partName: string[];
}
[];

const Workouts = () => {
  const [createWorkouts, setCreateWorkouts] = React.useState<WorkoutData[]>([]);

  const [inputValue, setInputValue] = React.useState('');
  const [bodyParts, setBodyParts] = React.useState<string[]>([]);
  // const [bodyPartValue, setBodyPartValue] = React.useState('');

  const handleBodyPart = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    // @ts-ignore
    let value = e.target.innerText;
    setBodyParts([...bodyParts, value]);
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
          exercises: [
            {
              id: updatedIdAndOrder,
              partName: bodyParts,
            },
          ],
        },
      },
    ]);
    setInputValue('');
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
            <Box
              boxShadow={2}
              padding={2}
              borderRadius={1}
              key={workout.attributes.id}
            >
              <Typography variant="h6">{workout.attributes.title}</Typography>
              <Stack direction="row" mt={2} justifyContent="space-between">
                <Typography variant="caption" mr={1}>
                  Starts:{' '}
                  {workout?.attributes.recurringDate?.startDate.toLocaleDateString()}
                </Typography>
                <Typography variant="caption">
                  Ends:{' '}
                  {workout?.attributes.recurringDate?.finishDate.toLocaleDateString()}
                </Typography>
              </Stack>
              <Stack direction={'row'} justifyContent={'start'} gap={2}>
                {workout?.attributes?.exercises &&
                  workout?.attributes?.exercises[0].partName.map(
                    (name, index) => (
                      <Typography
                        boxShadow={2}
                        p={3}
                        mt={2}
                        borderRadius={2}
                        onClick={handleBodyPart}
                        sx={{ cursor: 'pointer' }}
                        key={index}
                      >
                        {' '}
                        {name}{' '}
                      </Typography>
                    )
                  )}
              </Stack>
            </Box>
          ))}
      </Stack>
    </Container>
  );
};

export default Workouts;
