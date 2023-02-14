import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { BodyPartsWithExercise } from '../Workouts/Workouts';

interface ExerciseListProps {
  exercise: BodyPartsWithExercise;
}

const ExerciseList = ({ exercise }: ExerciseListProps) => {
  // console.log(exercise);

  return (
    <Box m={3} p={3}>
      <Typography
        boxShadow={2}
        p={3}
        mt={2}
        borderRadius={2}
        sx={{ cursor: 'pointer' }}
        variant="h5"
      >
        {exercise.bodyPart}
      </Typography>

      <Stack>
        {exercise?.exercises?.map((singleExercise) => (
          <Box mt={2} p={1} border={1} key={singleExercise.exerciseId}>
            <Typography>
              {singleExercise.exerciseId}. {singleExercise.name}
            </Typography>
            <Typography>reps: {singleExercise.reps}</Typography>
            <Typography>sets: {singleExercise.sets}</Typography>
            <Typography>time: {singleExercise.time}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseList;
