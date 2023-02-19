import { Box, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RoutineList from '@components/Workouts/Routines/RoutineList';
import { WorkoutData } from '@components/Workouts/types';

interface SingleWorkoutProps {
  workout: WorkoutData;
  deleteWorkout: (id: string) => void;
}

const SingleWorkout = (props: SingleWorkoutProps) => {
  const { workout, deleteWorkout } = props;
  return (
    <Box boxShadow={2} padding={2} borderRadius={1}>
      <Stack
        direction="row"
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Typography variant="h6">{workout.title}</Typography>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => deleteWorkout(workout.id)}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
      <Stack direction="row" mt={2} justifyContent="space-between">
        <Typography variant="caption" mr={1}>
          Starts: {workout?.startDate.toLocaleDateString()}
        </Typography>
        <Typography variant="caption">Ends: {workout?.endDate}</Typography>
      </Stack>

      <Box my={3}>
        <RoutineList />
      </Box>
    </Box>
  );
};

export default SingleWorkout;
