import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';

interface WorkoutFormProps {
  liftCreateWorkouts: (formData: object) => void;
}

const WorkoutForm = ({ liftCreateWorkouts }: WorkoutFormProps) => {
  const [inputValue, setInputValue] = React.useState({
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
  const formData = () => {
    if (inputValue.title && inputValue.endDate) {
      liftCreateWorkouts(inputValue);
    }

    //empty fields
    setInputValue({
      title: '',
      endDate: '',
    });
  };
  return (
    <Box>
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
        Create Workout
      </Button>
    </Box>
  );
};

export default WorkoutForm;
