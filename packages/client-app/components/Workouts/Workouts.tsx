'use client';
import * as React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  recurringDate: null | RecurringData;
  details: BodyPartsWithExercise[];
}
[];
type RecurringData = { startDate: Date; finishDate: Date };
export interface BodyPartsWithExercise {
  id: string;
  bodyPart: string;
  exercises: IndividualExercise[];
}

interface IndividualExercise {
  name: string;
  exerciseId: string;
  workoutId: string;
  sets: string;
  reps: string;
  time: string;
}

const Workouts = () => {
  const [workouts, setWorkouts] = React.useState<WorkoutData[]>([]);
  const [bodyParts, setBodyParts] = React.useState<BodyPartsWithExercise[]>([]);
  const [exercises, setExercises] = React.useState<IndividualExercise[]>([]);

  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //Create exercise data
  ///////////////////////////
  const createSingleExercise = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    //@ts-ignore
    let value = e.target.innerText;
    setExercises([
      ...exercises,
      {
        name: value,
        exerciseId: randomId(),
        reps: 'Demo',
        sets: 'Demo',
        time: 'Demo',
        workoutId: randomId(),
      },
    ]);
    console.log({ exercises });
  };

  //Create Body part data
  //////////////////////////
  const createBodyPartsWithExercise = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    // @ts-ignore
    let value = e.target.innerText;

    if (inputValue.length) {
      setBodyParts([
        ...bodyParts,
        {
          id: randomId(),
          bodyPart: value,
          exercises: [...exercises],
        },
      ]);
    }
  };

  //create workouts
  //////////////////////
  const createWorkouts = () => {
    let updatedIdAndOrder = workouts.length + 1;

    //simple validation
    if (inputValue.length && bodyParts.length) {
      setWorkouts([
        ...workouts,
        {
          id: randomId(),
          order: updatedIdAndOrder,
          title: inputValue,
          recurringDate: {
            finishDate: new Date(),
            startDate: new Date(),
          },
          //filter only the unique bodyParts object by reduce, set, map
          details: [
            ...bodyParts
              .reduce((map, obj) => map.set(obj.bodyPart, obj), new Map())
              .values(),
          ],
        },
      ]);
    }

    setInputValue('');
    setBodyParts([]);
    setExercises([]);

    console.log({ workouts });
  };

  //delete a single workout
  //////////////////////////////
  const deleteWorkout = (id: string) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
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

        {/* Inputs of body parts and exercise starts============================= */}
        <Box my={3}>
          <Accordion>
            <AccordionSummary
              onClick={createBodyPartsWithExercise}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Chest</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction={'row'} justifyContent={'start'} gap={2}>
                <Typography
                  boxShadow={2}
                  p={3}
                  mt={2}
                  borderRadius={2}
                  bgcolor={'skyblue'}
                  sx={{ cursor: 'pointer' }}
                  onClick={(e) => createSingleExercise}
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
                  onClick={createSingleExercise}
                >
                  chest press
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onClick={createBodyPartsWithExercise}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Legs</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction={'row'} justifyContent={'start'} gap={2}>
                {/* <Typography
                  boxShadow={2}
                  p={3}
                  mt={2}
                  borderRadius={2}
                  bgcolor={'skyblue'}
                  sx={{ cursor: 'pointer' }}
                  onClick={createSingleExercise}
                >
                  squats
                </Typography>
                <Typography
                  boxShadow={2}
                  p={3}
                  mt={2}
                  bgcolor={'skyblue'}
                  borderRadius={2}
                  sx={{ cursor: 'pointer' }}
                  onClick={createSingleExercise}
                >
                  hip hinges
                </Typography> */}
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Box>
        {/* Inputs of body parts and exercise ends=============================== */}

        <Button
          variant="contained"
          sx={{ display: 'block', marginTop: '.5rem' }}
          onClick={createWorkouts}
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
