'use client';

import { Box, Typography } from '@mui/material';
import { useAppSelector } from 'hooks/reduxHooks';
import RoutineList from './Workouts/Routines/RoutineList';

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
        <RoutineList />
      </Box>
    </Box>
  );
};

export default Test;
