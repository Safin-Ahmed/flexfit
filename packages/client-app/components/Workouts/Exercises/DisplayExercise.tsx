import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import React from 'react';
import { IndividualExerciseData, RoutineData } from '../types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';

interface DisplayExerciseProps {
  exerciseListValues: [IndividualExerciseData];
  routine: RoutineData;
  isCreate: boolean;
  deleteExercise: (id: string) => void;
  getExerciseId: (id: string) => void;
}

const DisplayExercise = ({
  exerciseListValues,
  routine,
  deleteExercise,
  getExerciseId,
  isCreate,
}: DisplayExerciseProps) => {
  return (
    <Stack>
      {exerciseListValues.map((item, index) => (
        <Box mt={1} key={index}>
          <Divider />
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant="body1">
              {index + 1}. Exercise Name: {item.name}
            </Typography>
            <Stack direction={'row'} justifyContent={'start'}>
              <Button
                color="warning"
                onClick={() => deleteExercise(item.exerciseId)}
              >
                <DeleteForeverIcon />
              </Button>
              <Button
                disabled={isCreate}
                color="secondary"
                onClick={() => getExerciseId(item.exerciseId)}
              >
                <BorderColorIcon />
              </Button>
            </Stack>
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
