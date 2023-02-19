import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { WorkoutData } from './types';
const shortid = require('shortid');

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
    id: shortid.generate(),
    startDate: new Date(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //lift form value
  const formData = () => {
    if (inputValue.title || inputValue.endDate) {
      liftCreateWorkouts(inputValue);
      if (isUpdate) {
        updateWorkout(inputValue);
      }
    }

    //empty fields
    setInputValue({
      title: '',
      endDate: '',
      id: '',
      startDate: new Date(),
    });
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

      <Button
        variant="contained"
        sx={{ display: 'block', marginTop: '.5rem' }}
        onClick={formData}
      >
        {isUpdate ? 'Update Workout' : 'Create Workout'}
      </Button>
    </Box>
  );
};

export default WorkoutForm;
