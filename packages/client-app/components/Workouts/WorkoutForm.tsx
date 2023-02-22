import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { WorkoutData } from './types';

interface WorkoutFormProps {
  liftCreateWorkouts: (formData: object) => void;
  updateWorkout: (formData: object) => void;
  isUpdate: boolean;
}

const WorkoutForm = ({
  liftCreateWorkouts,
  updateWorkout,
  isUpdate,
}: WorkoutFormProps) => {
  const [inputValue, setInputValue] = React.useState<WorkoutData>({
    title: '',
    endDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //lift form value
  const createWorkout = () => {
    if (inputValue.title || inputValue.endDate) {
      liftCreateWorkouts(inputValue);
    }
  };

  const updateWorkoutData = () => {
    if (isUpdate) {
      updateWorkout(inputValue);
    }
  };
  return (
    <Box my={2}>
      <TextField
        label="Title"
        name="title"
        variant="filled"
        color="primary"
        focused
        value={inputValue.title}
        onChange={handleChange}
      />
      <br />
      <br />
      <TextField
        label="Date"
        name="endDate"
        variant="filled"
        color="primary"
        type={'date'}
        focused
        value={inputValue.endDate}
        onChange={handleChange}
      />

      {isUpdate ? (
        <Button
          variant="contained"
          sx={{ display: 'block', marginTop: '.5rem' }}
          onClick={updateWorkoutData}
        >
          Update
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{ display: 'block', marginTop: '.5rem' }}
          onClick={createWorkout}
        >
          Create
        </Button>
      )}
    </Box>
  );
};

export default WorkoutForm;
