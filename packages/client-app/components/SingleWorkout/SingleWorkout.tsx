import { Box, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RoutineList from '@components/Workouts/Routines/RoutineList';
import { WorkoutData } from '@components/Workouts/types';
import CreateIcon from '@mui/icons-material/Create';

interface SingleWorkoutProps {
  workout: WorkoutData;
  deleteWorkout: (id: number) => void;
  getWorkoutId: (id: number) => void;
}

const SingleWorkout = (props: SingleWorkoutProps) => {
  const { workout, deleteWorkout, getWorkoutId } = props;

  return (
    <Box boxShadow={2} padding={2} borderRadius={1}>
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
            //@ts-ignore
            onClick={() => getWorkoutId(workout?.id)}
          >
            <CreateIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Stack>
      <Stack direction="row" mt={2} justifyContent="space-between">
        <Typography variant="caption" mr={1}>
          {/* @ts-ignore */}
          Starts: {workout?.attributes?.startDate}
        </Typography>

        <Typography variant="caption">
          {/* @ts-ignore */}
          Ends: {workout?.attributes?.endDate}
        </Typography>
      </Stack>

      <Box my={3}>
        <RoutineList />
      </Box>
    </Box>
  );
};

export default SingleWorkout;
