import React from 'react';
import { RoutineData } from '../types';
const shortid = require('shortid');
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box/Box';
import { Stack } from '@mui/system';

const INIT_DATA = {
  name: '',
  exerciseId: '',
  routineId: '',
  sets: '',
  reps: '',
  time: '',
  weight: '',
  isCompleted: false,
};

interface ExerciseFormProps {
  formData: (data: object, formCollapse: boolean) => void;
  routine: RoutineData;
  isUpdate: boolean;
  isCreate: boolean;
  UpdateExercise: (data: object) => void;
  // isCompleted: boolean;
}

const ExerciseForm = ({
  formData,
  routine,
  isUpdate,
  isCreate,
  UpdateExercise,
}: // isCompleted,
ExerciseFormProps) => {
  const [formValues, setFormValues] = React.useState({ ...INIT_DATA });
  const [formIsOpen, setFormIsOpen] = React.useState(true);

  const handleChange = (
    //@ts-ignore
    e: React.ChangeEvent<HTMLInputElement> | React.SelectChangeEvent<string>
  ) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      exerciseId: shortid.generate(),
      routineId: routine.id,
      // isCompleted,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormIsOpen(!formIsOpen);
    console.log({ formValues });

    if (
      formValues.name ||
      formValues.sets ||
      formValues.weight ||
      formValues.reps ||
      formValues.time
    ) {
      formData(formValues, formIsOpen);
      if (isUpdate) {
        UpdateExercise(formValues);
      }
    }
    setFormValues(INIT_DATA);
  };

  return (
    <Box>
      <FormControl component={'form'} onSubmit={handleSubmit}>
        <Divider sx={{ my: '1rem' }} />

        <FormControl sx={{ my: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Select Exercise</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            name="name"
            label="Select one"
            value={formValues.name}
            onChange={handleChange}
            autoWidth={true}
          >
            <MenuItem value={'Chest'}>Chest</MenuItem>
            <MenuItem value={'Legs'}>Legs</MenuItem>
            <MenuItem value={'Shoulders'}>Shoulders</MenuItem>
          </Select>
        </FormControl>

        <br />

        <TextField
          label="Sets"
          variant="filled"
          value={formValues.sets}
          onChange={handleChange}
          name="sets"
          sx={{ mt: 1 }}
        />
        <br />
        <br />

        <TextField
          label="Weight"
          variant="filled"
          value={formValues.weight}
          onChange={handleChange}
          name="weight"
          sx={{ mt: 1 }}
        />
        <br />
        <Typography>Please fill any one of the following:</Typography>
        <Stack direction={'row'} justifyContent={'start'} gap={1}>
          <TextField
            label="Reps"
            variant="filled"
            value={formValues.reps}
            onChange={handleChange}
            name="reps"
            sx={
              formValues?.time?.length
                ? { display: 'none' }
                : { mt: 1, display: 'block' }
            }
          />
          <TextField
            label="Time"
            variant="filled"
            value={formValues.time}
            onChange={handleChange}
            name="time"
            sx={
              formValues?.reps?.length
                ? { display: 'none' }
                : { mt: 1, display: 'block' }
            }
          />
        </Stack>
        {/* <FormControlLabel
          control={
            <Checkbox
              value={formValues.isComplete}
              onChange={handleChange}
              name="isComplete"
            />
          }
          label="Completed"
        /> */}

        <br />
        <br />

        <Stack direction={'row'} justifyContent={'space-between'}>
          {isUpdate ? (
            <Button variant="contained" color="success" type="submit">
              Update
            </Button>
          ) : (
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          )}
        </Stack>
      </FormControl>
    </Box>
  );
};

export default ExerciseForm;
