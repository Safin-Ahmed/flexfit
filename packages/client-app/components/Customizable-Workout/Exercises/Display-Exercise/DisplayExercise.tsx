import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import React from 'react';
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
import ReactPlayer from 'react-player/youtube';
import AlertDialog from '@components/Shared/Alert';
import { StyledBox } from './Styles';

interface DisplayExerciseProps {
  userExercise: any;
  isCreate: boolean;
  deleteExercise: (id: number) => void;
  getExercise: (data: object) => void;
  status: (id: number) => void;
}

const DisplayExercise = ({
  userExercise,
  deleteExercise,
  getExercise,
  isCreate,
  status,
}: DisplayExerciseProps) => {
  const {
    attributes: {
      exercise: {
        data: {
          attributes: { video_url },
        },
      },
    },
  } = userExercise;
  return (
    <StyledBox>
      <Accordion sx={{ marginY: '1rem' }}>
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
              {userExercise?.attributes?.exercise?.data?.attributes?.title}{' '}
            </Typography>
            {userExercise?.attributes?.reps && (
              <Typography mr={1}>
                {userExercise?.attributes?.sets} *{' '}
                {userExercise?.attributes?.reps}
              </Typography>
            )}
            {userExercise?.attributes?.isCompleted ? (
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
          <Box mt={1}>
            <Stack
              direction={'row'}
              justifyContent={'end'}
              alignItems={'center'}
            >
              <Stack direction={'row'} justifyContent={'start'}>
                <AlertDialog deleteFunc={deleteExercise} data={userExercise} />
                <Button
                  disabled={isCreate}
                  color="secondary"
                  onClick={() => getExercise(userExercise)}
                >
                  <BorderColorIcon />
                </Button>
              </Stack>
            </Stack>

            {/* Is complete button=============  */}
            <FormControlLabel
              sx={{ ml: 1 }}
              control={
                <Checkbox
                  name="isComplete"
                  //@ts-ignore
                  onChange={() => status(userExercise?.id)}
                />
              }
              label="Completed"
            />
            {/* Is complete button=============  */}

            {/* Render a YouTube video player */}
            <Box
              sx={{
                width: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}
              border={1}
              p={1}
            >
              <ReactPlayer
                url={
                  video_url
                    ? video_url
                    : 'https://www.youtube.com/watch?v=lwKeQoXk4mk'
                }
                controls={true}
                width={'100%'}
              />
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <TextField
                sx={{ mt: 1 }}
                variant="filled"
                value={userExercise?.attributes?.sets}
                color={'secondary'}
                label="Sets"
              />
              <TextField
                sx={{ ml: 1, mt: 1 }}
                variant="filled"
                value={userExercise?.attributes?.weight}
                color={'secondary'}
                label="Weight"
              />
              <TextField
                sx={
                  userExercise?.attributes?.time
                    ? { mt: 1, display: 'none' }
                    : { display: 'block', mt: 1 }
                }
                variant="filled"
                value={userExercise?.attributes?.reps}
                color={'secondary'}
                label="Reps : "
              />
              <TextField
                sx={
                  userExercise?.attributes?.reps
                    ? { mt: 1, display: 'none' }
                    : { mt: 1, display: 'block' }
                }
                variant="filled"
                value={userExercise?.attributes?.time}
                color={'secondary'}
                label="Time : "
              />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </StyledBox>
  );
};

export default DisplayExercise;
