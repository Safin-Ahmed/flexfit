import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import React from 'react';
import { IndividualExerciseData } from '../types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@mui/material';

interface DisplayExerciseProps {
  exerciseListValues: [IndividualExerciseData];

  isCreate: boolean;
  deleteExercise: (id: string) => void;
  getExerciseId: (id: string) => void;
  status: (id: string) => void;
}

const DisplayExercise = ({
  exerciseListValues,
  deleteExercise,
  getExerciseId,
  isCreate,
  status,
}: DisplayExerciseProps) => {
  return (
    <Stack>
      {exerciseListValues.map((item, index) => (
        <>
          <Accordion key={item.exerciseId} sx={{ marginY: '1rem' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'start'}
                gap={1}
              >
                <Typography variant="h6" mr={1}>
                  {item.name}{' '}
                </Typography>
                {item.reps && (
                  <Typography mr={1}>
                    {item.sets} * {item.reps}
                  </Typography>
                )}
                {item.isCompleted ? (
                  <Typography
                    border={1}
                    borderRadius={3}
                    px={1}
                    bgcolor={'#658864'}
                    sx={{ color: 'white' }}
                  >
                    Completed
                  </Typography>
                ) : (
                  <Typography
                    border={1}
                    borderRadius={3}
                    px={1}
                    bgcolor={'#F48484'}
                    sx={{ color: 'white' }}
                  >
                    Not Completed
                  </Typography>
                )}
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Box mt={1} key={index}>
                <Stack
                  direction={'row'}
                  justifyContent={'end'}
                  alignItems={'center'}
                >
                  {/* <Typography variant="body1">{item.name}</Typography> */}
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
                <FormControlLabel
                  sx={{ ml: 1 }}
                  control={
                    <Checkbox
                      name="isComplete"
                      //@ts-ignore
                      onChange={() => status(item.exerciseId)}
                    />
                  }
                  label="Completed"
                />
                <Box sx={{ textAlign: 'center' }}>
                  <TextField
                    sx={{ mt: 1 }}
                    variant="filled"
                    value={item.sets}
                    color={'secondary'}
                    label="Sets"
                  />
                  <TextField
                    sx={{ ml: 1, mt: 1 }}
                    variant="filled"
                    value={item.weight}
                    color={'secondary'}
                    label="Weight"
                  />
                  <TextField
                    sx={
                      item.time
                        ? { mt: 1, display: 'none' }
                        : { display: 'block', mt: 1 }
                    }
                    variant="filled"
                    value={item.reps}
                    color={'secondary'}
                    label="Reps : "
                  />
                  <TextField
                    sx={
                      item.reps
                        ? { mt: 1, display: 'none' }
                        : { display: 'block' }
                    }
                    variant="filled"
                    value={item.time}
                    color={'secondary'}
                    label="Time : "
                  />
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </Stack>
  );
};

export default DisplayExercise;
