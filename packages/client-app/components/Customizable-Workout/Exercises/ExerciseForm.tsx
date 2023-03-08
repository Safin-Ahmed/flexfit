import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button, TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box/Box';
import { Stack } from '@mui/system';
import { IndividualExerciseData } from '../Types/types';

interface ExerciseFormProps {
  formData: (data: object, formCollapse: boolean) => void;
  isUpdate: boolean;
  isCreate: boolean;
  UpdateExercise: (data: object) => void;
  exercises: any;
  routineId: any;
  userExercise: any;
}

const ExerciseForm = ({
  formData,
  isUpdate,
  UpdateExercise,
  exercises,
  routineId,
  userExercise,
}: ExerciseFormProps) => {
  const [formValues, setFormValues] = React.useState({
    exercise: userExercise?.data?.attributes?.exercise?.data?.id || 0,
    sets: userExercise?.data?.attributes?.sets || 0,
    weight: userExercise?.data?.attributes?.weight || 0,
    reps: userExercise?.data?.attributes?.reps || 0,
    time: userExercise?.data?.attributes?.time || 0,
  });
  const [formIsOpen, setFormIsOpen] = React.useState(true);

  const handleChange = (
    //@ts-ignore
    e: React.ChangeEvent<HTMLInputElement> | React.SelectChangeEvent<string>
  ) => {
    setFormValues((prev: any) => ({
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
