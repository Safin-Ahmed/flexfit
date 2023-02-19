import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import React from 'react';
import { IndividualExerciseData, RoutineData } from '../types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails } from '@mui/material';

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
        <>
          <Accordion key={index} sx={{ marginY: '1rem' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.name} </Typography>
              {item.reps && (
                <Typography>
                  {item.sets} * {item.reps} =
                  {
                    //@ts-ignore
                    parseInt(item.sets * item.reps)
                  }
                </Typography>
              )}
            </AccordionSummary>
            <AccordionDetails>
              <Box mt={1} key={index}>
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
                <Typography variant="body2">
                  {item.reps ? `reps: ${item.reps}` : `time: ${item.time}`}{' '}
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </Stack>
  );
};

export default DisplayExercise;
