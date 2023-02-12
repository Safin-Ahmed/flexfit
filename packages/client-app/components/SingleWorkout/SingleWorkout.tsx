import { Box, Stack, Typography } from '@mui/material';
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
      <Typography variant="h6">{workout.attributes.title}</Typography>
      <Stack direction="row" mt={2} justifyContent="space-between">
        <Typography variant="caption" mr={1}>
          Starts:{' '}
          {workout?.attributes.recurringDate?.startDate.toLocaleDateString()}
        </Typography>
        <Typography variant="caption">
          Ends:{' '}
          {workout?.attributes.recurringDate?.finishDate.toLocaleDateString()}
        </Typography>
      </Stack>
      <Stack direction={'row'} justifyContent={'start'} gap={2}>
        {workout?.attributes?.exercises &&
          workout?.attributes?.exercises?.map((exercise) => (
            // <Typography
            //   boxShadow={2}
            //   p={3}
            //   mt={2}
            //   borderRadius={2}
            //   onClick={handleBodyPart}
            //   sx={{ cursor: 'pointer' }}
            //   key={exercise.id}
            // >
            //   {exercise.partName}
            // </Typography>
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
