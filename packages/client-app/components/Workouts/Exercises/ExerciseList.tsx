import { Button } from '@mui/material';
import Box from '@mui/material/Box/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import React from 'react';
import { RoutineData } from '../types';
import DisplayExercise from './DisplayExercise';
import ExerciseForm from './ExerciseForm';

interface ExerciseListProps {
  routine: RoutineData;
}

const ExerciseList = ({ routine }: ExerciseListProps) => {
  const [exerciseListValues, setExerciseListValues] = React.useState<{}[]>([]);
  const [isCreate, setIsCreate] = React.useState(false);

  //For Updating states
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [updateData, setUpdateData] = React.useState({});

  //state lifting and creating Exercises
  const liftFormData = (data: object, formCollapse: boolean) => {
    setExerciseListValues((prev) => [...prev, data]);
    setIsCreate(!formCollapse);
  };

  //Update data holder starts===========
  //@ts-ignore
  const dataHolder = (e: SelectChangeEvent<string>) => {
    console.log(e.target.value);
  };

  // Update or edit a Exercise
  ///////////////////////////
  const UpdateExercise = (id: string) => {
    console.log({ id });
    setIsUpdate(!isUpdate);
  };

  // Delete a Exercise
  ///////////////////////////
  const deleteExercise = (id: string) => {
    const updatedExerciseList = exerciseListValues.filter(
      //@ts-ignore
      (exercise) => exercise.exerciseId !== id
    );
    setExerciseListValues(updatedExerciseList);
    console.log(id);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={() => setIsCreate(!isCreate)}>
        Create Exercises
      </Button>

      {isCreate && (
        <ExerciseForm
          formData={liftFormData}
          //@ts-ignore
          routine={routine}
          //@ts-ignore
          isUpdate={isUpdate}
          dataHolder={dataHolder}
        />
      )}
      {isUpdate && (
        <ExerciseForm
          formData={liftFormData}
          //@ts-ignore
          routine={routine}
          //@ts-ignore
          isUpdate={isUpdate}
          dataHolder={dataHolder}
        />
      )}

      {exerciseListValues.length >= 1 ? (
        <Typography mt={2} variant="h6">
          <Divider></Divider>
          Your List: <Divider></Divider>
        </Typography>
      ) : (
        <Typography mt={2}>Nothing to show. Please Create one...</Typography>
      )}

      <DisplayExercise
        // @ts-ignore
        exerciseListValues={exerciseListValues}
        // @ts-ignore
        routine={routine}
        deleteExercise={deleteExercise}
        UpdateExercise={UpdateExercise}
      />
    </Box>
  );
};

export default ExerciseList;
