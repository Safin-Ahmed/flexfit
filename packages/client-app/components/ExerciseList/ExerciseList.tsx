import { Typography } from '@mui/material';
import React from 'react';
import { ExerciseData } from '../Workouts/Workouts';

interface ExerciseListProps {
  exercise: ExerciseData;
  handleBodyPart: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const ExerciseList = ({ handleBodyPart, exercise }: ExerciseListProps) => {
  return (
    <Typography
      boxShadow={2}
      p={3}
      mt={2}
      borderRadius={2}
      onClick={handleBodyPart}
      sx={{ cursor: 'pointer' }}
    >
      {exercise.partName}
    </Typography>
  );
};

export default ExerciseList;
