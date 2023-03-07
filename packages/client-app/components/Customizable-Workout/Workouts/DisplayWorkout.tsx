import { Box, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { WorkoutData } from '../Types/types';
import RoutineList from '../Routines/RoutineList';

interface SingleWorkoutProps {
  workout: WorkoutData;
  deleteWorkout: (id: number) => void;
  getWorkoutId: (id: number) => void;
}

const DisplayWorkout = (props: SingleWorkoutProps) => {
  const { workout, deleteWorkout, getWorkoutId } = props;

  return (
    <Box boxShadow={2} padding={2} borderRadius={1} bgcolor={'white'}>
      <Stack direction="row" mb={1} justifyContent="end" alignItems={'center'}>
        <Typography
          variant="caption"
          border={1}
          borderRadius={3}
          px={1}
          bgcolor={'#698269'}
          sx={{ color: 'white' }}
        >
          {/* @ts-ignore */}
          Ends: {workout?.attributes?.endDate}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems={'center'}
        justifyContent="space-between"
      >
        {/* @ts-ignore */}
        <Typography variant="h6">{workout?.attributes?.title}</Typography>
        <Stack
          direction="row"
          alignItems={'center'}
          justifyContent="center"
          gap={1}
        >
          <IconButton
            aria-label="delete"
            size="large"
            //@ts-ignore
            onClick={() => deleteWorkout(workout?.id)}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => {
              //@ts-ignore
              getWorkoutId(workout?.id);
              window.scrollTo(0, 0);
            }}
          >
            <CreateIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Stack>

      <Box my={3}>
        {/* @ts-ignore */}
        <RoutineList workoutId={workout?.id} />
      </Box>
    </Box>
  );
};

export default DisplayWorkout;
