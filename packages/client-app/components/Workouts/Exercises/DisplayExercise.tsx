import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import React from 'react';
import { IndividualExerciseData, RoutineData } from '../types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

interface DisplayExerciseProps {
  exerciseListValues: [IndividualExerciseData];
  routine: RoutineData;
  deleteExercise: (id: string) => void;
}

const DisplayExercise = ({
  exerciseListValues,
  routine,
  deleteExercise,
}: DisplayExerciseProps) => {
  return (
    <Stack>
      {exerciseListValues.map((item, index) => (
        <Box mt={1} key={index}>
          <Divider />
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant="body1">
              {index + 1}. Exercise Name: {item.name}
            </Typography>
            <Button
              color="warning"
              onClick={() => deleteExercise(item.exerciseId)}
            >
              <DeleteForeverIcon />
            </Button>
          </Stack>
          <Typography variant="body2"> sets: {item.sets} </Typography>
          <Typography variant="body2"> reps: {item.reps} </Typography>
        </Box>
      ))}
      <Divider />
    </Stack>
  );
};

export default DisplayExercise;
