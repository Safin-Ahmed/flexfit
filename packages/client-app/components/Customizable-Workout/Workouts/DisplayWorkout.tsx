import { Box, IconButton, Stack, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { WorkoutData } from '../Types/types';
import RoutineList from '../Routines/RoutineList';
import AlertDialog from '@components/Shared/Alert';

interface SingleWorkoutProps {
  workout: WorkoutData;
  deleteWorkout: (id: number) => void;
  getWorkoutData: (data: any) => void;
}

const DisplayWorkout = (props: SingleWorkoutProps) => {
  const { workout, deleteWorkout, getWorkoutData } = props;

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
          <AlertDialog deleteWorkout={deleteWorkout} workout={workout} />

          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => {
              getWorkoutData(workout);
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
