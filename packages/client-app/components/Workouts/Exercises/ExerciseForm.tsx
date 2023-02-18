import React from 'react';
import { RoutineData } from '../types';
const shortid = require('shortid');
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button, TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box/Box';

const INIT_DATA = {
  name: '',
  exerciseId: '',
  routineId: '',
  sets: '',
  reps: '',
  time: '',
};

interface ExerciseFormProps {
  formData: (data: object, formCollapse: boolean) => void;
  routine: RoutineData;
  isUpdate: boolean;
  //@ts-ignore
  dataHolder: (e: SelectChangeEvent<string>) => void;
}

const ExerciseForm = ({
  formData,
  routine,
  isUpdate,
  dataHolder,
}: ExerciseFormProps) => {
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
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormIsOpen(!formIsOpen);
    if (formValues.name && formValues.sets) {
      formData(formValues, formIsOpen);
    }
    setFormValues(INIT_DATA);
  };

  return (
    <Box>
      <FormControl component={'form'} onSubmit={handleSubmit}>
        <Divider sx={{ my: '1rem' }} />
        {isUpdate ? (
          <FormControl sx={{ my: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Update Exercise</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              name="name"
              label="Select one"
              value={formValues.name}
              onChange={(e) => dataHolder(e)}
              autoWidth={true}
            >
              <MenuItem value={'Chest'}>Chest</MenuItem>
              <MenuItem value={'Legs'}>Legs</MenuItem>
              <MenuItem value={'Shoulders'}>Shoulders</MenuItem>
            </Select>
          </FormControl>
        ) : (
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
        )}

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
        <TextField
          label="Reps"
          variant="filled"
          value={formValues.reps}
          onChange={handleChange}
          name="reps"
          sx={{ mt: 1 }}
        />
        <br />
        <br />

        {isUpdate ? (
          <Button variant="contained" color="success" type="submit">
            Update
          </Button>
        ) : (
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        )}
      </FormControl>
    </Box>
  );
};

export default ExerciseForm;
