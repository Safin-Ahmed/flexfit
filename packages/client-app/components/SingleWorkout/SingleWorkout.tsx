import { Box, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ExerciseList from '../ExerciseList/ExerciseList';
import { WorkoutData } from '../Workouts/Workouts';

interface SingleWorkoutProps {
  workout: WorkoutData;
  handleBodyPart: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const SingleWorkout = (props: SingleWorkoutProps) => {
  const { workout, handleBodyPart } = props;
  return (
    <Box boxShadow={2} padding={2} borderRadius={1}>
      <Stack
        direction="row"
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Typography variant="h6">{workout.title}</Typography>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
      <Stack direction="row" mt={2} justifyContent="space-between">
        <Typography variant="caption" mr={1}>
          Starts: {workout?.recurringDate?.startDate.toLocaleDateString()}
        </Typography>
        <Typography variant="caption">
          Ends: {workout?.recurringDate?.finishDate.toLocaleDateString()}
        </Typography>
      </Stack>
      <Stack direction={'row'} justifyContent={'start'} gap={2}>
        {workout?.details &&
          workout?.details?.map((exercise) => (
            <ExerciseList
              exercise={exercise}
              handleBodyPart={handleBodyPart}
              key={exercise.id}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default SingleWorkout;
