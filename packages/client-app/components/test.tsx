'use client';

import { Box, Typography } from '@mui/material';
import { useAppSelector } from 'hooks/reduxHooks';
import BodyPartsList from './Workouts/BodyParts/BodyPartsList';
import ExerciseList from './Workouts/Exercises/ExerciseList';

const Test: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return (
    <Box>
      {isAuthenticated ? (
        <Typography variant="h3">Everything is Fine!</Typography>
      ) : (
        <Typography variant="h3">Everything is not Fine!</Typography>
      )}
      <Box>
        <BodyPartsList />
        {/* <div>============</div>
        <h3>Exercise List</h3> */}

        {/* <ExerciseList /> */}
      </Box>
    </Box>
  );
};

export default Test;
