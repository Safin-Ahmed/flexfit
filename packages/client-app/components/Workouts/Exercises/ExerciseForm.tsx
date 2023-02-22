import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button, TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box/Box';
import { Stack } from '@mui/system';

const INIT_DATA = {
  exercise: 0,
  routine: 0,
  sets: 0,
  reps: 0,
  time: 0,
  weight: 0,
  isCompleted: false,
};

interface ExerciseFormProps {
  formData: (data: object, formCollapse: boolean) => void;
  isUpdate: boolean;
  isCreate: boolean;
  UpdateExercise: (data: object) => void;
  exercises: any;
  routineId: any;
  // isCompleted: boolean;
}

const ExerciseForm = ({
  formData,
  isUpdate,
  isCreate,
  UpdateExercise,
  exercises,
  routineId,
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
      routine: routineId,
    }));
  };

  const create = () => {
    setFormIsOpen(!formIsOpen);

    if (
      formValues.exercise ||
      formValues.sets ||
      formValues.weight ||
      formValues.reps ||
      formValues.time
    ) {
      formData(formValues, formIsOpen);
    }
  };

  const update = () => {
    if (isUpdate) {
      UpdateExercise(formValues);
    }
  };

  return (
    <Box
      sx={{
        mt: 1,
        maxWidth: '500px',
      }}
    >
      <FormControl>
        <Divider sx={{ my: '1rem' }} />

        <FormControl sx={{ my: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Select Exercise</InputLabel>
          <Select
            name="exercise"
            label="Select one"
            value={formValues?.exercise}
            onChange={handleChange}
            fullWidth={true}
          >
            {
              //@ts-ignore
              exercises?.map((item: any) => {
                return (
                  <MenuItem key={item?.id} value={item?.id}>
                    {item?.attributes?.title}
                  </MenuItem>
                );
              })
            }
          </Select>
        </FormControl>

        <br />

        <TextField
          fullWidth={true}
          label="Sets"
          variant="filled"
          type={'number'}
          value={formValues?.sets}
          onChange={handleChange}
          name="sets"
          sx={{ mt: 1, width: '300px' }}
        />
        <br />
        <br />

        <TextField
          fullWidth={true}
          label="Weight"
          variant="filled"
          type={'number'}
          value={formValues?.weight}
          onChange={handleChange}
          name="weight"
          sx={{ mt: 1 }}
        />
        <br />
        <Typography>Please fill any one of the following:</Typography>

        <TextField
          fullWidth={true}
          label="Reps"
          variant="filled"
          type={'number'}
          value={formValues?.reps}
          onChange={handleChange}
          name="reps"
          sx={
            formValues?.time ? { display: 'none' } : { mt: 1, display: 'block' }
          }
        />
        <br />
        <TextField
          fullWidth={true}
          label="Time"
          variant="filled"
          type={'number'}
          value={formValues?.time}
          onChange={handleChange}
          name="time"
          sx={
            formValues?.reps ? { display: 'none' } : { mt: 1, display: 'block' }
          }
        />

        <br />
        <br />

        <Stack direction={'row'} justifyContent={'space-between'}>
          {isUpdate ? (
            <Button variant="contained" color="success" onClick={update}>
              Update
            </Button>
          ) : (
            <Button variant="contained" color="success" onClick={create}>
              Submit
            </Button>
          )}
        </Stack>
      </FormControl>
    </Box>
  );
};

export default ExerciseForm;
